const scoreContainer = document.querySelector(".score span");
const question = document.querySelector(".question");
const suggestions = document.querySelector(".suggestions ol");
const questionState = document.querySelector(".question-state");
const valid = document.querySelector(".valid");
const field = document.querySelector(".field input");


const questions = [
  {
    question: "What does HTML stand for?",
    suggestions: {
      a: "Hyper Tech Markup Language",
      b: "HyperText Markup Language",
      c: "HighText Markup Language",
      d: "None of the above",
    },
    correct_answer: "b",
  },
  {
    question: "What symbol is used in Python to indicate a comment?",
    suggestions: {
      a: "$",
      b: "#",
      c: "&",
      d: "None of the above",
    },
    correct_answer: "b",
  },
  {
    question:
      "What is the name of the loop structure in Python that continues until a condition is false?",
    suggestions: {
      a: "finite loop",
      b: "while loop",
      c: "infinite loop",
      d: "None of the above",
    },
    correct_answer: "b",
  },
  {
    question: "What does CSS stand for?",
    suggestions: {
      a: "Class Style Sheets",
      b: "Cascading Style Sheets",
      c: "copy Style Sheets",
      d: "None of the above",
    },
    correct_answer: "b",
  },
  {
    question:
      "Which of the following is not a programming language: Python, Java, HTML, Linux?",
    suggestions: {
      a: "Python",
      b: "Java",
      c: "HTML",
      d: "Linux",
    },
    correct_answer: "d",
  },
  {
    question: "Which keyword in Java is used to inherit a class?",
    suggestions: {
      a: "require",
      b: "super",
      c: "extends",
      d: "None of the above",
    },
    correct_answer: "c",
  },
  {
    question:
      "In SQL, which command is used to remove all records from a table but not the table itself?",
    suggestions: {
      a: "TRUNCATE",
      b: "SELECT",
      c: "JOIN",
      d: "None of the above",
    },
    correct_answer: "a",
  },
  {
    question: "What does the acronym JSON stand for?",
    suggestions: {
      a: "Java Object Notation",
      b: "Join Object Notation",
      c: "JavaScript Object Notation",
      d: "None of the above",
    },
    correct_answer: "c",
  },
  {
    question:
      "What is the time complexity of a binary search algorithm in a sorted array?",
    suggestions: {
      a: "O(log n)",
      b: "O(nlog n)",
      c: "O(log n2)",
      d: "None of the above",
    },
    correct_answer: "a",
  },
  {
    question:
      "What is the name of the data structure that follows the Last In First Out (LIFO) principle?",
    suggestions: {
      a: "array",
      b: "Queue",
      c: "list",
      d: "Stack",
    },
    correct_answer: "d",
  },
];

let score = 0;
let index = 0;

function loadQuestion() {
  if (index < questions.length) {
    question.textContent = `${index + 1} - ${questions[index]["question"]}`;
    Object.keys(questions[index]["suggestions"]).forEach((k) => {
      let li = document.createElement("li");
      li.setAttribute("data-key", k);
      let span = document.createElement("span");
      let spanText = document.createTextNode(
        `${k.toUpperCase()} - ${questions[index]["suggestions"][k]}`
      );
      span.appendChild(spanText);
      li.appendChild(span);
      suggestions.appendChild(li);
      field.focus();
      });
      //console.log(Array.from(suggestions.children));
      clickAnswer(Array.from(suggestions.children));

  } else {
    question.textContent = "Game Over!";
    suggestions.textContent = "";
    questionState.textContent = "";
    scoreContainer.textContent = `Finale Score: ${score}/${index}`;
    valid.setAttribute("disabled", "disabled");
  }
}

function submitAnswer() {
  let userAnswer = field.value;
  let correctAnswer = questions[index]["correct_answer"];
  if (userAnswer == "") {
    return;
  }
  if (userAnswer.toLowerCase() == correctAnswer.toLocaleLowerCase()) {
    score += 1;
    scoreContainer.textContent = `Score: ${score}`;
    questionState.textContent = "Correct!";
  } else {
    questionState.textContent = `Incorrect!,\nCorrect Answer is ${correctAnswer}`;
  }
  field.value = "";
  suggestions.innerHTML = "";
  index += 1;
  loadQuestion();
}

function clickAnswer(lists) {
    lists.forEach(list => {
        list.addEventListener("click", function () {
            let userAnswer = this.dataset.key;
            let correctAnswer = questions[index]["correct_answer"];
            if (userAnswer == "") {
              return;
            }
            if (userAnswer.toLowerCase() == correctAnswer.toLocaleLowerCase()) {
              score += 1;
              scoreContainer.textContent = `Score: ${score}`;
              questionState.textContent = "Correct!";
            } else {
              questionState.textContent = `Incorrect!,\nCorrect Answer is ${correctAnswer}`;
            }
            suggestions.innerHTML = "";
            index += 1;
            loadQuestion();
          });
    })
}

loadQuestion();
valid.addEventListener("click", submitAnswer);
