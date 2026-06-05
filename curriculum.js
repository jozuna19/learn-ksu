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
          },
          {
            id: 'cs3305-w1-l10',
            title: 'Video Notes: CS3305 Survival Checklist',
            content: `
              <h2>The Plain-English Idea</h2>
              <p>The course overview and homework-guidance videos are not really about data structures. They are about not losing easy points. Treat this lesson like your pre-flight checklist before every CS3305 submission.</p>

              <h2>Daily Course Habits</h2>
              <ul>
                <li>Check D2L announcements regularly.</li>
                <li>Check D2L email daily.</li>
                <li>Use D2L email for course communication.</li>
                <li>Put the course number and section in the email subject line.</li>
              </ul>

              <h2>Academic Integrity Rules</h2>
              <p>The professor was direct here: do not copy code from classmates, older students, websites, or other resources. Submissions with identical or slightly modified code may be treated as plagiarism.</p>

              <div class="warn"><strong>Important:</strong> If you discuss ideas with someone or use any outside resource, document and cite that resource in the submission as required by the course.</div>

              <h2>Assignment Submission Rules</h2>
              <ul>
                <li>Submit to the D2L submission folder, not by email.</li>
                <li>No late submissions are accepted.</li>
                <li>You may resubmit before the deadline. The latest submission before the deadline is graded.</li>
                <li>Do not submit a zip file unless an assignment explicitly says to.</li>
                <li>Submit individual <code>.java</code> files plus one results document with screenshots.</li>
                <li>Compile and run your files immediately before upload.</li>
              </ul>

              <h2>Required Java File Hygiene</h2>
              <ul>
                <li>Use the exact class/file names requested in the assignment.</li>
                <li>Include an author header at the top of every program.</li>
                <li>Use meaningful input and output labels.</li>
                <li>Match the sample output format and alignment.</li>
                <li>Use meaningful variable names.</li>
                <li>Remove unused variables.</li>
                <li>Use indentation and short comments for important logic.</li>
              </ul>

              <h2>Before You Submit</h2>
              <pre><code>1. File names match the assignment exactly.
2. Every program has an author header.
3. Every program compiles.
4. Every program runs.
5. Output labels match the sample.
6. Screenshots show every program working.
7. Results document is Word or PDF.
8. Java files are submitted individually.
9. No zip file.
10. Submission is before 11:59 PM on the D2L due date.</code></pre>

              <h2>Quiz Setup</h2>
              <p>The try-quiz video says quizzes and exams may use LockDown Browser and webcam. The practice quiz exists to verify your computer can complete that flow before real quizzes and exams.</p>

              <div class="key-points">
                <h4>Key Points</h4>
                <ul>
                  <li>Most preventable CS3305 point losses come from submission details, not just logic mistakes.</li>
                  <li>Compile, run, screenshot, and submit individual Java files.</li>
                  <li>Do not copy code. Document outside help and resources.</li>
                  <li>No late submission means submit early enough to fix upload problems.</li>
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
