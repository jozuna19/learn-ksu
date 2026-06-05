# learn-template

A reusable starter for **multi-course study sites**. One site, many
courses, one Firebase project, one URL. Same engine that powers
[learn-python](https://github.com/jozuna19/learn-python) and
[learn-lamp](https://github.com/jozuna19/learn-lamp), but now with a
course selector on the home page and lessons scoped per class.

Static HTML/CSS/JS (no build step). Drops PowerPoint lectures in,
turns them into structured lessons, syncs progress across devices via
Google sign-in (optional).

For a full automated setup (recommended), see [`CODEX_PROMPT.md`](./CODEX_PROMPT.md).

---

## What you get out of the box

- 📚 **Sidebar nav** with collapsible modules and a progress bar
- 🎯 **Continue where you left off** button on the home page
- 🔗 **Shareable lesson URLs** via hash routing (`#m1-l3`)
- 📋 **Copy buttons** on every code block
- ✅ **Mark complete** per lesson with persistent state
- ☁️ **Optional Google sign-in** with cross-device progress sync (Firebase)
- 💾 **Offline-first** — works without any setup, progress saves to localStorage

Works on macOS + Windows + Linux. Tested on Chrome, Firefox, Safari.

---

## Quick start: spin up a new course

```bash
# 1. Use this template on GitHub (Big green button → "Use this template")
# OR clone it manually:
git clone https://github.com/jozuna19/learn-template.git learn-MYSUBJECT
cd learn-MYSUBJECT
rm -rf .git
git init

# 2. Edit course identity
#    - index.html: <title> and .brand text
#    - curriculum.js: COURSE.title and COURSE.subtitle
#    - replace the sample lessons in curriculum.js with your own

# 3. Serve locally to preview
python3 -m http.server 3200
# Open http://localhost:3200

# 4. (Optional) set up Firebase for cloud sync — see "Firebase setup" below

# 5. Push to your own GitHub repo
gh repo create learn-MYSUBJECT --public --source=. --remote=origin --push
```

That's it. Site is now usable. Progress saves to localStorage even without Firebase.

---

## Adding a new lesson from a PowerPoint

This is the weekly workflow. Once you're set up, each new lecture takes about 5 minutes.

### 1. Export the PowerPoint

In PowerPoint / Keynote / Google Slides:
- **File → Save As → PDF** (or Export → PDF)
- This preserves both the text content AND the slide images, so Claude can read everything

### 2. Generate lesson objects with Claude

Open Claude (or Claude Code) and paste the prompt from [`LESSON_PROMPT.md`](./LESSON_PROMPT.md). Attach your PDF. Fill in the bracketed slots:

- Course name
- Module number and title
- One-line topic of this deck
- Last lesson ID in the module (so numbering continues)

Claude returns a JavaScript snippet — one or more lesson objects ready to paste.

### 3. Append to `curriculum.js`

Open `curriculum.js`, find the right module's `lessons: [` array, paste the new objects at the end. Add a trailing comma to the previous lesson if needed.

### 4. Push and deploy

```bash
git add curriculum.js
git commit -m "Add lesson m3-l5: requirements elicitation"
git push

# If you set up Firebase hosting:
firebase deploy --only hosting
```

Site updates within ~30 seconds. Your previous progress (and your learners' progress) is preserved because lesson IDs didn't change.

---

## File structure

```
learn-template/
├── index.html           # App skeleton + your course title
├── style.css            # All styles (don't touch unless you want to)
├── app.js               # Routing, progress, Firebase wiring (don't touch)
├── curriculum.js        # ← YOUR COURSE CONTENT lives here
├── firebase-config.js   # Paste your Firebase config here
├── firebase.json        # Firebase hosting + Firestore deploy config
├── firestore.rules      # Per-user read/write rules
├── .firebaserc          # Project alias
├── LESSON_PROMPT.md     # The Claude prompt for converting PPT → lessons
└── README.md            # This file
```

**The only file you edit regularly is `curriculum.js`.** Everything else is plumbing.

---

## Lesson object format

Each lesson is just an object in `curriculum.js`:

```js
{
  id: 'm1-l3',           // module 1, lesson 3 — must be unique
  title: 'Lesson Title',
  content: `
    <h2>Section</h2>
    <p>Content...</p>

    ${cb(`example code`, 'python')}

    <div class="tip"><strong>💡 Tip</strong> Helpful pointer.</div>

    <div class="key-points">
      <h4>Key Points</h4>
      <ul><li>One bullet per takeaway</li></ul>
    </div>
  `
}
```

See `curriculum.js` Lesson 1.1 for a complete worked example showing every formatting element.

---

## Firebase setup (optional — for cloud sync)

If you want Google sign-in so progress syncs across devices:

1. Create a Firebase project at <https://console.firebase.google.com>
2. Authentication → Sign-in method → Google → Enable → Save
3. Firestore Database → Create database → test mode → pick region
4. Project Settings → General → Your apps → add Web app → copy `firebaseConfig`
5. Paste the config into `firebase-config.js`
6. Update `.firebaserc` with your project ID
7. Install the Firebase CLI and deploy:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy
   ```
8. **Important:** share the `https://YOUR-PROJECT-ID.firebaseapp.com` URL, not your GitHub Pages URL. Google OAuth only works on the firebaseapp.com domain.

For the full step-by-step with gotchas, see [learn-lamp's SETUP.md](https://github.com/jozuna19/learn-lamp/blob/main/SETUP.md).

---

## Customization

### Colors / theme
Edit `:root` variables at the top of `style.css`. The accent color, background tones, callout colors all live there.

### Add a new highlight.js language
In `index.html`, add a script tag:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/LANG.min.js"></script>
```

### Add MathJax for formulas
Add to `index.html` before the closing `</body>`:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```
Then write formulas inline as `$E = mc^2$` or block as `$$ ... $$`.

### Add interactive runners (terminal, SQL, etc.)
See [learn-lamp's app.js](https://github.com/jozuna19/learn-lamp/blob/main/app.js) for examples of a fake Linux terminal and an in-browser SQL engine. Copy those sections in if your subject needs them.

---

## License

MIT. Fork, copy, remix.
