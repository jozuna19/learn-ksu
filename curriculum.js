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
          },
          {
            id: 'cs3305-w1-l7',
            title: 'Official Recursion Deck: The Shape of Recursion',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>Your professor's recursion deck starts with two examples: searching folders inside folders, and drawing H-trees. Both have the same shape: the big problem contains smaller versions of the same problem.</p>

              <div class="note"><strong>Recursive shape:</strong> solve one small piece, then ask the same method to solve a smaller version of the original problem.</div>

              <h2>What Recursion Means</h2>
              <p>A recursive method is a method that calls itself. That sounds strange at first, but it works when the method has rules that make the problem smaller every time.</p>

              <ul>
                <li><strong>Base case:</strong> the simplest case where the method stops calling itself.</li>
                <li><strong>Recursive case:</strong> the case where the method calls itself with a smaller input.</li>
                <li><strong>Call stack:</strong> Java's stack of unfinished method calls. Each recursive call waits there until its smaller call returns.</li>
              </ul>

              ${cb(`public static long factorial(int n) {
    if (n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}`, 'java', 'Java')}

              <h2>Read This Like English</h2>
              <p>If <code>n</code> is <code>0</code>, return <code>1</code>. Otherwise, return <code>n</code> times the factorial of the smaller number.</p>

              <pre><code>factorial(4)
= 4 * factorial(3)
= 4 * 3 * factorial(2)
= 4 * 3 * 2 * factorial(1)
= 4 * 3 * 2 * 1 * factorial(0)
= 4 * 3 * 2 * 1 * 1
= 24</code></pre>

              <h2>The Stack Picture</h2>
              <p>When <code>factorial(4)</code> calls <code>factorial(3)</code>, Java does not forget about the <code>4 *</code> part. It pauses that work on the call stack. Then <code>factorial(3)</code> pauses <code>3 *</code>, and so on, until the base case returns <code>1</code>.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Recursion works when a problem contains smaller versions of itself.</li>
                  <li>Every recursive method needs a base case and a recursive case.</li>
                  <li>The recursive call must move closer to the base case.</li>
                  <li>The call stack remembers unfinished work until the base case starts returning values.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l8',
            title: 'Official Recursion Deck: How to Think Recursively',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>The professor's slides give the main rule for recursive problem solving: break the problem into subproblems. If a subproblem has the same nature as the original problem, solve that smaller problem recursively.</p>

              <div class="tip"><strong>Beginner translation:</strong> ask, "What is the smallest version of this problem?" Then ask, "How do I shrink the current version toward that smallest version?"</div>

              <h2>Example: Print a Message n Times</h2>
              <p>Printing a message 5 times can be seen as: print it once, then print it 4 more times. That second part is the same problem with a smaller number.</p>

              ${cb(`public static void nPrintln(String message, int n) {
    if (n >= 1) {
        System.out.println(message);
        nPrintln(message, n - 1);
    }
    // Base case: n < 1
}`, 'java', 'Java')}

              <h2>Trace <code>nPrintln("Welcome", 3)</code></h2>
              <pre><code>n = 3: print Welcome, then call nPrintln("Welcome", 2)
n = 2: print Welcome, then call nPrintln("Welcome", 1)
n = 1: print Welcome, then call nPrintln("Welcome", 0)
n = 0: stop</code></pre>

              <h2>Example: Fibonacci</h2>
              <p>Fibonacci is different from factorial because it makes two recursive calls. The sequence starts like this:</p>

              <pre><code>index: 0  1  2  3  4  5  6  7
value: 0  1  1  2  3  5  8  13</code></pre>

              ${cb(`public static int fib(int index) {
    if (index == 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    } else {
        return fib(index - 1) + fib(index - 2);
    }
}`, 'java', 'Java')}

              <h2>The Three Recursion Questions</h2>
              <ul>
                <li><strong>What are the cases?</strong> Usually one or more base cases, plus a recursive case.</li>
                <li><strong>What is the smallest case?</strong> For factorial, <code>0!</code>. For Fibonacci, indexes <code>0</code> and <code>1</code>.</li>
                <li><strong>How does each call shrink?</strong> <code>n - 1</code>, <code>index - 1</code>, <code>index - 2</code>, or moving inward through a string.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Recursive thinking starts by finding a smaller same-shaped problem.</li>
                  <li>The base case is the version you can answer immediately.</li>
                  <li>Factorial has one recursive call. Fibonacci has two.</li>
                  <li>If a recursive call does not shrink the problem, it probably never stops.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l9',
            title: 'Official Recursion Deck: Classic Recursive Problems',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>The second half of the professor's deck shows where recursion becomes useful: strings, sorting, searching, folders, puzzles, and fractals. You do not need to master all of these immediately. Your goal is to recognize the pattern.</p>

              <h2>Palindrome With a Helper Method</h2>
              <p>A palindrome reads the same forward and backward. The recursive idea is: compare the outside letters, then move inward.</p>

              ${cb(`public static boolean isPalindrome(String s) {
    return isPalindrome(s, 0, s.length() - 1);
}

public static boolean isPalindrome(String s, int low, int high) {
    if (high <= low) {
        return true;
    } else if (s.charAt(low) != s.charAt(high)) {
        return false;
    } else {
        return isPalindrome(s, low + 1, high - 1);
    }
}`, 'java', 'Java')}

              <p>The first method is the friendly public method. The second method is the helper. It carries extra information: the left index and the right index.</p>

              <h2>Recursive Selection Sort</h2>
              <p>Selection sort can be recursive too:</p>
              <ol>
                <li>Find the smallest value in the current part of the list.</li>
                <li>Swap it into the first position of that part.</li>
                <li>Recursively sort the rest of the list.</li>
              </ol>

              <h2>Recursive Binary Search</h2>
              <p>Binary search is a natural recursive algorithm because every step throws away half of the search space.</p>

              ${cb(`public static int binarySearch(int[] list, int key, int low, int high) {
    if (low > high) {
        return -1;
    }

    int mid = (low + high) / 2;

    if (key < list[mid]) {
        return binarySearch(list, key, low, mid - 1);
    } else if (key == list[mid]) {
        return mid;
    } else {
        return binarySearch(list, key, mid + 1, high);
    }
}`, 'java', 'Java')}

              <h2>Directory Size and Tower of Hanoi</h2>
              <p>Directories are recursive because a folder can contain files and more folders. Tower of Hanoi is recursive because moving <code>n</code> disks depends on first moving <code>n - 1</code> disks.</p>

              <pre><code>Tower of Hanoi idea:
1. Move n - 1 disks from A to C using B.
2. Move disk n from A to B.
3. Move n - 1 disks from C to B using A.</code></pre>

              <h2>Recursion vs Iteration</h2>
              <p>Iteration repeats with loops. Recursion repeats by calling a method again. Recursion can be cleaner for naturally recursive problems, but it has overhead because every call uses stack space.</p>

              <div class="warn"><strong>Exam warning:</strong> Recursion is elegant, but not automatically faster. Sometimes a loop is simpler and uses less memory.</div>

              <h2>Tail Recursion</h2>
              <p>A method is tail recursive when the recursive call is the final action. There is no unfinished multiplication, addition, or other work waiting after the call returns.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Helper methods let recursion carry extra state like indexes.</li>
                  <li>Binary search shrinks the problem by half each recursive call.</li>
                  <li>Directory traversal and Tower of Hanoi are naturally recursive problems.</li>
                  <li>Recursion trades simpler structure for call-stack overhead.</li>
                  <li>Tail recursion means the recursive call is the last action in the method.</li>
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
