const questionBank = [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>",
      hint: "It’s the anchor tag.",
      image: ""
    },
    {
      question: "Which property is used in CSS to change background color?",
      options: ["color", "background-color", "bgcolor", "style"],
      answer: "background-color",
      hint: "It starts with 'background'.",
      image: ""
    },
    {
      question: "Which of these is a JavaScript data type?",
      options: ["Boolean", "Float", "Char", "Word"],
      answer: "Boolean",
      hint: "It’s true or false.",
      image: ""
    },
    {
      question: "Identify this logo:",
      options: ["Java", "JavaScript", "Python", "C++"],
      answer: "JavaScript",
      hint: "Used to add interactivity on web pages.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      question: "Which CSS property controls text size?",
      options: ["font-size", "text-style", "font-weight", "size"],
      answer: "font-size",
      hint: "It starts with 'font'.",
      image: ""
    },
    {
      question: "Which function logs output to the console in JavaScript?",
      options: ["console.log()", "log.console()", "console()", "print()"],
      answer: "console.log()",
      hint: "It starts with 'console'.",
      image: ""
    },
    {
      question: "Which HTML element is used to insert an image?",
      options: ["<image>", "<img>", "<pic>", "<src>"],
      answer: "<img>",
      hint: "It’s short for image.",
      image: ""
    },
    {
      question: "Which tag is used to define a table row?",
      options: ["<tr>", "<td>", "<th>", "<row>"],
      answer: "<tr>",
      hint: "It starts with 't'.",
      image: ""
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "#", "<!-- -->", "**"],
      answer: "//",
      hint: "Double slashes.",
      image: ""
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Syntax",
        "Code Styling Syntax"
      ],
      answer: "Cascading Style Sheets",
      hint: "It starts with 'Cascading'.",
      image: ""
    }
  ];
  
  // Pick 5 random questions
  function getRandomQuestions(bank, count) {
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Shuffle options
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let selectedQuestions = getRandomQuestions(questionBank, 5);
  
  // Timer
  let timeLeft = 60;
  let timerId = setInterval(updateTimer, 1000);
  
  function updateTimer() {
    const timer = document.getElementById("timer");
    if (timeLeft <= 0) {
      clearInterval(timerId);
      timer.textContent = "Time's up!";
      calculateScore();
    } else {
      timer.textContent = `Time Left: ${timeLeft}s`;
      timeLeft--;
    }
  }
  
  // Render questions
  const quizForm = document.getElementById("quiz-form");
  
  selectedQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
  
    const questionTitle = document.createElement("p");
    questionTitle.innerHTML = `<strong>${index + 1}. ${q.question}</strong>`;
    questionDiv.appendChild(questionTitle);
  
    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = "Question Image";
      questionDiv.appendChild(img);
    }
  
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
  
    const optionsShuffled = [...q.options];
    shuffleArray(optionsShuffled);
  
    optionsShuffled.forEach(option => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + option));
      optionsDiv.appendChild(label);
    });
  
    const hintButton = document.createElement("button");
    hintButton.textContent = "Show Hint";
    hintButton.className = "show-hint-btn";
    hintButton.type = "button";
  
    const hintPara = document.createElement("p");
    hintPara.className = "hint";
    hintPara.textContent = q.hint;
  
    hintButton.addEventListener("click", () => {
      hintPara.style.display = "block";
      hintButton.style.display = "none";
    });
  
    questionDiv.appendChild(optionsDiv);
    questionDiv.appendChild(hintButton);
    questionDiv.appendChild(hintPara);
  
    quizForm.appendChild(questionDiv);
  });
  
  // Submit logic
  document.getElementById("submit-btn").addEventListener("click", () => {
    clearInterval(timerId);
    calculateScore();
  });
  
  function calculateScore() {
    let score = 0;
    selectedQuestions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="question${i}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });
  
    const result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of ${selectedQuestions.length}.`;
  }
  