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
// ════════════════════════════════════════════════════════════════

const APP = {
  title:    "Learn KSU · Summer 2026",
  subtitle: "One study hub for Data Structures, Software Engineering, Databases, and Ethics."
};

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

const courses = [
  {
    id: 'cs3305',
    title: 'Data Structures',
    code: 'CS 3305',
    icon: 'DS',
    color: '#10b981',
    subtitle: 'Trees, graphs, hash tables, and the algorithms that make code fast.',
    modules: [
      {
        id: 'w1',
        title: 'Week 1 · Java Survival and Recursion',
        icon: '01',
        description: 'The Java basics John needs before recursion and Assignment 1.',
        lessons: [
          {
            id: 'cs3305-w1-l1',
            title: 'A Java Program Starts at main',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>A Java file usually contains a <strong>class</strong>. When you run a Java program, Java looks for a special method named <code>main</code> and runs the statements inside it from top to bottom.</p>

              <div class="note"><strong>Memory shape:</strong> class → main → statement 1 → statement 2 → statement 3</div>

              ${cb(`public class Hello {
    public static void main(String[] args) {
        System.out.println("Data");
        System.out.println("Structures");
        System.out.println("Start");
    }
}`, 'java', 'Java')}

              <h2>Predict It</h2>
              <p>What prints first?</p>
              <ul>
                <li><strong>Correct:</strong> <code>Data</code></li>
                <li>Why: Java runs the lines inside <code>main</code> from top to bottom.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li><code>main</code> is the starting point of a basic Java program.</li>
                  <li><code>System.out.println(...)</code> prints a line.</li>
                  <li>Java executes statements in order unless control flow changes that order.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l2',
            title: 'Variables Hold Values',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>A variable is a named box for a value. Java types tell the compiler what kind of value the box can hold.</p>

              <div class="note"><strong>Memory shape:</strong> <code>int count = 3</code> means <code>count</code> stores a whole number. <code>String name = "John"</code> stores text.</div>

              ${cb(`int count = 3;
String course = "CS 3305";
boolean ready = true;

System.out.println(course);
System.out.println(count);`, 'java', 'Java')}

              <h2>Predict It</h2>
              <p>Which variable stores text?</p>
              <ul>
                <li><strong>Correct:</strong> <code>course</code></li>
                <li>Why: <code>String</code> variables store text, and <code>course</code> is declared as a <code>String</code>.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li><code>int</code> stores whole numbers.</li>
                  <li><code>String</code> stores text.</li>
                  <li><code>boolean</code> stores <code>true</code> or <code>false</code>.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l3',
            title: 'Arrays and Loops Work Together',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>An array stores multiple values of the same type. A loop lets you visit each position. Arrays start at index <code>0</code>.</p>

              <div class="note"><strong>Memory shape:</strong> <code>nums = [4, 7, 9]</code> has indexes <code>0</code>, <code>1</code>, and <code>2</code>.</div>

              ${cb(`int[] nums = {4, 7, 9};

for (int i = 0; i < nums.length; i++) {
    System.out.println(nums[i]);
}`, 'java', 'Java')}

              <h2>Predict It</h2>
              <p>What is <code>nums[1]</code>?</p>
              <ul>
                <li><strong>Correct:</strong> <code>7</code></li>
                <li>Why: index <code>0</code> is <code>4</code>, index <code>1</code> is <code>7</code>, and index <code>2</code> is <code>9</code>.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Arrays store several values in one variable.</li>
                  <li>Array indexes start at <code>0</code>.</li>
                  <li>A <code>for</code> loop is a common way to walk through an array.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l4',
            title: 'Methods Package Reusable Work',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>A method takes input, does work, and may return an output. Data structures use methods constantly: <code>add</code>, <code>remove</code>, <code>search</code>, <code>peek</code>, <code>poll</code>.</p>

              <div class="note"><strong>Memory shape:</strong> input → method → output</div>

              ${cb(`public static boolean isEven(int n) {
    return n % 2 == 0;
}

System.out.println(isEven(6));`, 'java', 'Java')}

              <h2>Predict It</h2>
              <p>What does <code>isEven(6)</code> return?</p>
              <ul>
                <li><strong>Correct:</strong> <code>true</code></li>
                <li>Why: <code>6 % 2</code> is <code>0</code>, so the comparison is true.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>A parameter is input to a method.</li>
                  <li>A return value is the answer a method gives back.</li>
                  <li>Methods help you name and reuse logic.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l5',
            title: 'Recursion Needs a Stop Condition',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>Recursion means a method calls itself on a smaller problem. It must have a <strong>base case</strong>, or it keeps calling itself until the call stack runs out of room.</p>

              <div class="tip"><strong>Core pattern:</strong> stop case + smaller repeat.</div>

              ${cb(`public static int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}`, 'java', 'Java')}

              <h2>Trace <code>factorial(3)</code></h2>
              <pre><code>factorial(3)
= 3 * factorial(2)
= 3 * 2 * factorial(1)
= 3 * 2 * 1 * factorial(0)
= 3 * 2 * 1 * 1
= 6</code></pre>

              <h2>Why It Stops</h2>
              <p>The method keeps shrinking <code>n</code> until <code>n == 0</code>. That is the base case. Once Java reaches the base case, the calls return back up the chain.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>The base case stops recursion.</li>
                  <li>The recursive case calls the same method with a smaller input.</li>
                  <li>For factorial, <code>factorial(n) = n * factorial(n - 1)</code>.</li>
                  <li>Recursion uses the call stack to remember unfinished calls.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l6',
            title: 'Fibonacci Makes Two Recursive Calls',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>Fibonacci numbers start <code>0, 1, 1, 2, 3, 5, 8...</code>. Each number is the sum of the two before it.</p>

              <pre><code>index: 0  1  2  3  4  5
value: 0  1  1  2  3  5</code></pre>

              ${cb(`public static int fib(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}`, 'java', 'Java')}

              <h2>Trace <code>fib(3)</code></h2>
              <pre><code>fib(3)
= fib(2) + fib(1)
= (fib(1) + fib(0)) + fib(1)
= (1 + 0) + 1
= 2</code></pre>

              <div class="warn"><strong>Watch out:</strong> recursive Fibonacci is easy to understand but inefficient for large inputs because it repeats work.</div>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Fibonacci has two base cases: <code>fib(0)</code> and <code>fib(1)</code>.</li>
                  <li>The recursive case is <code>fib(n - 1) + fib(n - 2)</code>.</li>
                  <li>Unlike factorial, Fibonacci branches into two recursive calls.</li>
                </ul>
              </div>`
          }
        ]
      }
    ]
  },
  {
    id: 'swe3313',
    title: 'Intro to Software Engineering',
    code: 'SWE 3313',
    icon: 'SE',
    color: '#3b82f6',
    subtitle: 'Requirements, design, and the discipline of building real software.',
    modules: [
      {
        id: 'w1',
        title: 'Week 1',
        icon: '01',
        description: 'Starter module. Add the first SWE lecture here.',
        lessons: []
      }
    ]
  },
  {
    id: 'cse3153',
    title: 'Database Systems',
    code: 'CSE 3153',
    icon: 'DB',
    color: '#f59e0b',
    subtitle: 'Relational design, SQL, transactions, indexes, normalization.',
    modules: [
      {
        id: 'w1',
        title: 'Week 1',
        icon: '01',
        description: 'Starter module. Add the first database lecture here.',
        lessons: []
      }
    ]
  },
  {
    id: 'cse3801',
    title: 'Professional Practices and Ethics',
    code: 'CSE 3801',
    icon: 'ET',
    color: '#8b5cf6',
    subtitle: 'Ethics, communication, and the social impact of computing.',
    modules: [
      {
        id: 'w1',
        title: 'Week 1',
        icon: '01',
        description: 'Starter module. Add the first ethics lecture here.',
        lessons: []
      }
    ]
  }
];
