// ════════════════════════════════════════════════════════════════
//  CURRICULUM
//  ----------------------------------------------------------------
//  Multi-course structure:
//    APP  → identity of the whole site
//    courses[] → one entry per class
//      modules[] → typically one per week or topic
//        lessons[] → one per lecture / sub-topic
//
//  Lesson IDs MUST be globally unique. Convention:
//    {courseId}-{moduleId}-{lessonId}
//    e.g. cs3305-w1-l1
//
//  To add a new lesson: find the right course → right module →
//  push to its `lessons` array. See LESSON_PROMPT.md for the
//  Claude/Codex prompt that converts a PowerPoint into the
//  right object shape.
// ════════════════════════════════════════════════════════════════

// ── App identity (shown on the home screen) ─────────────────────────
const APP = {
  title:    "Learn [Term]",
  subtitle: "Multi-course study site."
};

// ── Helpers ─────────────────────────────────────────────────────────
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function cb(code, lang = 'bash', label) {
  const e = esc(code);
  const attr = code.replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  return `<div class="code-block">
    <div class="code-block-header">
      <span>${label || lang}</span>
      <button class="copy-btn" data-code="${attr}" title="Copy to clipboard">Copy</button>
    </div>
    <pre><code class="language-${lang}">${e}</code></pre>
  </div>`;
}

// ── Courses ─────────────────────────────────────────────────────────
const courses = [

  // ═════════════════════════════════════════════════════════════════
  // EXAMPLE COURSE — copy the block, change ids and content
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'example',
    title: 'Example Course',
    code: 'EX 1000',
    icon: '📘',
    color: '#3b82f6',
    subtitle: 'Replace this course with your own. One sentence describing the class.',
    modules: [
      {
        id: 'w1',
        title: 'Week 1',
        icon: '📅',
        description: 'Lectures from the first week.',
        lessons: [
          {
            id: 'example-w1-l1',
            title: 'Welcome lesson',
            content: `
              <h2>What goes in a lesson</h2>
              <p>Replace this lesson with content from a PowerPoint. The format supports headings, paragraphs, lists, tables, code blocks, callouts, and a key-points summary.</p>

              <h2>Code blocks</h2>
              ${cb(`# Example code
print("Hello, world!")`, 'python')}

              <h2>Callouts</h2>
              <div class="tip"><strong>💡 Tip</strong> A short helpful note.</div>
              <div class="note"><strong>📝 Note</strong> Extra context.</div>
              <div class="warn"><strong>⚠️ Warning</strong> Something to watch out for.</div>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Lessons live inside <code>modules</code> inside <code>courses</code></li>
                  <li>Lesson IDs are globally unique: <code>{courseId}-{moduleId}-{lessonId}</code></li>
                  <li>End every lesson with key points</li>
                </ul>
              </div>`
          }
        ]
      }
    ]
  }

];
