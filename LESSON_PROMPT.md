# LESSON_PROMPT

Copy the block below into Claude (or Claude Code), drop your PowerPoint
PDF / text / screenshots into the same message, fill in the bracketed
slots, and Claude will return lesson objects you can paste into
`curriculum.js`.

> Workflow tip: save the PowerPoint as **PDF** (File → Save As → PDF) so
> Claude can read text *and* see slide images. If you only have screenshots,
> attach those instead.

---

## The prompt (copy from here)

```
TASK
Convert the attached PowerPoint lecture into lesson objects for my
self-paced learning site (https://github.com/jozuna19/learn-template).

CONTEXT
- Site: jozuna19/learn-ksu (multi-course)
- Course ID: [e.g. "cs3305" — must match an existing entry in `courses[]`]
- Course title: [e.g. "Data Structures"]
- Module ID: [e.g. "w1" — the week or topic this lecture belongs to]
- Lecture topic: [ONE-LINE TOPIC OF THIS DECK]
- Last lesson ID in this module: [e.g. "cs3305-w1-l3", or "none yet"]

OUTPUT FORMAT (strict)
Return ONLY a JavaScript snippet — one or more lesson objects,
comma-separated, ready to paste into the matching module's `lessons:`
array in curriculum.js. Each object:

  {
    id: '{courseId}-{moduleId}-l{N}',   // globally unique
    title: 'Short Lesson Title',
    content: `
      <h2>Section heading</h2>
      <p>Content paragraph...</p>
      ...
    `
  }

CONTENT RULES
- Use <h2> for major sections, <h3> for subsections inside a section.
- <p> for paragraphs. <ul>/<ol> for lists. <table> for tables.
- <code>inline code or technical terms</code>
- For code blocks, use the cb() helper instead of raw <pre>:
    ${cb(`example code`, 'python')}
  Languages: bash, python, sql, javascript, java, swift, etc.
- Callouts (use sparingly, 0-2 per lesson):
    <div class="tip"><strong>💡 Tip</strong> ...</div>
    <div class="note"><strong>📝 Note</strong> ...</div>
    <div class="warn"><strong>⚠️ Warning</strong> ...</div>
    <div class="info"><strong>ℹ️ Info</strong> ...</div>
- End EVERY lesson with a key-points block:
    <div class="key-points">
      <h4>Key Points</h4>
      <ul><li>...</li><li>...</li></ul>
    </div>

LESSON SIZING
- One PowerPoint deck → 1 to 3 lessons depending on how much material
  there is. A 30-slide deck usually splits into 2-3 lessons.
- Each lesson: 4-8 sections (<h2> headings).
- Pull concrete examples, formulas, diagrams (as ASCII or described),
  and quotes directly from the slides — don't invent.
- Capture EVERY substantive point from the slides. Don't summarize
  away detail.
- If the deck has code, transcribe it into cb() blocks faithfully.

NO em dashes anywhere. Use periods, colons, parentheses instead.

ID NUMBERING
- Globally unique format: {courseId}-{moduleId}-l{N}
- Continue from the next lesson number after "Last lesson ID".
- Example: if last was "cs3305-w1-l3", next is "cs3305-w1-l4", then "cs3305-w1-l5".
- If "Last lesson ID" is "none yet", start at "{courseId}-{moduleId}-l1".

INPUT
[Drop the PowerPoint PDF / text / screenshots below this line]
```

---

## After Claude returns the lesson objects

1. Open `curriculum.js`.
2. Find the matching module's `lessons: [` array.
3. Paste the new lesson object(s) at the end of that array.
4. Add a trailing comma to the previous lesson if there wasn't one.
5. Save.

## Then push the update

```bash
git add curriculum.js
git commit -m "Add lesson m3-l5: requirements elicitation"
git push
firebase deploy --only hosting
```

The site is live within ~30 seconds.

---

## Variations

**For a brand-new module (not just a new lesson):**
Tell Claude in the CONTEXT: `Last lesson ID in the module: none yet (this is the first lesson of a new module mN)` and also ask it to give you the module wrapper:

```js
{
  id: 'm4',
  title: 'Module 4: ...',
  icon: '📚',
  description: 'One sentence.',
  lessons: [
    // ... generated lessons here
  ]
},
```

**For non-coding subjects** (e.g. ethics, business, biology):
Tell Claude to skip the `cb()` helper since you don't have code. Just plain HTML.

**For subjects with formulas/math:**
Ask Claude to use Unicode math characters (∑, ∫, √, ², ³) since the template doesn't ship MathJax. Or wrap formulas in `<code>` for monospace rendering. If you want real LaTeX, add MathJax to `index.html`.
