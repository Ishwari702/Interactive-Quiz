# Interactive Quiz Web Application
This is a front-end web application that allows users to take an interactive multiple-choice quiz built using HTML, CSS, and JavaScript. The quiz supports dynamic questions, image-based questions, a countdown timer, and hints for learning support.

# Features
 Dynamic Questions: Questions are shuffled randomly every time the quiz starts.

 Image Support: Some questions include relevant images.

 Countdown Timer: Each question has a time limit.

 Hints: Users can click "Show Hint" to get clues before answering.

 Score Calculation: Score is shown at the end with performance feedback.

 Responsive & Styled UI: Modern, clean interface using CSS.

# Project Structure

interactive-quiz/
│
├── index.html         # Main HTML structure
├── style.css          # Styling for quiz layout and UI
├── script.js          # Quiz logic, timer, score, shuffle
└── README.md          # Project documentation


# Technologies Used
HTML5 – Structure

CSS3 – Styling & Layout

JavaScript (ES6) – Logic, Timer, Score, Interactivity

# How It Works
The quiz pulls a list of questions (with options, correct answer, optional image, and hint) from a JS array.

Questions are shuffled using the Fisher-Yates algorithm.

For each question:

The user selects an answer via radio buttons.

They can optionally click "Show Hint".

They have a limited time (e.g., 15 seconds) to answer.

At the end, the score and performance feedback are displayed.

# How to Use
Download or clone the repo:

bash
Copy code
git clone https://github.com/yourusername/interactive-quiz.git
Open the folder and run index.html in any browser.

Answer each question before the timer runs out.

See your score and try again!
