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
    syllabus: `
      <div class="syll-meta">
        <span><strong>Prof.</strong> Yong Shi</span>
        <span><strong>Email</strong> yshi5@kennesaw.edu (D2L email only, 48hr reply)</span>
        <span><strong>Office</strong> J-3220 · (470) 578-6423</span>
        <span><strong>Section</strong> W02 · CRN 50129 · 3 credits</span>
      </div>

      <h2>Key Dates & Deadlines</h2>
      <table>
        <tr><th>Week</th><th>Due</th><th>Topics</th></tr>
        <tr><td>1</td><td>Assignment 1 (Recursion)</td><td>Recursion, Generics, Intro to Data Structures (Ch 18-20)</td></tr>
        <tr><td>2</td><td>Assignment 2 (LinkedList)</td><td>ArrayList, LinkedList, Iterators, Stacks (Ch 20)</td></tr>
        <tr><td>3</td><td><strong>Quiz 1 · Exam 1</strong> · Assignment 3 (Stack)</td><td>Stacks, Queues, Big-O (Ch 20, 22)</td></tr>
        <tr><td>4</td><td>Exam 2 review</td><td>Sorting Algorithms (Ch 23)</td></tr>
        <tr><td>5</td><td>Assignment 4 (Algorithm Analysis)</td><td>Trees, Binary Trees, BSTs (Ch 25)</td></tr>
        <tr><td>6</td><td><strong>Quiz 2 · Exam 2</strong> · HW5 (Sorting)</td><td>Trees, BSTs, Heaps (Ch 25)</td></tr>
        <tr><td>7</td><td><strong>Quiz 3</strong></td><td>AVL Trees, Hashing (Ch 26, 27)</td></tr>
        <tr><td>8</td><td><strong>Final Exam</strong></td><td>Hashing, Graphs, Final review (Ch 27, 28)</td></tr>
      </table>

      <h2>Grading</h2>
      <table>
        <tr><th>Component</th><th>Weight</th></tr>
        <tr><td>Homework</td><td>30%</td></tr>
        <tr><td>Final Exam</td><td>25%</td></tr>
        <tr><td>Midterm 1</td><td>15%</td></tr>
        <tr><td>Midterm 2</td><td>15%</td></tr>
        <tr><td>Quizzes</td><td>15%</td></tr>
      </table>
      <p>Scale: A 90+ · B 80-89 · C 70-79 · D 60-69 · F under 60.</p>

      <div class="warn"><strong>⚠️ No late submissions.</strong> "No late submission is accepted." Quizzes and exams cannot be made up. Set a calendar reminder for every deadline.</div>
      <div class="warn"><strong>⚠️ AI prohibited.</strong> Prof. Shi explicitly bans generative AI. Any AI-assisted work is an academic integrity violation. Write your own code.</div>

      <h2>Textbook</h2>
      <p>Introduction to Java Programming, Comprehensive Version, 10th or 12th Edition by Y. Daniel Liang (Pearson). Either edition works. Used 10th editions run about $15-30.</p>
    `,
    modules: [
      {
        id: 'w1',
        title: 'Week 1 · Recursion & Generics',
        icon: '01',
        description: 'Recursion, Generics, Intro to Data Structures. Ch 18-20. Assignment 1.',
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
          },
          {
            id: 'cs3305-w1-l11',
            title: 'Video Notes: HW1 Recursion Roadmap',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>The HW1 video describes three recursive Java programs. This lesson is a roadmap for understanding the assignment. It will not give you finished submission code, because the learning goal is for you to design and write the methods yourself.</p>

              <div class="note"><strong>Core HW1 rule:</strong> use recursion for the required methods. A loop is allowed in <code>main</code> for letting the user try again, but the recursive work itself should not be done with loops.</div>

              <h2>Part 1: Print a String in Reverse</h2>
              <ul>
                <li>Class name pattern: <code>PrintReverseYourName</code>.</li>
                <li><code>main</code> asks the user for a string.</li>
                <li><code>main</code> passes the string to a recursive method named like <code>printCharReverse</code>.</li>
                <li>The recursive method prints one character per call.</li>
                <li>The program asks whether the user wants to try another string.</li>
              </ul>

              <h2>How to Think About Part 1</h2>
              <p>For a string, the smaller problem is the same string with one character removed from consideration. Ask yourself: should the method print the last character first, or should it call itself first and print after the smaller call returns?</p>

              <h2>Part 2: Recursive Class Average</h2>
              <ul>
                <li>Class name pattern: <code>AverageGradeYourName</code>.</li>
                <li>The user enters the number of students.</li>
                <li>The program stores grades from <code>0</code> to <code>100</code> in an <code>int[]</code> array.</li>
                <li><code>main</code> passes the filled array to a recursive method named like <code>findAverage</code>.</li>
                <li>The average should be returned as a <code>double</code>.</li>
                <li>Output should show at most two digits after the decimal point.</li>
              </ul>

              <h2>How to Think About Part 2</h2>
              <p>An average is based on a sum divided by a count. Recursive thinking usually means: find the value for one grade, then combine it with the answer for the remaining grades. A helper method may be useful if you need to track an index or count.</p>

              <h2>Part 3: Recursive Star Pattern</h2>
              <ul>
                <li>Class name pattern: <code>StarPatternYourName</code>.</li>
                <li>The user enters a positive number of rows.</li>
                <li>The method <code>printStars</code> recursively prints a pyramid.</li>
                <li>The base case is <code>0</code> rows.</li>
                <li>The second line should contain <code>3</code> stars, then <code>5</code>, then <code>7</code>, and so on.</li>
                <li>There should be no spaces between stars.</li>
                <li>Do not use <code>String.repeat</code>.</li>
              </ul>

              <h2>How to Think About Part 3</h2>
              <p>The professor hinted that there are really three recursive subproblems: printing spaces on the left, printing stars on the current row, and moving through the rows.</p>

              <pre><code>For each row, think:
1. How many leading spaces does this row need?
2. How many stars does this row need?
3. What is the smaller row problem after this one?</code></pre>

              <h2>HW1 Study Plan</h2>
              <ol>
                <li>Write the method headers first.</li>
                <li>Write the base case in plain English.</li>
                <li>Trace one tiny input by hand.</li>
                <li>Only then write the recursive case.</li>
                <li>Test the smallest cases before bigger cases.</li>
                <li>Take screenshots after every program works.</li>
              </ol>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>HW1 has three programs: reverse string, average grades, and star pattern.</li>
                  <li>Each program must allow reruns with different user inputs.</li>
                  <li>The recursive methods should handle the required recursive work without loops.</li>
                  <li>Start by designing base cases and shrinking rules before coding.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l12',
            title: 'Video Notes: Arrays, ADTs, and Java Collections',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>The Java introduction video is a bridge from basic Java into data structures. The key idea is that a data structure is not just a place to store values. It is also a set of operations for working with those values.</p>

              <h2>ADT vs Concrete Data Structure</h2>
              <p>An <strong>abstract data type</strong>, or ADT, describes what something should do. A concrete data structure describes how it is actually built in code.</p>

              <table>
                <thead>
                  <tr><th>Idea</th><th>Question It Answers</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>ADT</td><td>What operations should exist?</td><td>A list can add, remove, get, and report size.</td></tr>
                  <tr><td>Concrete structure</td><td>How are those operations implemented?</td><td>An <code>ArrayList</code> or <code>LinkedList</code>.</td></tr>
                </tbody>
              </table>

              <div class="note"><strong>Beginner translation:</strong> ADT is the promise. Concrete data structure is the machinery.</div>

              <h2>What a Data Structure Contains</h2>
              <p>In Java, a data structure is usually a class. That means it has two sides:</p>
              <ul>
                <li><strong>Data fields:</strong> the stored information.</li>
                <li><strong>Methods:</strong> the actions you can perform on that information.</li>
              </ul>

              <h2>Arrays</h2>
              <p>An array stores values of the same type in a fixed-size, sequential block. Array indexes start at <code>0</code>.</p>

              ${cb(`int[] numbers = new int[4];
numbers[0] = 10;
numbers[1] = 20;

System.out.println(numbers.length);
System.out.println(numbers[1]);`, 'java', 'Java')}

              <h2>Why Arrays Are Fast</h2>
              <p>Java can jump directly to an array index because all elements are the same type and stored in order. That makes random access fast.</p>

              <div class="tip"><strong>Fast operation:</strong> getting <code>numbers[3]</code> does not require checking indexes <code>0</code>, <code>1</code>, and <code>2</code> first.</div>

              <h2>Why Arrays Are Limited</h2>
              <ul>
                <li>The size is fixed after creation.</li>
                <li>You must track how many meaningful values are currently stored.</li>
                <li>Insertion and deletion in the middle can require shifting values.</li>
              </ul>

              <h2>Linear vs Nonlinear Structures</h2>
              <p>A <strong>linear</strong> data structure has a natural sequence. Arrays, lists, stacks, and queues are linear. A <strong>nonlinear</strong> structure can branch. Trees and graphs are nonlinear.</p>

              <table>
                <thead>
                  <tr><th>Structure</th><th>Shape</th><th>Common Examples</th></tr>
                </thead>
                <tbody>
                  <tr><td>Linear</td><td>One item after another</td><td>Array, list, stack, queue</td></tr>
                  <tr><td>Nonlinear</td><td>Branches or many connections</td><td>Tree, graph</td></tr>
                </tbody>
              </table>

              <h2>Java Collections Big Picture</h2>
              <p>The Java Collections Framework gives you ready-made interfaces and classes for common structures.</p>
              <ul>
                <li><code>Collection</code> stores individual elements.</li>
                <li><code>List</code>, <code>Queue</code>, and <code>Set</code> are collection-style interfaces.</li>
                <li><code>Map</code> stores key-value pairs.</li>
                <li><code>ArrayList</code> and <code>LinkedList</code> are concrete classes.</li>
              </ul>

              <h2>Iterator</h2>
              <p>An iterator lets you walk through a collection without needing to know how the collection is stored internally.</p>

              ${cb(`Iterator<String> it = names.iterator();

while (it.hasNext()) {
    String name = it.next();
    System.out.println(name);
}`, 'java', 'Java')}

              <h2>ArrayList as an Expandable Array</h2>
              <p>An <code>ArrayList</code> behaves like a resizable array. Internally, when it runs out of space, Java can allocate a larger block, copy the old values, add the new value, and release the old block.</p>

              <div class="warn"><strong>Trade-off:</strong> <code>ArrayList</code> makes growth easier than a raw array, but resizing still costs time when copying happens.</div>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>An ADT defines behavior. A concrete data structure implements it.</li>
                  <li>Arrays are fast for random access but fixed in size.</li>
                  <li>Linear structures have a natural sequence. Nonlinear structures branch.</li>
                  <li>Java Collections separate interfaces like <code>List</code> from implementations like <code>ArrayList</code>.</li>
                  <li>Iterators give a standard way to walk through collections.</li>
                </ul>
              </div>`
          },
          {
            id: 'cs3305-w1-l13',
            title: 'Video Notes: Java Generics for Data Structures',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>Generics let you tell Java what type a data structure should hold. That matters in CS3305 because Java collections and custom data structures often look like <code>ArrayList&lt;String&gt;</code>, <code>Stack&lt;Integer&gt;</code>, or <code>GenericStack&lt;E&gt;</code>.</p>

              <h2>Why Generics Exist</h2>
              <p>Before generics, Java collections could hold plain <code>Object</code> values. That meant a list could accidentally mix strings, numbers, dates, or other objects. The code might compile, then fail later when the program actually runs.</p>

              ${cb(`ArrayList list = new ArrayList();
list.add("Java Program");
list.add(100);     // Compiles, but this is unsafe.
`, 'java', 'Old Java Style')}

              <p>With generics, you declare the intended type up front. Java can then catch wrong-type values at compile time.</p>

              ${cb(`ArrayList<String> list = new ArrayList<String>();
list.add("Java Program");
list.add(100);     // Compile-time error.
`, 'java', 'Generic Java Style')}

              <div class="tip"><strong>Beginner translation:</strong> generics are labels that say, "This container is only for this kind of thing."</div>

              <h2>Generic Type Parameters</h2>
              <p>When you see angle brackets, you are usually looking at a generic type.</p>

              <ul>
                <li><code>ArrayList&lt;String&gt;</code> means an ArrayList of strings.</li>
                <li><code>ArrayList&lt;Double&gt;</code> means an ArrayList of Double objects.</li>
                <li><code>GenericStack&lt;E&gt;</code> means a stack class that can work with some type named <code>E</code>.</li>
              </ul>

              <div class="warn"><strong>Watch out:</strong> generic types use class types, not primitive types. Use <code>Integer</code> instead of <code>int</code>, and <code>Double</code> instead of <code>double</code>.</div>

              <h2>Stack Example</h2>
              <p>A stack is last-in, first-out. Common stack operations are <code>push</code>, <code>pop</code>, and <code>peek</code>.</p>

              ${cb(`public class GenericStack<E> {
    private ArrayList<E> list = new ArrayList<E>();

    public int getSize() {
        return list.size();
    }

    public E peek() {
        return list.get(getSize() - 1);
    }

    public void push(E item) {
        list.add(item);
    }

    public E pop() {
        E item = list.get(getSize() - 1);
        list.remove(getSize() - 1);
        return item;
    }
}`, 'java', 'Generic Stack Skeleton')}

              <p>The same class can become a stack of strings, integers, or other object types depending on how you instantiate it.</p>

              ${cb(`GenericStack<String> words = new GenericStack<String>();
words.push("recursion");

GenericStack<Integer> numbers = new GenericStack<Integer>();
numbers.push(42);`, 'java', 'Using GenericStack')}

              <h2>Generic Methods</h2>
              <p>Methods can be generic too. A generic method can work with different object types while still giving Java type information.</p>

              ${cb(`public static <E> void print(E[] list) {
    for (E item : list) {
        System.out.print(item + " ");
    }
}`, 'java', 'Generic Method')}

              <h2>Raw Types</h2>
              <p>A raw type is a generic class used without the angle-bracket type. The professor called this unsafe because it exists mainly for backward compatibility with older Java code.</p>

              ${cb(`ArrayList rawList = new ArrayList();          // Raw type
ArrayList<String> safeList = new ArrayList<>(); // Preferred`, 'java', 'Raw vs Generic')}

              <h2>Bounded Types and Wildcards</h2>
              <p>Sometimes a generic type must be limited. For example, a matrix class may only make sense for number-like types.</p>

              ${cb(`public abstract class GenericMatrix<E extends Number> {
    // E must be Number or a subclass of Number.
}`, 'java', 'Bounded Generic Type')}

              <p>Wildcards use <code>?</code>. You will see forms like <code>? extends T</code> and <code>? super T</code>. For now, remember that wildcards are used when a method should accept a family of related generic types.</p>

              <h2>Type Erasure</h2>
              <p>Java checks generic types at compile time, then erases that generic information for runtime. That is why generics are mainly a compile-time safety feature.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Generics help Java catch wrong-type mistakes before runtime.</li>
                  <li>Use wrapper classes like <code>Integer</code> and <code>Double</code> with generics.</li>
                  <li>Generic classes let one data structure work with many object types safely.</li>
                  <li>Raw types are old-style and unsafe. Prefer parameterized types.</li>
                  <li>Bounded types limit which classes can be used as a generic type.</li>
                </ul>
              </div>`
          }
        ]
      },
      { id: 'w2', title: 'Week 2 · Lists & Stacks', icon: '02', description: 'ArrayList, LinkedList, Iterators, Stacks. Ch 20. Assignment 2, Quiz 1 + Exam 1 review.', lessons: [] },
      { id: 'w3', title: 'Week 3 · Queues & Big-O', icon: '03', description: 'Stacks (N-Queens), Queues, Algorithm Complexity & Big-O. Ch 20, 22. Quiz 1 · Exam 1 · Assignment 3.', lessons: [] },
      { id: 'w4', title: 'Week 4 · Sorting', icon: '04', description: 'Sorting Algorithms. Ch 23. Quiz 2 + Exam 2 review.', lessons: [] },
      { id: 'w5', title: 'Week 5 · Trees & BSTs', icon: '05', description: 'Trees, Binary Trees, BSTs. Ch 25. Assignment 4.', lessons: [] },
      { id: 'w6', title: 'Week 6 · BSTs & Heaps', icon: '06', description: 'Trees, BSTs, Heaps. Ch 25. Quiz 2 · Exam 2 · HW5.', lessons: [] },
      { id: 'w7', title: 'Week 7 · AVL Trees & Hashing', icon: '07', description: 'AVL Trees, Hashing. Ch 26, 27. Quiz 3.', lessons: [] },
      { id: 'w8', title: 'Week 8 · Graphs & Final', icon: '08', description: 'Hashing, Graphs & Algorithms, Final review. Ch 27, 28. Final Exam.', lessons: [] }
    ]
  },
  {
    id: 'swe3313',
    title: 'Intro to Software Engineering',
    code: 'SWE 3313',
    icon: 'SE',
    color: '#3b82f6',
    subtitle: 'Requirements, design, and the discipline of building real software.',
    syllabus: `
      <div class="syll-meta">
        <span><strong>Prof.</strong> Richard Gesick</span>
        <span><strong>Email</strong> rgesick1@kennesaw.edu (12-48hr reply)</span>
        <span><strong>Office Hours</strong> T/Th 7-9 PM, Virtual (Teams)</span>
        <span><strong>Section</strong> W02 · CRN 52470 · 3 credits</span>
      </div>

      <h2>Key Dates & Deadlines</h2>
      <table>
        <tr><th>Date</th><th>Due</th></tr>
        <tr><td>6/7</td><td>Discussion 1 · watch SE day-in-the-life video</td></tr>
        <tr><td>6/14</td><td>Quiz 1 · Discussion 2 · MS Builds + Chaos Report readings</td></tr>
        <tr><td><strong>6/18</strong></td><td><strong>Test 1</strong> (Ch 1-4, 13)</td></tr>
        <tr><td><strong>6/21</strong></td><td><strong>Project plan due</strong></td></tr>
        <tr><td>6/22</td><td>Sprint 1 opens · Quizzes 3-4 · Discussions 5-6</td></tr>
        <tr><td><strong>7/3</strong></td><td><strong>Sprint 1 due</strong> (7/4 holiday)</td></tr>
        <tr><td><strong>7/8</strong></td><td><strong>Test 2</strong> (Ch 5-8) · <strong>Requirements doc due</strong> · Sprint 2 opens 7/6</td></tr>
        <tr><td>7/9</td><td>Last day to withdraw</td></tr>
        <tr><td><strong>7/20</strong></td><td><strong>System design doc due · Sprint 2 due</strong></td></tr>
        <tr><td><strong>7/23</strong></td><td><strong>Presentation + docs due</strong></td></tr>
        <tr><td><strong>7/27-7/28</strong></td><td><strong>Final Exam</strong> (window: 7/27 8AM to 7/28 6PM)</td></tr>
      </table>

      <h2>Grading (550 points total)</h2>
      <table>
        <tr><th>Component</th><th>Points</th></tr>
        <tr><td>Test 1 + Test 2 + Final (100 each)</td><td>300</td></tr>
        <tr><td>Group Project Sprint 1</td><td>50</td></tr>
        <tr><td>Group Project Sprint 2</td><td>50</td></tr>
        <tr><td>Group Project Report & Presentation</td><td>50</td></tr>
        <tr><td>10 Reading Quizzes (5 each)</td><td>50</td></tr>
        <tr><td>10 Discussions (5 each)</td><td>50</td></tr>
      </table>
      <p>Scale: A 90+ · B 80-89 · C 70-79 · D 60-69 · F under 60. Gesick rounds up at .5 (89.6 to A). Project work is required to pass: you cannot earn more than one grade above your project average.</p>

      <div class="warn"><strong>⚠️ Late policy (projects only).</strong> -10% within 12hr, -20% within 24hr, -50% within 48hr, 0% after 48hr. Late discussions and quizzes are NOT accepted at all.</div>
      <div class="warn"><strong>⚠️ Hard AI ban.</strong> ChatGPT/Claude/Copilot prohibited. Do not even use AI to polish discussion posts.</div>

      <h2>Textbook</h2>
      <p>Essentials of Software Engineering, 4th or 5th ed by Tsui, Karam, Bernal (Jones & Bartlett). KSU library usually has copies on reserve.</p>
    `,
    modules: [
      { id: 'w1', title: 'Week 1 · Intro & Project Mgmt', icon: '01', description: 'Creating a program, project management. Ch 1, 13. 6/3-6/7.', lessons: [
          {
            id: 'swe3313-w1-l1',
            title: 'Creating a Program',
            content: `
              <h2>The Simple Set of Steps</h2>
              <p>Software development looks simple on paper: four steps, done. In practice each step hides a lot of work.</p>
              <ol>
                <li><strong>Understand the problem (requirements):</strong> What does the software need to do? What are the inputs, outputs, performance constraints, and security needs?</li>
                <li><strong>Design:</strong> Organize the functionalities. Think about input/output formats, constraints like speed and UI, and the algorithm. Design may continue into the coding phase.</li>
                <li><strong>Code/Implement:</strong> Convert the design into actual code. This includes building the UI or I/O format, sequencing the processing correctly, converting the algorithm to the target language, and using library APIs properly.</li>
                <li><strong>Verify/Test:</strong> Confirm the program actually works. This runs throughout development, not just at the end.</li>
              </ol>

              <h2>What Really Happens</h2>
              <p>The "imagined" ideal situation rarely matches the actual situation.</p>
              <ul>
                <li>Programs rarely work on the first, second, or even fifth try.</li>
                <li>Re-reading the requirements reveals gaps or misunderstandings.</li>
                <li>Tracing and debugging take more time than expected.</li>
                <li>At some point you declare it "good enough" and ship.</li>
              </ul>
              <div class="note"><strong>📝 Note</strong> This gap between imagined and actual is normal. Software engineering exists to manage it.</div>

              <h2>What Matters Beyond "Code is Done"</h2>
              <p>Four questions define quality beyond whether the code runs:</p>
              <ul>
                <li><strong>Elapsed time:</strong> How long in calendar time did it take?</li>
                <li><strong>Effort:</strong> How many total person-hours were spent?</li>
                <li><strong>Completeness:</strong> Does the solution solve the complete problem?</li>
                <li><strong>Quality:</strong> How good is the code, design, documentation, and testing?</li>
              </ul>

              <h2>A Concrete Example: The Sorting Program</h2>
              <p>The professor uses a real exercise: write a program that reads lines from a file, sorts them alphabetically, and writes them to another file with a simple GUI.</p>
              <p>Before starting, students estimate in three rounds:</p>
              <ol>
                <li><strong>Ideal time:</strong> How long if you could work with zero interruptions?</li>
                <li><strong>Calendar time:</strong> When would you realistically finish, including breaks, sleep, and other obligations?</li>
                <li><strong>Subtask breakdown:</strong> Divide the work. For example: a class <code>StringSorter</code> with methods Read, Write, Sort, plus an <code>IndexOfBiggest</code> helper.</li>
              </ol>
              <p>Past class results: estimates of 10 to 15 minutes were common. Actual elapsed time ranged from 46 minutes to 5 days. Effort ranged from 40 person-minutes to 8 person-hours. The gap between estimate and reality is the lesson.</p>

              <h2>Testing Happens Throughout</h2>
              <p>Testing is not a final step. It runs across the whole process:</p>
              <ul>
                <li><strong>When:</strong> While the program is being defined, while it is developed, and after it is complete.</li>
                <li><strong>Types:</strong> Acceptance/validation, verification, unit testing.</li>
                <li><strong>Methods:</strong> Black-box (test behavior without seeing code) and white-box (test internal logic).</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>The four steps are: understand requirements, design, code, test. Each is harder than it looks.</li>
                  <li>The gap between your time estimate and actual time is normal and expected.</li>
                  <li>Quality = elapsed time + effort + completeness + code/design/doc/test quality combined.</li>
                  <li>Testing runs throughout development, not just at the end.</li>
                  <li>Breaking work into subtasks gives more accurate estimates than guessing the total.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w1-l2',
            title: 'Software Project Management (POMA)',
            content: `
              <h2>Why Projects Need Management</h2>
              <p>A software development process tells you how to build software. A software project management process tells you how to plan, track, and control that work. They are not the same thing.</p>
              <p>Every project, small or large, needs <strong>POMA</strong>: Planning, Organizing, Monitoring, Adjusting. POMA looks sequential at the macro level but is highly iterative at the micro level.</p>

              <h2>Planning</h2>
              <p>Planning starts with understanding requirements, then covers four areas:</p>
              <ul>
                <li>Estimate work effort, schedule, and needed resources.</li>
                <li>Define and establish measurable goals.</li>
                <li>Determine resource allocations: people, process, tools, facilities.</li>
                <li>Identify and analyze project risks.</li>
              </ul>
              <p><strong>General effort estimation formula:</strong></p>
              <p><code>Units of effort = a + b(size)^c + sum(factors)</code></p>
              <p>Where a, b, c are estimated constants, size is the estimated project size, and factors are additional concerns. COCOMO I, COCOMO II, and Function Point models all use variations of this formula.</p>

              <h2>Work Breakdown Structure (WBS)</h2>
              <p>WBS is the core planning tool. Steps:</p>
              <ol>
                <li>Identify the external deliverables.</li>
                <li>Identify tasks required to produce each deliverable (including intermediate ones).</li>
                <li>Sequence the tasks and find opportunities for parallelism.</li>
                <li>Estimate the size of each task.</li>
                <li>Estimate the productivity of the people assigned to each task.</li>
                <li>Calculate time required for each task.</li>
                <li>Lay out the timeline and label resources (Gantt chart).</li>
              </ol>
              <p>The output of WBS is your initial schedule estimate.</p>

              <h2>Organizing</h2>
              <p>Once a plan exists, organizing begins:</p>
              <ul>
                <li>Design the organization structure.</li>
                <li>Hire and acquire resources.</li>
                <li>Complete required education and training.</li>
                <li>Establish tracking mechanisms for risks and goals (schedule, cost, market).</li>
              </ul>

              <h2>Monitoring: Earned Value</h2>
              <p>Earned value tracks how much work is actually done. Key terms:</p>
              <ul>
                <li><strong>BCW:</strong> Budgeted Cost of Work. Estimated effort for one task.</li>
                <li><strong>BCWS:</strong> Sum of estimated effort for all tasks planned to be done by a specific date.</li>
                <li><strong>BAC:</strong> Budget at Completion. Total estimated project effort (sum of all BCWs).</li>
                <li><strong>BCWP:</strong> Sum of estimated effort of tasks actually completed by a specific date.</li>
                <li><strong>ACWP:</strong> Sum of actual effort spent on completed tasks.</li>
                <li><strong>EV (Earned Value) = BCWP / BAC</strong></li>
              </ul>
              <p><strong>Example:</strong> BAC = 115 person-days. On the check date: BCWP = 50, ACWP = 55, BCWS = 25.</p>
              <ul>
                <li>EV = 50 / 115 = 43% complete</li>
                <li>Cost Variance = BCWP - ACWP = 50 - 55 = -5 (over budget by 5 days)</li>
                <li>Schedule Variance = BCWP - BCWS = 50 - 25 = +25 (ahead of schedule)</li>
              </ul>

              <h2>Adjusting</h2>
              <p>When monitoring shows a problem, act. Three areas of adjustment:</p>
              <ul>
                <li><strong>Resources:</strong> Add people, swap assignments, change tools.</li>
                <li><strong>Schedule:</strong> Extend deadlines, reprioritize milestones.</li>
                <li><strong>Project content:</strong> Reduce scope, drop features, simplify requirements.</li>
              </ul>

              <h2>Goals of Software Project Management</h2>
              <ul>
                <li>End results satisfy the customer's needs.</li>
                <li>All product attributes (quality, security, productivity, cost, schedule) are met.</li>
                <li>Team members are operating effectively and at high morale.</li>
                <li>Required tools and resources are available and effectively used.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>POMA = Planning, Organizing, Monitoring, Adjusting. Every project needs all four.</li>
                  <li>WBS breaks a project into deliverables and tasks, estimates each, and sequences them into a schedule.</li>
                  <li>Earned Value = BCWP / BAC. Tells you the actual percent complete on a given date.</li>
                  <li>Cost Variance = BCWP - ACWP (negative = over budget). Schedule Variance = BCWP - BCWS (positive = ahead of schedule).</li>
                  <li>When monitoring shows a problem, adjust resources, schedule, or scope. Ignoring it is not an option.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w2', title: 'Week 2 · Building Systems', icon: '02', description: 'Building a system, complexity, project intro & teams. Ch 2. Q1. 6/8-6/14.', lessons: [
          {
            id: 'swe3313-w2-l1',
            title: 'Building a System: Complexity and Teams',
            content: `
              <h2>From Program to System</h2>
              <p>A single program is written by one person to solve a small, well-defined problem. A system is built by teams, involves many parts, and serves many users. The jump in complexity is not linear.</p>
              <ul>
                <li><strong>Breadth of complexity:</strong> more functionalities, more interfaces (internal and external), more users, more data structures.</li>
                <li><strong>Depth of complexity:</strong> more linkages, data sharing across modules, control passing between functions, nested loops, multiple hierarchical levels.</li>
              </ul>
              <p>As complexity grows, both development effort and the risk of defects increase non-linearly.</p>

              <h2>The Communications Problem</h2>
              <p>Adding more people does not simply add more capacity. For n people on a team, the number of potential communication paths is:</p>
              <p><code>n(n-1) / 2</code></p>
              <p>A 2-person team has 1 path. A 10-person team has 45. A 50-person team has 1225. Every new hire adds coordination overhead.</p>

              <h2>What a Large System Actually Requires</h2>
              <p>A mission-critical system (like a payroll system) requires multiple separate activities performed by 50 to 100 people:</p>
              <ul>
                <li>Requirements gathering, analysis, specification, and agreement</li>
                <li>Design: abstraction, decomposition, cohesion, interaction, and coupling analysis</li>
                <li>Implementation: coding and unit testing</li>
                <li>Integration and tracking of pieces and parts</li>
                <li>Separate testing: functional, component, system, and performance</li>
                <li>Packaging and releasing the system</li>
              </ul>
              <p>And it does not stop at release. Pre-release preparation (education, support training, known problem count) and post-release support (call centers, fixes, enhancements) are ongoing.</p>

              <h2>Three Ways to Handle Complexity</h2>
              <p><strong>A. Simplification</strong></p>
              <ul>
                <li>Decomposition: break the problem and solution into smaller parts</li>
                <li>Modularization: isolate pieces so changes do not ripple</li>
                <li>Separation of concerns: handle each aspect independently</li>
              </ul>
              <p><strong>B. Better Tools and Technology</strong></p>
              <ul>
                <li>Databases for managing data structures</li>
                <li>Programming platforms and frameworks</li>
                <li>Configuration management for multi-developer environments</li>
                <li>Automated testing tools</li>
              </ul>
              <p><strong>C. Better Process and Methodology</strong></p>
              <ul>
                <li>Coordinate multiple people doing different tasks</li>
                <li>Guidance for overlapping incremental work</li>
                <li>Measuring and tracking separate artifacts and outcomes</li>
              </ul>
              <div class="note"><strong>📝 Note</strong> The first time you introduce a new tool or process, it actually makes things more complex, not less. The payoff comes after the learning curve.</div>

              <h2>Coordination: The 3 P's</h2>
              <p>Large systems require coordinating three things:</p>
              <ul>
                <li><strong>Process:</strong> the methodologies and workflows the team follows</li>
                <li><strong>Product:</strong> the final system and all intermediate artifacts (designs, specs, test results)</li>
                <li><strong>People:</strong> developers, support personnel, and users</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Going from a program to a system means exponentially more parts, people, and coordination overhead.</li>
                  <li>Communication paths grow as n(n-1)/2. Adding people adds complexity, not just capacity.</li>
                  <li>Complexity has two dimensions: breadth (more features/users/data) and depth (more interconnections/logic).</li>
                  <li>Three handles for managing complexity: simplification (decompose), technology (tools), and process (methodologies).</li>
                  <li>Post-release support is part of building a system. Budget for it from the start.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w3', title: 'Week 3 · Process Models', icon: '03', description: 'Engineering software, process models. Ch 3, 4. Test 1 on 6/18. Project plan due 6/21.', lessons: [
          {
            id: 'swe3313-w3-l1',
            title: 'What Is Software Engineering?',
            content: `
              <h2>Three Key Definitions</h2>
              <p>Different experts define software engineering slightly differently, but they converge on the same core ideas.</p>
              <p><strong>David Parnas:</strong> Software engineering is the multi-person construction of multi-version software. The key words are "multi-person" (teams, not individuals) and "multi-version" (software evolves over time).</p>
              <p><strong>Sommerville:</strong> An engineering discipline whose focus is the cost-effective development of high-quality software systems.</p>
              <p><strong>Tsui and Karam (your textbook):</strong> A broad field that touches upon all aspects of developing and supporting a software system, spanning across people, process, product, and project.</p>

              <h2>Why Software Engineering Exists</h2>
              <p>Software reached $180 billion in market value by 2000 and is now far larger. It is ubiquitous across every industry. The problem: software fails constantly, costs more than estimated, and ships late. This is the "software crisis."</p>
              <p>The Chaos Report (from the Standish Group) tracked thousands of projects and found:</p>
              <ul>
                <li>A significant portion of projects are cancelled outright</li>
                <li>Most projects go over budget, over schedule, or deliver less than planned</li>
                <li>Only a fraction succeed by all measures</li>
              </ul>
              <p>Software engineering is the discipline that tries to close that gap between what gets promised and what gets delivered.</p>

              <h2>What Software Engineers Actually Do</h2>
              <p>Software engineering is not just coding. It spans:</p>
              <ul>
                <li>Requirements: understanding what needs to be built</li>
                <li>Design: deciding how to build it</li>
                <li>Implementation: building it</li>
                <li>Testing: verifying it works</li>
                <li>Maintenance: keeping it working after release</li>
                <li>Project management: coordinating people, schedule, and resources</li>
              </ul>
              <p>The professor's view (from Ch 3): software engineering "touches upon all aspects of developing and supporting a software system." Support matters as much as development.</p>

              <h2>The Four Dimensions</h2>
              <p>Software engineering involves four dimensions that must be managed together:</p>
              <ul>
                <li><strong>People:</strong> developers, testers, managers, users, stakeholders</li>
                <li><strong>Process:</strong> the methods and workflows used to build the software</li>
                <li><strong>Product:</strong> the software itself and all artifacts produced along the way</li>
                <li><strong>Project:</strong> the schedule, budget, and scope constraints</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Software engineering = multi-person construction of multi-version software (Parnas). Teams, not individuals. Software evolves.</li>
                  <li>The Chaos Report shows most software projects fail by at least one measure. Software engineering exists to improve those odds.</li>
                  <li>SE is not just coding. It includes requirements, design, testing, maintenance, and project management.</li>
                  <li>The four dimensions: People, Process, Product, Project. All must be managed.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w3-l2',
            title: 'Software Process Models',
            content: `
              <h2>What Is a Process Model?</h2>
              <p>A software process model defines the order and structure of activities used to build software. It answers: what do we do first, second, and third? How do the phases relate to each other?</p>

              <h2>Waterfall Model</h2>
              <p>The original and most well-known model. Key rules:</p>
              <ol>
                <li>Requirements must be fully specified before proceeding.</li>
                <li>Four main tasks must be completed in strict sequence: requirements, design, code, test.</li>
                <li>The output of one step is the input to the next.</li>
                <li>A phase must be completed before the next begins.</li>
              </ol>
              <p><strong>Strength:</strong> Simple, disciplined, and easy to manage. Good when requirements are stable and well understood from the start.</p>
              <p><strong>Weakness:</strong> If requirements change mid-project (they almost always do), you must restart or backtrack. The customer does not see working software until the very end.</p>

              <h2>Incremental Model A: Continuous Integration</h2>
              <p>Each major requirement is developed separately through the full cycle (requirements, design, code, unit test), then integrated continuously into the growing system.</p>
              <ul>
                <li>Multiple small deliveries instead of one big release</li>
                <li>Integration happens throughout, not just at the end</li>
                <li>Problems are discovered earlier</li>
              </ul>

              <h2>Incremental Model B: Multiple Releases</h2>
              <p>Small sets of requirements are developed, packaged, and released together in a sequence of versions. Version 1 delivers the core. Version 2 adds more. And so on.</p>
              <ul>
                <li>The customer gets working software sooner</li>
                <li>Each release is a mini-waterfall on a smaller scope</li>
                <li>Feedback from real use can shape later releases</li>
              </ul>

              <h2>Choosing a Model</h2>
              <p>No model fits every situation. Key factors:</p>
              <ul>
                <li><strong>Stability of requirements:</strong> If requirements are firm and known, waterfall works. If they will change, incremental is safer.</li>
                <li><strong>Customer involvement:</strong> Can the customer review working software at intervals? Incremental makes that natural.</li>
                <li><strong>Team size and structure:</strong> Larger teams need more coordination and may benefit from clear phase gates (waterfall).</li>
                <li><strong>Risk tolerance:</strong> The later you discover problems, the more expensive they are to fix. Incremental surfaces problems earlier.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Waterfall: strict sequence, one output feeds the next input. Good for stable requirements. Bad when requirements change.</li>
                  <li>Incremental A (CI): each requirement goes through the full cycle independently, then gets integrated. Problems caught earlier.</li>
                  <li>Incremental B (Multiple Releases): bundle small requirement sets into sequential releases. Customer gets value sooner.</li>
                  <li>Model choice depends on: requirement stability, customer involvement, team size, and risk tolerance.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w4', title: 'Week 4 · Requirements', icon: '04', description: 'Process models, requirements & user stories. Ch 5, 6. Sprint 1 opens 6/22.', lessons: [
          {
            id: 'swe3313-w4-l1',
            title: 'Agile Methods: XP, Crystal, and Scrum',
            content: `
              <h2>Why Agile?</h2>
              <p>Traditional models like waterfall assume requirements are stable. In practice they are not. Agile methods embrace change by delivering working software in short cycles and adjusting based on feedback.</p>

              <h2>Extreme Programming (XP)</h2>
              <p>XP pushes good practices to the extreme. Core practices:</p>
              <ul>
                <li><strong>Pair programming:</strong> two developers at one keyboard at all times</li>
                <li><strong>Test-driven development:</strong> write tests before writing the code</li>
                <li><strong>Small releases:</strong> deliver working software frequently (weeks, not months)</li>
                <li><strong>Collective code ownership:</strong> any developer can change any part of the codebase</li>
                <li><strong>Refactoring:</strong> continuously improve the code structure without changing behavior</li>
                <li><strong>Onsite customer:</strong> a real customer representative works alongside the team</li>
                <li><strong>Coding standards:</strong> shared style rules so the code reads consistently</li>
                <li><strong>Simple design:</strong> build only what you need now, not what you might need later</li>
              </ul>

              <h2>Crystal Family</h2>
              <p>Developed by Alistair Cockburn. Crystal is not one method but a family, classified by two axes:</p>
              <ul>
                <li><strong>Size:</strong> how many developers are involved</li>
                <li><strong>Criticality:</strong> what happens if the software fails (comfort, discretionary money, essential money, life)</li>
              </ul>
              <p>A small, low-criticality project uses Crystal Clear (lightweight). A large, safety-critical project uses a heavier variant. The key insight: one-size-fits-all methods fail. Match the method to the project.</p>

              <h2>Scrum</h2>
              <p>First introduced by Takeuchi and Nonaka in 1986, modeled after the way a rugby game is played. Ken Schwaber and Mike Beedle later formalized it. Currently the most popular agile framework in industry.</p>
              <p>Core concepts:</p>
              <ul>
                <li><strong>Product Backlog:</strong> the prioritized list of everything the product needs (owned by the Product Owner)</li>
                <li><strong>Sprint:</strong> a fixed-length work cycle, typically 2 to 4 weeks</li>
                <li><strong>Sprint Backlog:</strong> the subset of backlog items the team commits to in this sprint</li>
                <li><strong>Daily Scrum (standup):</strong> 15-minute daily sync: what did I do, what will I do, what is blocking me?</li>
                <li><strong>Sprint Review:</strong> demonstrate working software to stakeholders at the end of each sprint</li>
                <li><strong>Sprint Retrospective:</strong> the team reflects on what to improve for next sprint</li>
              </ul>
              <p>Scrum roles: Product Owner (prioritizes), Scrum Master (removes blockers), Development Team (builds).</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Agile methods exist because requirements change. Short cycles and frequent delivery let teams adapt.</li>
                  <li>XP key practices: pair programming, TDD, small releases, collective ownership, refactoring, simple design.</li>
                  <li>Crystal: match the method weight to project size and criticality. No one-size-fits-all.</li>
                  <li>Scrum: product backlog + sprints + daily standups + sprint reviews. Currently the dominant agile framework.</li>
                  <li>Scrum roles: Product Owner (what), Scrum Master (how the team works), Team (builds it).</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w4-l2',
            title: 'Requirements Engineering',
            content: `
              <h2>What Is a Requirement?</h2>
              <p>A requirement is an expression of desired behavior. It describes what the system must do, not how it will do it. Requirements focus on customer needs, not on the solution or implementation.</p>

              <h2>Types of Requirements</h2>
              <ul>
                <li><strong>Functional:</strong> describes required behavior in terms of required activities. "The system shall allow users to log in with email and password."</li>
                <li><strong>Non-functional (quality):</strong> describes a quality the system must possess. Performance, security, reliability, usability.</li>
                <li><strong>Design constraints:</strong> decisions forced by context. "The system must run on iOS."</li>
                <li><strong>Process constraints:</strong> restrictions on how the system is built. "Must use open-source libraries only."</li>
              </ul>
              <p>The six detailed requirement areas: individual functionality, business flow (usage scenarios), data and information needs, user interfaces, interfaces to external systems, and constraints (non-functional).</p>

              <h2>Requirements Prioritization</h2>
              <p>You rarely have time to build everything. Prioritization criteria include: current user/customer demands, competitive pressure, anticipated future needs, sales advantages, and existing critical problems.</p>
              <p>The Analytical Hierarchical Process (AHP) is one rigorous method: compare each pair of requirements, normalize the matrix, and compute relative weights. Subjective judgments become quantifiable priorities.</p>
              <p>Priority categories are often: <strong>Essential</strong> (must have), <strong>Desirable</strong> (important but not blocking), <strong>Optional</strong> (nice to have, could be cut).</p>

              <h2>Requirements Documentation Forms</h2>
              <ul>
                <li><strong>Input-Process-Output (IPO) English:</strong> plain text describing each functionality</li>
                <li><strong>Data Flow Diagram (DFD):</strong> captures functionality and business flow visually</li>
                <li><strong>Entity-Relation Diagram (ERD):</strong> captures relationships among data</li>
                <li><strong>UML Use Case:</strong> identifies actors, major functionalities, pre/post conditions, flow of events, error conditions</li>
              </ul>

              <h2>Requirements Traceability</h2>
              <p>A traceability table links each requirement forward to design, code, and test cases, and backward to its source. This ensures nothing falls through the cracks and that changes to one requirement can be tracked to all affected parts.</p>

              <h2>Why Requirements Matter (Chaos Report Connection)</h2>
              <ul>
                <li>Clear requirements are needed for design and implementation.</li>
                <li>Requirements documentation enables independent test teams to write test cases.</li>
                <li>Requirements documents control scope creep.</li>
                <li>They enable user training, marketing, and maintenance documentation.</li>
                <li>They allow large projects to be segmented and prioritized.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Requirements describe what, not how. Focus on customer needs, not implementation details.</li>
                  <li>Four types: functional, non-functional, design constraints, process constraints.</li>
                  <li>Prioritize using criteria like user needs, competition, and future value. AHP gives a rigorous way to do it.</li>
                  <li>Document in whatever form fits: IPO text, DFD, ERD, or UML use cases.</li>
                  <li>Traceability = linking every requirement to its source and to its design/code/test implementation.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w4-l3',
            title: 'User Stories',
            content: `
              <h2>What Is a User Story?</h2>
              <p>A user story is a slim, high-level requirements artifact written in non-technical language. It is small enough to fit on an index card. It avoids locking in technology specifics.</p>
              <p>User stories are written by stakeholders, not developers. Domain experts write them because they understand the problem.</p>

              <h2>Writing User Stories</h2>
              <p>Useful templates:</p>
              <ul>
                <li><code>As a [user type], I want to [goal] so that [reason].</code></li>
                <li><code>Given [context], when [event], then [outcome].</code></li>
              </ul>
              <p>Example: "Students can purchase semester parking passes online and pay via credit card or PayPal. The student receives a receipt by email and a printed temporary parking pass."</p>
              <p>Each story should have a unique identifier so it can be referenced throughout development. Use dotted numbering for decomposition:</p>
              <ul>
                <li>1. Students can access registration systems.</li>
                <li>1.1 Students can enroll in courses.</li>
                <li>1.2 Students can view grades and transcripts.</li>
                <li>1.2.1 Students can order official transcripts.</li>
              </ul>

              <h2>INVEST Criteria</h2>
              <p>A well-written user story follows INVEST:</p>
              <ul>
                <li><strong>Independent:</strong> stories should not depend on each other. Dependencies make planning harder.</li>
                <li><strong>Negotiable:</strong> a story is a starting point for conversation, not a contract. Details get fleshed out later.</li>
                <li><strong>Valuable:</strong> each story must deliver value to the customer. Customers write them because of this.</li>
                <li><strong>Estimable:</strong> developers must be able to estimate the effort. If not, there is missing domain knowledge or the story is too big.</li>
                <li><strong>Small:</strong> no more than 2 to 3 person-weeks of effort. Larger stories (epics) are split into smaller ones.</li>
                <li><strong>Testable:</strong> you must be able to verify the story is done. "Software should be easy to use" is not testable.</li>
              </ul>

              <h2>Estimating Cost</h2>
              <p>Assign story points (relative units) to each story. If story 1 is twice as hard as story 2, it gets 2 points. Once velocity is known (points completed per sprint), points can be converted to time estimates.</p>
              <p>Example: if the team averages 2.5 hours per point, a 2-point story takes about 5 hours.</p>

              <h2>User Stories Are the Beginning</h2>
              <p>Writing user stories does not replace other requirements work. More formal methods (use cases, UML diagrams, detailed requirements documents) will be needed. User stories are the starting point for conversations, not the complete specification.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>User stories: slim, non-technical, index-card size. Written by stakeholders, not developers.</li>
                  <li>Template: "As a [user], I want to [goal] so that [reason]."</li>
                  <li>INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. All six must be true.</li>
                  <li>Each story needs: unique ID, priority, and estimated cost (story points).</li>
                  <li>User stories start the conversation. They do not replace use cases, UML, or detailed specs.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w4-l4',
            title: 'Use Cases',
            content: `
              <h2>What Is a Use Case?</h2>
              <p>A use case is a tool for defining interaction between people and technology as functional requirements. A use case diagram shows actors (people or external systems) interacting with the system to achieve goals.</p>
              <p>Use cases are built in early stages of development to specify context, capture requirements, validate architecture, and drive test case generation. They are developed by analysts and domain experts.</p>

              <h2>Finding Actors and Use Cases</h2>
              <p>Finding actors: ask who will use the system, who maintains it, what hardware it interacts with, and who has an interest in its results.</p>
              <p>Finding use cases: for each actor, ask:</p>
              <ul>
                <li>What functions does the actor require from the system?</li>
                <li>Does the actor read, create, destroy, modify, or store information?</li>
                <li>Does the actor need to be notified about events, or notify the system?</li>
                <li>Could the actor's daily work be simplified by new system functions?</li>
              </ul>

              <h2>Use Case Relationships</h2>
              <ul>
                <li><strong>Generalization:</strong> one use case is a specialization of another (inheritance-like)</li>
                <li><strong>Include:</strong> one use case always includes the behavior of another. Used for shared, mandatory sub-behaviors.</li>
                <li><strong>Extend:</strong> one use case conditionally adds behavior to another. Used for optional or exceptional flows.</li>
              </ul>

              <h2>Six Steps to Create Use Cases</h2>
              <ol>
                <li>Identify and describe the actors</li>
                <li>Identify and describe the use cases</li>
                <li>Identify the actor-use case relationships</li>
                <li>Individually outline each use case (pre-conditions, flow of events, post-conditions, error conditions)</li>
                <li>Prioritize the use cases</li>
                <li>Refine the use cases as understanding deepens</li>
              </ol>

              <h2>Strengths and Weaknesses</h2>
              <p><strong>Strengths:</strong> capture different actors' views of the system, capture structure in requirements, understandable by non-engineers.</p>
              <p><strong>Weaknesses:</strong> lack of non-functional requirements, do not capture what the system must NOT do.</p>
              <p>Use case descriptions (text narratives) supplement diagrams with detail: functional specifics, pre/post conditions, non-functional characteristics, alternative paths, and UI samples.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Use cases = interactions between actors and the system to achieve goals. Built early in development.</li>
                  <li>Three relationships: generalization (specialization), include (mandatory shared behavior), extend (optional behavior).</li>
                  <li>Six steps: identify actors, identify use cases, map relationships, outline each, prioritize, refine.</li>
                  <li>Diagrams alone are not enough. Text narratives provide the detail (pre/post conditions, flow of events, error paths).</li>
                  <li>Weakness: use cases do not capture non-functional requirements or what the system must NOT do.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w5', title: 'Week 5 · Design', icon: '05', description: 'Design architecture & methodology, design metrics. Ch 7, 8. Sprint 1 due 7/3.', lessons: [
          {
            id: 'swe3313-w5-l1',
            title: 'Architectural Styles',
            content: `
              <h2>What Is Software Architecture?</h2>
              <p>Software architecture is the structure of a system comprising its major elements, their externally visible properties, and their relationships. Every software system has an architecture. A system may have multiple structures depending on perspective (logical, physical, runtime, etc.).</p>
              <p>Architectural design is high-level. It decides what the major components are and how they relate. Detailed design then refines each component.</p>

              <h2>Pipe-and-Filter</h2>
              <p>The system is decomposed into filters (services that transform input to output) and pipes (conduits through which data flows between filters). Good for batch processing: payroll, compilers, month-end accounting.</p>

              <h2>Event-Driven (Real-Time)</h2>
              <p>Design is based on an event dispatcher that manages events and the functions that respond to them. Events may be notifications or carry data, may be prioritized, and may require synchronous or asynchronous processing. Good for: airplane control, medical monitors, home automation, games.</p>

              <h2>Client-Server</h2>
              <p>Application split into a client component (requests services) and a server component (provides services). A client can connect to more than one server. Servers are usually independent of each other.</p>

              <h2>Model-View-Controller (MVC)</h2>
              <p>Separates the data (model) from the presentation (view). The controller handles input and coordinates the two. Most internet web applications use MVC or a variant. The controller is often integrated with the view in modern frameworks.</p>

              <h2>Layered Style</h2>
              <p>Components organized in layers where each layer can only request services from the layer below it (strict layering) or from any layer below it (relaxed layering). The outer or upper layer depends on the inner or lower layer, not the reverse.</p>

              <h2>Database-Centric Style</h2>
              <p>A shared data store sits at the center. All components read and write to it. Very popular for business applications because it centralizes data consistency.</p>

              <h2>Three-Tier</h2>
              <p>Clients, application server (business logic), and database are separated into three distinct tiers. Clients never access the database directly. Provides better flexibility and data integrity than two-tier client-server.</p>

              <h2>Service-Oriented Architecture (SOA) and Microservices</h2>
              <p>SOA: independent services accessed through a network, often coordinated via an Enterprise Service Bus. Microservices: smaller, more focused services (each ownable by a 5 to 10 person team) connected via a service mesh instead of a central bus.</p>

              <h2>Architectural Tactics</h2>
              <p>Tactics solve smaller, specific problems without affecting the overall structure. Example: to improve reliability in a distributed system, add heartbeat or ping/echo components for fault detection. Tactics complement architectural styles.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Architecture = major components + their visible properties + their relationships. Every system has one.</li>
                  <li>Pipe-and-filter: good for batch processing. Event-driven: good for real-time systems.</li>
                  <li>Client-server and MVC are the dominant styles for networked and web applications.</li>
                  <li>Layered, three-tier, and database-centric are common in business applications.</li>
                  <li>SOA/microservices: independent services, each small enough for a single team to own.</li>
                  <li>Tactics solve specific problems within a style. They do not replace the architectural style.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w5-l2',
            title: 'Detailed Design: UML and OO',
            content: `
              <h2>Architectural vs. Detailed Design</h2>
              <p>Architectural design decides the major components and their relationships. Detailed design refines each component to match requirements. Detailed design comes from both the requirements and the architecture.</p>

              <h2>Functional Decomposition</h2>
              <p>Start with the main task (requirements) and break it down into modules, then sub-modules. There are alternative decompositions for any problem. Used in non-OO contexts (e.g., PHP web apps). The choice of decomposition affects maintainability and testability.</p>

              <h2>OO Design with UML</h2>
              <p>First step: review and refine the use cases. Then decide which classes to create and how they relate. Use UML as the design language.</p>
              <p><strong>Classes</strong> represent real-world entities or system concepts. They have attributes (data) and methods (behavior). Classes are organized so objects in the same class share characteristics.</p>
              <p><strong>UML Class Diagram relationships:</strong></p>
              <ul>
                <li>Association: a general relationship between classes</li>
                <li>Aggregation: a "has-a" relationship (no-fill diamond)</li>
                <li>Composition: a strong "has-a" where the part cannot exist without the whole (fill diamond)</li>
                <li>Inheritance: a child class extends a parent class (arrow to parent)</li>
              </ul>

              <h2>Other UML Diagrams</h2>
              <ul>
                <li><strong>State diagram:</strong> shows the states an object can be in and transitions between them. Example: a student's status (enrolled, on leave, graduated, withdrawn).</li>
                <li><strong>Sequence diagram:</strong> shows a flow of interactions between objects over time. Can include user interactions.</li>
                <li><strong>Activity diagram:</strong> shows the flow of activities or steps in a process.</li>
              </ul>

              <h2>Relational Database Design</h2>
              <p>Most databases use relational technology: tables (relations), rows (tuples), columns (attributes). Design phases:</p>
              <ol>
                <li><strong>Conceptual modeling:</strong> ER diagram (done during requirements phase)</li>
                <li><strong>Logical design:</strong> convert ER to relational tables (one table per entity, add foreign keys for relationships, new table for many-to-many)</li>
                <li><strong>Physical design:</strong> choose data types, decide on indexes (searches faster, updates slower, consume space)</li>
              </ol>

              <h2>UI Design</h2>
              <p>Two main issues: flow of interactions (how the user navigates) and look and feel. Design the flow first using prototype screens showing the sequence of states. Types of interfaces: command-line, text menus, graphical (GUI). Norman's 7-stage model and the GOMS model provide frameworks for analyzing user interaction.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Detailed design refines architecture to match requirements. It is lower level and more specific.</li>
                  <li>OO design: start from use cases, identify classes, define attributes and methods, draw relationships in UML.</li>
                  <li>UML class diagram relationships: association, aggregation, composition, inheritance.</li>
                  <li>State, sequence, and activity diagrams complement class diagrams by showing behavior over time.</li>
                  <li>DB design: conceptual (ER) then logical (tables) then physical (types + indexes).</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w5-l3',
            title: 'Design Metrics: Cohesion and Coupling',
            content: `
              <h2>The Goal: High Cohesion, Low Coupling</h2>
              <p>Two properties predict how maintainable a design is. Well-designed modules are cohesive (focused) and loosely coupled (independent). The goal is high cohesion within modules and low coupling between them.</p>

              <h2>Cohesion</h2>
              <p>Cohesion measures the "degree of relatedness" within a unit (module, class, or component). How tightly focused is it on one thing?</p>
              <p>Levels from highest to lowest:</p>
              <ol>
                <li><strong>Functional:</strong> performs one single, well-defined function. Best.</li>
                <li><strong>Sequential:</strong> one output feeds the next operation.</li>
                <li><strong>Communicational:</strong> operations use the same data.</li>
                <li><strong>Procedural:</strong> operations follow a specific sequence.</li>
                <li><strong>Temporal:</strong> operations happen at the same time (e.g., initialization).</li>
                <li><strong>Logical:</strong> operations are logically related but not functionally.</li>
                <li><strong>Coincidental:</strong> no meaningful relationship between operations. Worst.</li>
              </ol>
              <p><strong>Example of low cohesion:</strong> A <code>CashRegister</code> class that also handles coin value constants. Fix: split into <code>CashRegister</code> and <code>Coin</code> classes. Each does one thing.</p>
              <p><strong>Bieman and Ott metrics:</strong> Weak functional cohesion = (glue tokens) / (total data tokens). Strong functional cohesion = (super glue tokens) / (total data tokens). A single-function module scores 1.0 on both. A multi-function module scores lower.</p>

              <h2>Coupling</h2>
              <p>Coupling measures the "degree of interdependence" between software units. How much does one module depend on another?</p>
              <p>Levels from lowest (best) to highest (worst):</p>
              <ol>
                <li><strong>No coupling:</strong> modules are fully independent. Ideal, rarely practical.</li>
                <li><strong>Data coupling:</strong> modules share only the necessary data (function parameters). Best practical option.</li>
                <li><strong>Stamp coupling:</strong> modules share a data structure and use only parts of it.</li>
                <li><strong>Control coupling:</strong> one module controls the flow of another via a flag or command.</li>
                <li><strong>Common coupling:</strong> modules share global data.</li>
                <li><strong>Content coupling:</strong> one module accesses or modifies the internal data of another. Worst.</li>
              </ol>
              <p>Minimize coupling to minimize the impact of interface changes. When one module changes, fewer other modules should break.</p>

              <h2>Chidamber and Kemerer (C-K) OO Metrics</h2>
              <ul>
                <li><strong>WMC</strong> (Weighted Methods per Class): more methods = more complex = harder to understand</li>
                <li><strong>DIT</strong> (Depth of Inheritance Tree): deeper = more inherited behavior to understand</li>
                <li><strong>NOC</strong> (Number of Children): more children = more impact when the parent changes</li>
                <li><strong>CBO</strong> (Coupling Between Object Classes): how many other classes does this class depend on?</li>
                <li><strong>RFC</strong> (Response for a Class): how many methods can be called in response to a message?</li>
                <li><strong>LCOM</strong> (Lack of Cohesion in Methods): higher = lower cohesion (note: this is a reverse measure)</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Goal: high cohesion (modules do one focused thing) and low coupling (modules are independent).</li>
                  <li>Cohesion levels: functional (best) down to coincidental (worst). Aim for functional.</li>
                  <li>Coupling levels: data coupling (best practical) up to content coupling (worst). Minimize all coupling.</li>
                  <li>Bieman/Ott: cohesion = glue/super-glue tokens divided by total data tokens. Single-function = 1.0.</li>
                  <li>C-K metrics: WMC, DIT, NOC, CBO, RFC, LCOM. These measure OO design quality numerically.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w6', title: 'Week 6 · Implementation', icon: '06', description: 'Implementation. Ch 9. Test 2 on 7/8. Requirements doc due 7/8. Sprint 2 opens.', lessons: [
          {
            id: 'swe3313-w6-l1',
            title: 'Implementation: Debugging, Assertions, and Code Quality',
            content: `
              <h2>Debugging Heuristics</h2>
              <p>Bugs are not randomly distributed. Some heuristics from decades of practice:</p>
              <ul>
                <li>Some routines will have many errors. Routines with one error tend to have more.</li>
                <li>New code tends to have more errors than mature code.</li>
                <li>Particular developers, languages, and parts of the codebase are more error-prone.</li>
                <li>Fix the defect, not just the symptom.</li>
              </ul>
              <p>Tools that help: code complexity analyzers (identify high-risk modules), debuggers (step through execution), and profilers (measure where time is actually spent).</p>

              <h2>Assertions</h2>
              <p>An assertion is an executable statement that checks a condition at runtime. Three types:</p>
              <ul>
                <li><strong>Pre-condition:</strong> what must be true before the module runs. "Input must not be null."</li>
                <li><strong>Post-condition:</strong> what must be true after the module runs. "Output must be a sorted list."</li>
                <li><strong>Invariant:</strong> what must always be true. "The account balance must never be negative."</li>
              </ul>
              <p>Assertions document assumptions about the code. When an assertion fails, it reveals a bug at the exact location rather than letting corruption propagate. In production, assertions can be disabled for performance, but they are invaluable during development and testing.</p>

              <h2>Performance Optimization</h2>
              <p>Key principle: do not optimize early. First, make the code correct. Then, if performance is insufficient, use a profiler to find where time is actually spent. Optimize only the hotspots.</p>
              <p>Performance tradeoffs:</p>
              <ul>
                <li>Optimization often reduces readability and maintainability</li>
                <li>Correctness is almost always more important than performance</li>
                <li>Premature optimization is a common source of bugs</li>
              </ul>
              <p>A profiler runs the program and calculates how much time is spent in each part. This prevents the common mistake of optimizing code that is not actually the bottleneck.</p>

              <h2>Code Quality Considerations</h2>
              <p>Code quality during implementation is not just about making things work. It includes:</p>
              <ul>
                <li><strong>Readability:</strong> code is read far more than it is written. Use meaningful names and clear structure.</li>
                <li><strong>Error handling:</strong> handle edge cases and unexpected inputs explicitly.</li>
                <li><strong>Code reviews:</strong> peer review catches bugs and spreads knowledge.</li>
                <li><strong>Standards:</strong> consistent coding style across the team reduces cognitive load.</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Bugs cluster. Modules with errors tend to have more. Target high-complexity, high-change areas first.</li>
                  <li>Assertions check pre-conditions, post-conditions, and invariants. They document assumptions and catch bugs early.</li>
                  <li>Profile before you optimize. Never guess where the bottleneck is. Measure it.</li>
                  <li>Correctness first, performance second. Premature optimization causes bugs and reduces readability.</li>
                  <li>Code quality = correctness + readability + error handling + standards compliance.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w7', title: 'Week 7 · Testing & QA', icon: '07', description: 'Testing & QA, software testing & integration. Ch 10. 7/13-7/20.', lessons: [
          {
            id: 'swe3313-w7-l1',
            title: 'Testing: Black-Box Techniques',
            content: `
              <h2>Black-Box vs. White-Box Testing</h2>
              <p>Black-box testing treats the software as a black box: you test inputs and outputs without looking at the internal code. You verify behavior against requirements. White-box testing uses knowledge of the code structure to design tests.</p>

              <h2>Equivalence Class Partitioning</h2>
              <p>Divide the input domain into groups (equivalence classes) where all values in a group are expected to behave the same way. Pick one representative from each class to test. This dramatically reduces the number of test cases needed.</p>
              <p>Example: if valid input is 1 to 100, the equivalence classes are: below 1 (invalid), 1 to 100 (valid), above 100 (invalid). Test one value from each class instead of testing every possible value.</p>
              <p>For n functional requirements where each is handled by separate code, test one representative per class plus the invalid classes.</p>

              <h2>Boundary Value Analysis</h2>
              <p>Past experience shows that boundaries are error-prone. Boundary value analysis adds test cases for edge values: at the boundary, just below it, and just above it.</p>
              <p>Process:</p>
              <ol>
                <li>Do equivalence class partitioning first.</li>
                <li>Add test cases for the exact boundary value (valid side).</li>
                <li>Add test cases just outside the boundary (invalid side).</li>
              </ol>
              <p>Example: if valid input is 1 to 100, test: 0 (just below), 1 (boundary), 2 (just inside), 99 (just inside), 100 (boundary), 101 (just above).</p>

              <h2>Why Black-Box Testing Matters</h2>
              <p>Black-box testing can be performed by a separate test team without needing to read the source code. It tests what the customer cares about: does the system behave correctly for real inputs? It catches requirements-level bugs that white-box testing cannot.</p>
              <p>Limitations: it cannot test internal logic paths, cannot ensure every branch of code is executed, and may miss bugs that only appear with specific internal state.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Black-box testing: test inputs and outputs without seeing the code. Based on requirements.</li>
                  <li>Equivalence partitioning: group inputs into classes. Test one representative per class. Reduces test count.</li>
                  <li>Boundary value analysis: boundaries are where bugs hide. Test at, just below, and just above each boundary.</li>
                  <li>Black-box can be done by a separate test team. It tests what the customer cares about.</li>
                  <li>Limitation: black-box does not guarantee internal code paths are covered.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w7-l2',
            title: 'Testing: White-Box and Integration',
            content: `
              <h2>White-Box Testing</h2>
              <p>White-box (structural) testing uses knowledge of the internal code structure to design test cases. The goal is to execute every statement, branch, or path in the code at least once.</p>
              <p>Coverage levels:</p>
              <ul>
                <li><strong>Statement coverage:</strong> every line of code is executed at least once</li>
                <li><strong>Branch coverage:</strong> every branch of every decision is taken (both true and false)</li>
                <li><strong>Path coverage:</strong> every possible path through the code is executed (exponentially expensive for complex code)</li>
              </ul>
              <p>White-box testing is done by developers who understand the code. It finds logic errors, missing cases, and dead code.</p>

              <h2>Combining Black-Box and White-Box</h2>
              <p>Neither approach alone is sufficient. Black-box tests what the customer specified. White-box tests that the implementation is correct. A complete test strategy uses both:</p>
              <ul>
                <li>Black-box ensures requirements coverage</li>
                <li>White-box ensures code coverage</li>
                <li>Together they provide confidence in both the specification and the implementation</li>
              </ul>

              <h2>Integration Testing</h2>
              <p>Integration testing verifies that separately tested components work correctly together. Individual units can pass their own tests but still fail when combined due to interface mismatches, timing issues, or shared state problems.</p>
              <p>Approaches:</p>
              <ul>
                <li><strong>Big bang:</strong> integrate everything at once and test. High risk because when it fails, the source of the failure is hard to isolate.</li>
                <li><strong>Top-down:</strong> integrate from the top of the call hierarchy downward. Use stubs for components not yet implemented.</li>
                <li><strong>Bottom-up:</strong> integrate from the bottom upward. Use drivers to call the lower-level components.</li>
                <li><strong>Incremental (CI):</strong> integrate and test continuously as each component is completed. Problems are discovered early.</li>
              </ul>

              <h2>System Testing and Acceptance Testing</h2>
              <ul>
                <li><strong>System testing:</strong> test the fully integrated system against requirements. Includes functional testing, performance testing, security testing, and usability testing.</li>
                <li><strong>Acceptance testing:</strong> done by the customer or their representative to validate that the system meets their needs. The formal gate before delivery.</li>
              </ul>

              <h2>Making Requirements Testable</h2>
              <p>Requirements that cannot be tested cannot be verified as complete. Three techniques to make requirements testable:</p>
              <ul>
                <li>Specify a quantitative description for each vague adjective or adverb ("fast" becomes "responds in under 2 seconds")</li>
                <li>Replace pronouns with specific entity names</li>
                <li>Ensure every noun is defined exactly once in the requirements documents</li>
              </ul>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>White-box testing: use code knowledge to exercise every statement, branch, and path.</li>
                  <li>Coverage levels: statement (easiest) to path (most thorough). Branch coverage is the practical sweet spot.</li>
                  <li>Use both black-box (requirements) and white-box (code) for complete coverage.</li>
                  <li>Integration testing: components that pass unit tests can still fail when combined. Test the interfaces.</li>
                  <li>Acceptance testing: the customer validates the system. This is the formal gate before delivery.</li>
                </ul>
              </div>`
          }
        ] },
      { id: 'w8', title: 'Week 8 · Config & Maintenance', icon: '08', description: 'Configuration management, software support & maintenance. Ch 11, 12. Final Exam 7/27-7/28.', lessons: [
          {
            id: 'swe3313-w8-l1',
            title: 'Configuration Management',
            content: `
              <h2>What Is Configuration Management?</h2>
              <p>Configuration management (CM) is the discipline of controlling all the pieces and parts of a software system. As systems grow, multiple versions of code, documentation, and tools exist simultaneously. Without CM, teams cannot know which version of what is deployed where.</p>

              <h2>Two Core Models</h2>
              <p><strong>Parts Identification Model:</strong> every software artifact must be uniquely identifiable. A naming scheme encodes information into the identifier:</p>
              <ul>
                <li>PP: two-position product code</li>
                <li>CC: two-position country code</li>
                <li>RRR: three-position release number</li>
                <li>PPPPPP: six-position part number</li>
              </ul>
              <p>The key point: you must be able to look at an artifact's name and know exactly what version and product it belongs to.</p>
              <p><strong>Parts Storage and Access Model:</strong> a controlled parts database where individual users check out components, make changes, and check them back in. A control system manages who has what, and a build system assembles the final product from specific versions of all parts.</p>

              <h2>Why CM Matters</h2>
              <ul>
                <li>Without CM, a bug fix for version 2.1 might accidentally include features from version 3.0.</li>
                <li>Without CM, two developers can overwrite each other's changes.</li>
                <li>Without CM, you cannot reproduce a specific released version to investigate a customer bug.</li>
              </ul>

              <h2>Integration and Builds</h2>
              <p>Integration is the process of combining separately developed components into the full system. A build system automates this: pull specific versions from the parts database, compile, link, and produce the deployable artifact.</p>
              <p>Continuous integration (CI): automatically build and test the system every time a change is committed. Problems are found immediately when the change is fresh in the developer's mind.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>CM controls all artifacts (code, docs, configs) across versions and environments.</li>
                  <li>Parts identification: every artifact has a unique, structured name that encodes product, version, and part.</li>
                  <li>Parts storage: a controlled database with check-out/check-in. Build system assembles from specific versions.</li>
                  <li>Without CM: overwritten changes, unreproducible bugs, accidental feature mixing. CM prevents all three.</li>
                  <li>Continuous integration: build and test on every commit. Catch problems while the change is still fresh.</li>
                </ul>
              </div>`
          },
          {
            id: 'swe3313-w8-l2',
            title: 'Software Support and Maintenance',
            content: `
              <h2>Support Is Part of Building Software</h2>
              <p>Software does not stop needing attention after release. Support and maintenance are ongoing costs that must be planned for from the beginning. For large systems, support can consume more resources than the original development.</p>

              <h2>Tiered Customer Support</h2>
              <p>Organize the support group into tiers to handle problems at the right level of expertise:</p>
              <ul>
                <li><strong>Tier 1 (Direct contact):</strong> accept problems, prioritize them, record them, and solve the easy ones. This tier handles the high volume of simple issues.</li>
                <li><strong>Tier 2:</strong> more complex problems escalated from Tier 1. Deeper technical knowledge.</li>
                <li><strong>Tier 3:</strong> the development team. Handles the bugs and problems that require source code changes.</li>
              </ul>
              <p>A key metric: time to fix and return a problem. Customers measure support quality largely by turnaround time. A service-level agreement (SLA) defines the maximum acceptable time for each priority level.</p>

              <h2>Types of Maintenance</h2>
              <ul>
                <li><strong>Corrective:</strong> fixing bugs reported after release. The classic definition of maintenance.</li>
                <li><strong>Adaptive:</strong> modifying the software to work in a changed environment (new OS, new hardware, new regulations).</li>
                <li><strong>Perfective:</strong> improving the software to add features, improve performance, or improve usability even when nothing is broken.</li>
              </ul>
              <p>Studies show that perfective maintenance (adding features and improvements) accounts for the majority of maintenance effort. Corrective maintenance is a smaller fraction than most people assume.</p>

              <h2>Pre-Release vs. Post-Release Support Planning</h2>
              <p><strong>Pre-release preparation:</strong> estimate number of users, count known problems and expected quality level, plan education and support training, plan fix and maintenance cycles.</p>
              <p><strong>Post-release activities:</strong> call center and problem resolution, major bug fixes and code changes, functional modifications and enhancements, user training updates.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Support and maintenance are ongoing. Plan and budget for them from the start of the project.</li>
                  <li>Tiered support: Tier 1 handles volume (easy problems), Tier 2 handles escalations, Tier 3 is the dev team.</li>
                  <li>Three maintenance types: corrective (fix bugs), adaptive (match new environment), perfective (add value).</li>
                  <li>Perfective maintenance is the largest category. Most post-release effort goes to improvements, not bug fixes.</li>
                  <li>SLAs define turnaround time commitments. Customers judge support quality largely by how fast problems are resolved.</li>
                </ul>
              </div>`
          }
        ] }
    ]
  },
  {
    id: 'cse3153',
    title: 'Database Systems',
    code: 'CSE 3153',
    icon: 'DB',
    color: '#f59e0b',
    subtitle: 'Relational design, SQL, transactions, indexes, normalization.',
    syllabus: `
      <div class="syll-meta">
        <span><strong>Prof.</strong> Lavanya Pondichery Sekar</span>
        <span><strong>Email</strong> lsekar@kennesaw.edu (preferred)</span>
        <span><strong>Office Hours</strong> T/Th 11AM-1PM by appointment</span>
        <span><strong>Section</strong> W01 · CRN 52304 · 3 credits</span>
      </div>

      <div class="note"><strong>📝 Weekly rhythm.</strong> Coursework opens Monday 6 AM. Everything is due Saturday 11:59 PM (6-day window). Expect 14-16 hours/week.</div>

      <h2>Key Dates & Deadlines</h2>
      <table>
        <tr><th>Week</th><th>Due (Sat 11:59 PM)</th><th>Topic</th></tr>
        <tr><td>1 (Jun 3-6)</td><td>Quiz 1</td><td>Introduction to Databases</td></tr>
        <tr><td>2 (Jun 8-13)</td><td>Assignment 1 · Quiz 2</td><td>Modeling Data</td></tr>
        <tr><td>3 (Jun 15-20)</td><td>Assignment 2 · Quizzes 3 & 4</td><td>E-R Model · Logical DB Design</td></tr>
        <tr><td>4 (Jun 22-27)</td><td>Assignment 3 · Quizzes 5 & 6</td><td>Intro to SQL · Advanced SQL</td></tr>
        <tr><td>5</td><td><strong>Midterm Test (July 1)</strong></td><td>Test prep</td></tr>
        <tr><td>6 (Jul 6-11)</td><td>Assignment 4 · Quizzes 7 & 8</td><td>DB in Applications · Physical Design</td></tr>
        <tr><td>7 (Jul 13-18)</td><td>Assignment 5 · Quizzes 9 & 10</td><td>Modern Data Platforms · DB Admin</td></tr>
        <tr><td>8 (Jul 20-25)</td><td><strong>Project Due</strong> · Quiz 11</td><td>Object-Oriented Models</td></tr>
        <tr><td>—</td><td><strong>Final Test (July 28)</strong></td><td>—</td></tr>
      </table>

      <h2>Grading</h2>
      <table>
        <tr><th>Component</th><th>Weight</th></tr>
        <tr><td>5 Assignments (10% each)</td><td>50%</td></tr>
        <tr><td>1 Project</td><td>15%</td></tr>
        <tr><td>11 Quizzes (1.65% each)</td><td>15%</td></tr>
        <tr><td>Midterm Test</td><td>10%</td></tr>
        <tr><td>Final Exam</td><td>10%</td></tr>
      </table>
      <p>Scale: A 90+ · B 80-89 · C 70-79 · D 60-69 · F under 60.</p>

      <div class="warn"><strong>⚠️ Late policy.</strong> 48hr window with 10% penalty, ONLY for assignments and the project (NOT tests or quizzes). Tests have a single-day window in the scheduled week and cannot be retaken.</div>
      <div class="warn"><strong>⚠️ SSMS is Windows-only.</strong> The course requires Microsoft SQL Server Management Studio. Set up a Windows VM or Docker + Azure Data Studio before 6/3.</div>
      <div class="warn"><strong>⚠️ AI prohibited.</strong> "Using AI/ChatGPT etc. is strictly not allowed for this course." Do not use it even for polish.</div>

      <h2>Textbook & Tools</h2>
      <p>Modern Database Management, 14th Edition by Hoffer, Topi, Venkataraman, Bala (recommended, digital OK). Tools: SQL Server Management Studio, draw.io for ER diagrams, web camera for Respondus Monitor proctoring.</p>
    `,
    modules: [
      { id: 'w1', title: 'Week 1 · Intro to Databases', icon: '01', description: 'Introduction to Databases. Module 1. June 3-6. Quiz 1.', lessons: [] },
      { id: 'w2', title: 'Week 2 · Modeling Data', icon: '02', description: 'Modeling Data. Module 2. June 8-13. Assignment 1, Quiz 2.', lessons: [] },
      { id: 'w3', title: 'Week 3 · E-R Model & Relational', icon: '03', description: 'Enhanced E-R Model, Logical DB Design & Relational Model. Modules 3 & 4. Assignment 2.', lessons: [] },
      { id: 'w4', title: 'Week 4 · SQL', icon: '04', description: 'Introduction to SQL, Advanced SQL. Modules 5 & 6. Assignment 3.', lessons: [] },
      { id: 'w5', title: 'Week 5 · Midterm Prep', icon: '05', description: 'Test prep. Midterm July 1.', lessons: [] },
      { id: 'w6', title: 'Week 6 · DB Applications', icon: '06', description: 'Databases in Applications, Physical DB Design & Infrastructure. Modules 7 & 8. Assignment 4.', lessons: [] },
      { id: 'w7', title: 'Week 7 · Modern Platforms', icon: '07', description: 'Modern Data Platforms, DB Admin & Data Quality. Modules 9 & 10. Assignment 5.', lessons: [] },
      { id: 'w8', title: 'Week 8 · Object-Oriented Models', icon: '08', description: 'Object-Oriented Models. Module 11. Project Due. Final Test July 28.', lessons: [] }
    ]
  },
  {
    id: 'cse3801',
    title: 'Professional Practices and Ethics',
    code: 'CSE 3801',
    icon: 'ET',
    color: '#8b5cf6',
    subtitle: 'Ethics, communication, and the social impact of computing.',
    syllabus: `
      <div class="syll-meta">
        <span><strong>Prof.</strong> Lavanya Pondichery Sekar</span>
        <span><strong>Email</strong> lsekar@kennesaw.edu (preferred)</span>
        <span><strong>Office Hours</strong> T/Th 11AM-12PM by appointment</span>
        <span><strong>Section</strong> W02 · CRN 52307 · 2 credits</span>
      </div>

      <div class="note"><strong>📝 Weekly rhythm.</strong> Coursework opens Monday 6 AM. Everything is due Saturday 11:59 PM. Team Project is required to pass.</div>

      <h2>Key Dates & Deadlines</h2>
      <table>
        <tr><th>Week</th><th>Due (Sat 11:59 PM)</th></tr>
        <tr><td>1 (Jun 3-6)</td><td>Intro Discussion (Module 0)</td></tr>
        <tr><td>2 (Jun 8-13)</td><td>Discussion 1 · Assignment 1</td></tr>
        <tr><td>3 (Jun 15-20)</td><td>Discussions 2 & 3 · Assignment 2</td></tr>
        <tr><td>4 (Jun 22-27)</td><td>Discussions 4 & 5 · Assignment 3</td></tr>
        <tr><td>5</td><td><strong>Midterm Test (July 1)</strong></td></tr>
        <tr><td>6 (Jul 6-11)</td><td>Discussion 6 · <strong>Team Project</strong> · 7/9 last day to withdraw</td></tr>
        <tr><td>7 (Jul 13-18)</td><td>Discussions 7 & 8 · Assignment 4</td></tr>
        <tr><td>8 (Jul 20-25)</td><td>Discussion 9 · Assignment 5</td></tr>
        <tr><td>—</td><td><strong>Final Exam (July 28)</strong></td></tr>
      </table>

      <h2>Grading</h2>
      <table>
        <tr><th>Component</th><th>Weight</th></tr>
        <tr><td>Midterm (22.5%) + Final (22.5%)</td><td>45%</td></tr>
        <tr><td>5 Assignments (5% each)</td><td>25%</td></tr>
        <tr><td>1 Team Project</td><td>15%</td></tr>
        <tr><td>10 Discussions (1.5% each)</td><td>15%</td></tr>
      </table>
      <p>Scale: A 90+ · B 80-89 · C 70-79 · D 60-69 · F under 60. You cannot earn more than one grade above your project average.</p>

      <div class="warn"><strong>⚠️ Late policy.</strong> 48hr window with 10% penalty, ONLY for assignments and the team project (NOT tests or discussions). Tests cannot be retaken.</div>
      <div class="warn"><strong>⚠️ AI prohibited.</strong> "Using AI/ChatGPT etc. is strictly not allowed." Especially scrutinized in an ethics class. She will examine writing assignments.</div>

      <h2>Textbook</h2>
      <p>No required textbook. All material is in D2L. Optional free reference: Computers, Information Technology, the Internet, Ethics, Society and Human Values by Philip Pecorino (free online).</p>
    `,
    modules: [
      { id: 'w1', title: 'Week 1 · Module 0', icon: '01', description: 'Intro Discussion. June 3-6.', lessons: [] },
      { id: 'w2', title: 'Week 2 · Module 1', icon: '02', description: 'Module 1. June 8-13. Discussion 1, Assignment 1.', lessons: [] },
      { id: 'w3', title: 'Week 3 · Modules 2 & 3', icon: '03', description: 'Modules 2 & 3. June 15-20. Discussions 2 & 3, Assignment 2.', lessons: [] },
      { id: 'w4', title: 'Week 4 · Modules 4 & 5', icon: '04', description: 'Modules 4 & 5. June 22-27. Discussions 4 & 5, Assignment 3.', lessons: [] },
      { id: 'w5', title: 'Week 5 · Midterm Prep', icon: '05', description: 'Test prep. Midterm Test July 1.', lessons: [] },
      { id: 'w6', title: 'Week 6 · Module 6', icon: '06', description: 'Module 6. July 6-11. Discussion 6, Team Project.', lessons: [] },
      { id: 'w7', title: 'Week 7 · Modules 7 & 8', icon: '07', description: 'Modules 7 & 8. July 13-18. Discussions 7 & 8, Assignment 4.', lessons: [] },
      { id: 'w8', title: 'Week 8 · Module 9', icon: '08', description: 'Module 9. July 20-25. Discussion 9, Assignment 5. Final Exam July 28.', lessons: [] }
    ]
  }
];
