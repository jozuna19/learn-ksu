# CODEX_PROMPT

A self-contained spec for an AI coding agent (Codex / Claude Code / Cursor) to
spin up a **single learning website that contains multiple courses**, with
Google sign-in and cloud progress sync. Paste this whole file into the agent
along with the courses you want, and it will do the whole flow end to end.

---

## Who this is for

John Ozuna. SWE student at Kennesaw State. Username: `jozuna19`.
Email: `john.ozuna01@gmail.com`. Local project root: `~/IdeaProjects`.

`gh` and `firebase` are already installed and authenticated.

---

## Architecture

**One site. Multiple courses inside it.**

- Home page shows colored course cards (one per class).
- Clicking a course drills into that course's modules and lessons.
- Sidebar groups everything by course, collapsible.
- One Firebase project, one URL, one progress doc per user (covers all courses).
- Lesson IDs are globally unique: `{courseId}-{moduleId}-{lessonId}` (e.g. `cs3305-w1-l1`).

This is different from the older 4-separate-sites approach. One site is better
for John because: it's one URL to remember, one place to add weekly content,
and progress across all classes shows in one dashboard.

---

## Example: KSU Summer 2026

The agent should build a site `learn-ksu` containing these 4 courses:

| courseId | Title | code | accent color | icon | subtitle |
|---|---|---|---|---|---|
| `cs3305`  | Data Structures                       | `CS 3305`  | `#10b981` | 🌲 | Trees, graphs, hash tables, and the algorithms that make code fast. |
| `swe3313` | Intro to Software Engineering         | `SWE 3313` | `#3b82f6` | 🏗️ | Requirements, design, and the discipline of building real software. |
| `cse3153` | Database Systems                      | `CSE 3153` | `#f59e0b` | 🗄️ | Relational design, SQL, transactions, indexes, normalization. |
| `cse3801` | Professional Practices and Ethics     | `CSE 3801` | `#8b5cf6` | ⚖️ | Ethics, communication, and the social impact of computing. |

For a different term or different classes, John supplies a similar table.

---

## Execution steps

### 1. Create the repo from this template

```bash
gh repo create jozuna19/learn-ksu \
  --public \
  --template jozuna19/learn-template \
  --description "Self-paced lecture notes for my KSU classes — sign in with Google to sync progress"

sleep 5
git clone https://github.com/jozuna19/learn-ksu.git ~/IdeaProjects/learn-ksu
cd ~/IdeaProjects/learn-ksu
```

### 2. Customize the site identity

**`index.html`** — update `<title>` and `.brand`:

```html
<title>Learn KSU · Summer 2026</title>
<div class="brand">🎓 Learn KSU</div>
```

### 3. Replace `curriculum.js` with the multi-course structure

Open `curriculum.js`. Replace the `APP` block and the `courses` array with the real data. Keep the `cb()` helper and `esc()` helper at the top exactly as they are.

```js
const APP = {
  title:    "Learn KSU · Summer 2026",
  subtitle: "Lecture notes across all my classes this semester."
};

const courses = [
  {
    id: 'cs3305',
    title: 'Data Structures',
    code: 'CS 3305',
    icon: '🌲',
    color: '#10b981',
    subtitle: 'Trees, graphs, hash tables, and the algorithms that make code fast.',
    modules: [
      { id: 'w1', title: 'Week 1', icon: '📅', description: 'Intro and review.', lessons: [] }
    ]
  },
  {
    id: 'swe3313',
    title: 'Intro to Software Engineering',
    code: 'SWE 3313',
    icon: '🏗️',
    color: '#3b82f6',
    subtitle: 'Requirements, design, and the discipline of building real software.',
    modules: [
      { id: 'w1', title: 'Week 1', icon: '📅', description: 'Intro and review.', lessons: [] }
    ]
  },
  {
    id: 'cse3153',
    title: 'Database Systems',
    code: 'CSE 3153',
    icon: '🗄️',
    color: '#f59e0b',
    subtitle: 'Relational design, SQL, transactions, indexes, normalization.',
    modules: [
      { id: 'w1', title: 'Week 1', icon: '📅', description: 'Intro and review.', lessons: [] }
    ]
  },
  {
    id: 'cse3801',
    title: 'Professional Practices and Ethics',
    code: 'CSE 3801',
    icon: '⚖️',
    color: '#8b5cf6',
    subtitle: 'Ethics, communication, and the social impact of computing.',
    modules: [
      { id: 'w1', title: 'Week 1', icon: '📅', description: 'Intro and review.', lessons: [] }
    ]
  }
];
```

Courses start with one empty `w1` module so the sidebar has structure. Lessons get added each week.

### 4. Create the Firebase project

```bash
firebase projects:create learn-ksu --display-name "Learn KSU"

firebase apps:create WEB "learn-ksu" --project learn-ksu
# Capture the APP_ID printed by the previous command, then:
firebase apps:sdkconfig WEB <APP_ID> --project learn-ksu
```

Paste the resulting `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId` into `firebase-config.js`, replacing the `YOUR_*` placeholders.

Update `.firebaserc` to:

```json
{ "projects": { "default": "learn-ksu" } }
```

### 5. Pause for John (manual Firebase Console steps)

Tell John he needs to do these two steps in his browser. **Do not proceed until he confirms both are done.**

> **Step A. Enable Google Sign-in:**
> `https://console.firebase.google.com/project/learn-ksu/authentication/providers`
> Click `Get started` → click `Google` → toggle Enable → pick a support email → Save.
>
> **Step B. Create Firestore database:**
> `https://console.firebase.google.com/project/learn-ksu/firestore`
> Click `Create database` → choose region `nam5` (or `us-east1`) → start in **test mode** → Enable. Wait ~30s for it to provision.

### 6. Verify Firestore exists, then deploy

```bash
firebase firestore:databases:list --project learn-ksu
firebase deploy --project learn-ksu
```

Confirm `Hosting URL: https://learn-ksu.web.app` in the output. The OAuth-friendly URL is `https://learn-ksu.firebaseapp.com` (the one to share).

### 7. Verify the auth endpoint

```bash
curl -s https://learn-ksu.firebaseapp.com/__/firebase/init.json | head -3
```

Should return JSON containing `apiKey`. If it returns 404, sign-in won't work; redeploy.

### 8. Commit and push

```bash
git add .
git commit -m "Customize for KSU Summer 2026: 4 courses"
git push
```

### 9. Update the repo metadata

```bash
gh repo edit jozuna19/learn-ksu \
  --homepage "https://learn-ksu.firebaseapp.com" \
  --description "All my KSU lecture notes in one place — Data Structures, SWE, Databases, Ethics. Sign in with Google to sync progress across devices." \
  --add-topic learning --add-topic ksu --add-topic firebase --add-topic study-notes
```

### 10. Summary for John

Print these to the chat:

```
✅ Live site:        https://learn-ksu.firebaseapp.com
✅ Repo:             https://github.com/jozuna19/learn-ksu
✅ Firebase Console: https://console.firebase.google.com/project/learn-ksu
✅ Local copy:       ~/IdeaProjects/learn-ksu

Courses are set up but empty. Add lessons each week by following the
WEEKLY LESSON WORKFLOW below.
```

---

## Weekly lesson workflow

Each week, every professor drops a new PowerPoint. John runs this once per class per week:

1. **John saves the PowerPoint as a PDF.**
2. **John tells the agent** (in chat):
   > Add this PDF as a lesson in learn-ksu under course `{courseId}`. Last lesson ID in that module was `{lessonId}`, or "none yet" if this is the first lesson of the module.
3. **The agent:**
   - Reads `~/IdeaProjects/learn-ksu/curriculum.js` to learn the existing style and module structure.
   - Follows `LESSON_PROMPT.md` to convert the PDF into 1-3 lesson objects.
   - Uses globally-unique IDs: `{courseId}-{moduleId}-{lessonId}`. Examples: `cs3305-w1-l1`, `swe3313-w3-l2`.
   - Appends the new lesson object(s) to the matching course's matching module's `lessons:` array in `curriculum.js`.
   - If the lecture starts a new week or topic, creates a new module in that course first (e.g. add a `w2` module wrapper before adding lessons).
   - Commits, pushes, deploys:
     ```bash
     cd ~/IdeaProjects/learn-ksu
     git add curriculum.js
     git commit -m "Add lesson {newLessonId}: {title}"
     git push
     firebase deploy --only hosting --project learn-ksu
     ```
   - Reports the new lesson URL: `https://learn-ksu.firebaseapp.com/#{newLessonId}`

Existing progress is preserved across deploys because lesson IDs never change.

---

## Common pitfalls

- **`authDomain` must be `learn-ksu.firebaseapp.com`** in firebase-config.js. Don't change to GitHub Pages or custom domain — Google OAuth's redirect handler only lives at `*.firebaseapp.com`.
- **Firestore won't auto-create.** Step 5B is mandatory. Without it, sign-in works but progress can't sync.
- **Deploy hosting at least once before testing sign-in.** Auth needs `/__/firebase/init.json` which only exists after a deploy.
- **`signInWithRedirect`** (not popup). The template already uses this; don't change it.

---

## One-line prompt for John to paste

```
Read https://github.com/jozuna19/learn-template/blob/main/CODEX_PROMPT.md
and execute it to create my Summer 2026 KSU learning site at jozuna19/learn-ksu.
Pause at step 5 to give me the two Firebase Console links to open, then finish
the rest after I confirm both are done.
```
