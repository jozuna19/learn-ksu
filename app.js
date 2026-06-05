// ════════════════════════════════════════════════════════════════
//  Learn-template core app — multi-course version
//  ----------------------------------------------------------------
//  Handles: course selector home, sidebar grouped by course,
//  hash routing (3 views: home / course / lesson), progress
//  tracking with globally-unique lesson IDs, Firebase auth +
//  cloud sync, copy buttons.
// ════════════════════════════════════════════════════════════════

// ── Progress state ──────────────────────────────────────────────────
const STORAGE_KEY = 'lt_done_v2';
let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
let currentHash = null;

// Firebase state
let firebaseApp = null;
let auth = null;
let db = null;
let currentUser = null;
let cloudSyncing = false;

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  syncToCloud();
}

async function syncToCloud() {
  if (!currentUser || !db) return;
  try {
    cloudSyncing = true; renderAuthUI();
    await db.collection('users').doc(currentUser.uid).set({
      completed: [...completed],
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } catch (e) { console.warn('Cloud sync failed:', e.message); }
  finally { cloudSyncing = false; renderAuthUI(); }
}

// ── Indexed views of the curriculum ─────────────────────────────────
const allLessons = courses.flatMap(c =>
  c.modules.flatMap(m =>
    m.lessons.map(l => ({
      ...l,
      courseId: c.id,
      courseTitle: c.title,
      courseCode: c.code,
      courseIcon: c.icon,
      courseColor: c.color,
      moduleId: m.id,
      moduleTitle: m.title
    }))
  )
);

function lessonById(id)   { return allLessons.find(l => l.id === id); }
function courseById(id)   { return courses.find(c => c.id === id); }
function lessonIndex(id)  { return allLessons.findIndex(l => l.id === id); }
function lessonsForCourse(courseId) { return allLessons.filter(l => l.courseId === courseId); }

// ── Route parsing ───────────────────────────────────────────────────
function parseHash() {
  const hash = (window.location.hash || '').replace(/^#/, '');
  if (!hash) return { view: 'home' };
  if (lessonById(hash))  return { view: 'lesson', id: hash };
  if (courseById(hash))  return { view: 'course', id: hash };
  return { view: 'home' };
}

function navigate(hash) {
  const target = hash ? '#' + hash : '#';
  if (window.location.hash !== target) {
    window.location.hash = target;
    return;
  }
  renderRoute();
}

window.addEventListener('hashchange', renderRoute);

function renderRoute() {
  const r = parseHash();
  currentHash = r.view === 'home' ? null : r.id;

  const el = document.getElementById('lesson');
  if      (r.view === 'home')   renderHome(el);
  else if (r.view === 'course') renderCourseHome(el, courseById(r.id));
  else if (r.view === 'lesson') renderLesson(el, lessonById(r.id));

  renderNav();
  renderAuthUI();
  document.getElementById('main').scrollTo(0, 0);
}

// ── Sidebar ─────────────────────────────────────────────────────────
function renderNav() {
  const nav = document.getElementById('moduleList');
  nav.innerHTML = '';
  const r = parseHash();
  const activeLesson = r.view === 'lesson' ? r.id : null;
  const activeCourse = r.view === 'course' ? r.id
                     : r.view === 'lesson' ? lessonById(r.id)?.courseId
                     : null;

  const home = document.createElement('a');
  home.className = 'lesson-link' + (r.view === 'home' ? ' active' : '');
  home.innerHTML = `<span class="check">⊞</span> Home`;
  home.onclick = () => navigate(null);
  nav.appendChild(home);

  courses.forEach(course => {
    const isActiveCourse = activeCourse === course.id;

    const courseHeader = document.createElement('div');
    courseHeader.className = 'course-header' + (isActiveCourse ? '' : ' collapsed');
    courseHeader.innerHTML = `
      <span class="course-icon" style="color:${course.color}">${course.icon}</span>
      <span class="course-name">${course.title}</span>
      <span class="course-toggle">▾</span>`;
    nav.appendChild(courseHeader);

    const courseGroup = document.createElement('div');
    courseGroup.className = 'course-group' + (isActiveCourse ? '' : ' collapsed');

    const courseLink = document.createElement('div');
    courseLink.className = 'lesson-link course-home-link' + (r.view === 'course' && r.id === course.id ? ' active' : '');
    courseLink.innerHTML = `<span class="check">›</span> Course home`;
    courseLink.onclick = () => navigate(course.id);
    courseGroup.appendChild(courseLink);

    course.modules.forEach(mod => {
      const modHeader = document.createElement('div');
      modHeader.className = 'mod-header';
      modHeader.innerHTML = `<span class="mod-icon">${mod.icon || '📂'}</span>${mod.title}<span class="mod-toggle">▾</span>`;
      courseGroup.appendChild(modHeader);

      const modGroup = document.createElement('div');
      modGroup.className = 'mod-lessons';

      mod.lessons.forEach(l => {
        const link = document.createElement('div');
        link.className = 'lesson-link'
          + (l.id === activeLesson ? ' active' : '')
          + (completed.has(l.id) ? ' done' : '');
        link.innerHTML = `<span class="check">${completed.has(l.id) ? '✓' : '○'}</span> ${l.title}`;
        link.onclick = () => navigate(l.id);
        modGroup.appendChild(link);
      });

      modHeader.onclick = () => { modHeader.classList.toggle('collapsed'); modGroup.classList.toggle('collapsed'); };
      courseGroup.appendChild(modGroup);
    });

    courseHeader.onclick = () => { courseHeader.classList.toggle('collapsed'); courseGroup.classList.toggle('collapsed'); };
    nav.appendChild(courseGroup);
  });

  updateProgress();
}

function updateProgress() {
  const total = allLessons.length;
  const done = allLessons.filter(l => completed.has(l.id)).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${pct}% complete (${done}/${total})`;
}

// ── Home: course selector ───────────────────────────────────────────
function renderHome(el) {
  const total = allLessons.length;
  const done = allLessons.filter(l => completed.has(l.id)).length;

  let nextId = null;
  for (const l of allLessons) { if (!completed.has(l.id)) { nextId = l.id; break; } }

  const ctaHtml = (total > 0)
    ? (nextId
        ? `<button class="cta-btn" onclick="navigate('${nextId}')">▶ ${done === 0 ? 'Start Learning' : 'Continue where you left off'}</button>`
        : `<div class="course-complete">🎉 All courses complete</div>`)
    : `<div class="empty-state">No lessons yet — add some via the weekly lesson workflow.</div>`;

  el.innerHTML = `
    <div class="home-hero">
      <h1>${escHtml(APP.title)}</h1>
      <p>${escHtml(APP.subtitle)}</p>
      <div class="home-stats">
        <div class="stat"><div class="stat-n">${courses.length}</div><div class="stat-label">Courses</div></div>
        <div class="stat"><div class="stat-n">${total}</div><div class="stat-label">Lessons</div></div>
        <div class="stat"><div class="stat-n">${done}</div><div class="stat-label">Completed</div></div>
      </div>
      ${ctaHtml}
    </div>
    <div class="modules-grid">
      ${courses.map(c => {
        const cTotal = lessonsForCourse(c.id).length;
        const cDone = lessonsForCourse(c.id).filter(l => completed.has(l.id)).length;
        return `<div class="module-card" onclick="navigate('${c.id}')" style="border-top-color:${c.color}">
          <div class="card-icon">${c.icon}</div>
          <div class="card-code" style="color:${c.color}">${escHtml(c.code || '')}</div>
          <h3>${escHtml(c.title)}</h3>
          <p>${escHtml(c.subtitle || '')}</p>
          <div class="card-count">${cDone}/${cTotal} lessons complete</div>
        </div>`;
      }).join('')}
    </div>`;
}

// ── Course home: list of modules + lessons in that course ──────────
function renderCourseHome(el, course) {
  if (!course) { renderHome(el); return; }

  const courseLessons = lessonsForCourse(course.id);
  const total = courseLessons.length;
  const done  = courseLessons.filter(l => completed.has(l.id)).length;

  let nextId = null;
  for (const l of courseLessons) { if (!completed.has(l.id)) { nextId = l.id; break; } }

  const ctaHtml = (total > 0)
    ? (nextId
        ? `<button class="cta-btn" onclick="navigate('${nextId}')" style="background:${course.color}">▶ ${done === 0 ? 'Start Course' : 'Continue'}</button>`
        : `<div class="course-complete">🎉 Course complete</div>`)
    : `<div class="empty-state">No lessons yet for this course.</div>`;

  el.innerHTML = `
    <div class="lesson-breadcrumb"><a onclick="navigate(null)">Home</a> › <span>${escHtml(course.title)}</span></div>
    <div class="home-hero" style="padding-top:24px">
      <div style="font-size:48px;margin-bottom:8px">${course.icon}</div>
      <div style="color:${course.color};font-weight:700;font-size:14px;letter-spacing:1px;margin-bottom:6px">${escHtml(course.code || '')}</div>
      <h1>${escHtml(course.title)}</h1>
      <p>${escHtml(course.subtitle || '')}</p>
      <div class="home-stats">
        <div class="stat"><div class="stat-n">${course.modules.length}</div><div class="stat-label">Modules</div></div>
        <div class="stat"><div class="stat-n">${total}</div><div class="stat-label">Lessons</div></div>
        <div class="stat"><div class="stat-n">${done}</div><div class="stat-label">Completed</div></div>
      </div>
      ${ctaHtml}
    </div>
    <div class="modules-grid">
      ${course.modules.map(m => {
        const mDone = m.lessons.filter(l => completed.has(l.id)).length;
        const firstLesson = m.lessons[0];
        const onclick = firstLesson ? `onclick="navigate('${firstLesson.id}')"` : '';
        return `<div class="module-card" ${onclick} style="border-top-color:${course.color}">
          <div class="card-icon">${m.icon || '📂'}</div>
          <h3>${escHtml(m.title)}</h3>
          <p>${escHtml(m.description || '')}</p>
          <div class="card-count">${mDone}/${m.lessons.length} lessons</div>
        </div>`;
      }).join('')}
    </div>`;
}

// ── Lesson ──────────────────────────────────────────────────────────
function renderLesson(el, lesson) {
  if (!lesson) { renderHome(el); return; }

  // Find prev/next within the lesson's course
  const courseLessons = lessonsForCourse(lesson.courseId);
  const idx = courseLessons.findIndex(l => l.id === lesson.id);
  const prev = idx > 0 ? courseLessons[idx - 1] : null;
  const next = idx < courseLessons.length - 1 ? courseLessons[idx + 1] : null;
  const isDone = completed.has(lesson.id);

  el.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a onclick="navigate(null)">Home</a> ›
        <a onclick="navigate('${lesson.courseId}')">${escHtml(lesson.courseTitle)}</a> ›
        <span>${escHtml(lesson.title)}</span>
      </div>
      <h1>${escHtml(lesson.title)}</h1>
    </div>
    <div class="lesson-body">${lesson.content}</div>
    <div class="lesson-nav">
      <button class="nav-btn" onclick="${prev ? `navigate('${prev.id}')` : ''}" ${!prev ? 'disabled' : ''}>
        ${prev ? '← ' + escHtml(prev.title) : '← Previous'}
      </button>
      <button class="complete-btn${isDone ? ' done' : ''}" id="completeBtn" onclick="toggleComplete('${lesson.id}')">
        ${isDone ? '✓ Completed' : 'Mark Complete'}
      </button>
      <button class="nav-btn primary" onclick="${next ? `navigate('${next.id}')` : `navigate('${lesson.courseId}')`}">
        ${next ? escHtml(next.title) + ' →' : 'Course home →'}
      </button>
    </div>`;

  hljs.highlightAll();
  attachCopyButtons();
}

function toggleComplete(id) {
  if (completed.has(id)) { completed.delete(id); } else { completed.add(id); }
  save();
  renderRoute();
}

// ── Copy buttons ────────────────────────────────────────────────────
function attachCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.code || '';
      try { await navigator.clipboard.writeText(code); }
      catch (e) {
        const ta = document.createElement('textarea');
        ta.value = code; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
      }
      btn.classList.add('copied');
      const orig = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => { btn.classList.remove('copied'); btn.textContent = orig; }, 1500);
    });
  });
}

// ── Utilities ───────────────────────────────────────────────────────
function escHtml(s) { return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function showToast(msg, kind = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast visible' + (kind ? ' ' + kind : '');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => { t.className = 'toast'; }, 2400);
}

// ── Firebase Auth + Cloud Sync (unchanged from single-course) ───────
function renderAuthUI() {
  const box = document.getElementById('authBox');
  if (!box) return;

  if (typeof FIREBASE_ENABLED === 'undefined' || !FIREBASE_ENABLED) {
    box.innerHTML = `<div class="auth-disabled">📁 Progress saved in this browser</div>`;
    return;
  }

  if (!currentUser) {
    box.innerHTML = `
      <button class="auth-signin-btn" id="signInBtn">
        <span class="g-icon"></span>
        <span>Sign in with Google</span>
      </button>
      <div class="auth-hint">Sync progress across devices</div>`;
    const btn = document.getElementById('signInBtn');
    if (btn) btn.onclick = signIn;
    return;
  }

  const name = (currentUser.displayName || '').split(' ')[0] || currentUser.email?.split('@')[0] || 'You';
  const photo = currentUser.photoURL || '';
  const statusClass = cloudSyncing ? 'syncing' : 'synced';
  const statusText = cloudSyncing ? 'Syncing…' : 'Synced';

  box.innerHTML = `
    <div class="auth-user">
      ${photo
        ? `<img class="auth-avatar" src="${escHtml(photo)}" alt="" referrerpolicy="no-referrer">`
        : `<div class="auth-avatar-fallback">${escHtml(name[0].toUpperCase())}</div>`}
      <div class="auth-user-info">
        <div class="auth-user-name">${escHtml(name)}</div>
        <div class="auth-user-status ${statusClass}">${escHtml(statusText)}</div>
      </div>
      <button class="auth-signout-btn" id="signOutBtn" title="Sign out">⏻</button>
    </div>`;
  const btn = document.getElementById('signOutBtn');
  if (btn) btn.onclick = signOut;
}

function bootAuth() {
  renderAuthUI();
  if (typeof FIREBASE_ENABLED === 'undefined' || !FIREBASE_ENABLED) return;

  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(e => console.warn(e.message));

    auth.getRedirectResult()
      .then(result => { if (result?.user) showToast(`Welcome, ${result.user.displayName?.split(' ')[0] || 'friend'}`, 'success'); })
      .catch(err => { if (err?.message) showToast('Sign-in failed: ' + err.message, 'error'); });

    auth.onAuthStateChanged(user => {
      currentUser = user;
      renderAuthUI();
      if (user) mergeFromCloud(user);
    });
  } catch (e) { console.warn('Firebase init failed (offline-only):', e); renderAuthUI(); }
}

async function mergeFromCloud(user) {
  if (!db) return;
  cloudSyncing = true; renderAuthUI();
  try {
    const docRef = db.collection('users').doc(user.uid);
    const doc = await docRef.get();
    const cloud = doc.exists ? (doc.data().completed || []) : [];

    const merged = new Set([...completed, ...cloud]);
    const grew = merged.size > completed.size;
    completed = merged;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));

    await docRef.set({
      completed: [...completed],
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      email: user.email || null,
      displayName: user.displayName || null
    }, { merge: true });

    cloudSyncing = false; renderAuthUI();
    renderRoute();
    if (grew) showToast('Progress synced from cloud', 'success');
  } catch (e) {
    console.warn('Cloud merge failed:', e.message);
    cloudSyncing = false; renderAuthUI();
    if (e.code === 'failed-precondition' || e.code === 'unavailable') {
      showToast('Firestore not enabled — see SETUP', 'error');
    }
  }
}

function signIn() {
  if (!auth) return;
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  auth.signInWithRedirect(provider).catch(err => { console.warn(err); showToast('Sign-in failed', 'error'); });
}

function signOut() {
  if (!auth) return;
  auth.signOut().then(() => showToast('Signed out', ''));
}

// ── Boot ────────────────────────────────────────────────────────────
renderRoute();
bootAuth();
