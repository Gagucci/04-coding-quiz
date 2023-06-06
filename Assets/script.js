var timer = document.getElementById("time");
var highScore = document.getElementById("highscore-screen");
var hsList = document.getElementById("highscore-list");
var hsButton = document.getElementById("highscore-button");
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("start-button");
var hero = document.getElementById("hero");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var endScreen = document.getElementById("end-screen");
var userScore = document.getElementById("user-score");
var userName = document.getElementById("user-name");
var submitButton = document.getElementById("submit-button");
var restartButton = document.getElementById("restart-button");
var seconds = 120;
var questionIndex = 0;
var questionIndex;
var timeInterval;

// array that holds objects with questions, choices, and answers
const qArr = [
  {
    ask: "What is SEO?",
    choices: [
      "Separate every organization",
      "Super energetic otters",
      "Search engine optimization",
      "Search engine authorization",
    ],
    answer: "Search engine optimization",
  },
  {
    ask: "Which CSS property allows you to center a h1 element",
    choices: ["justify-content", "align-items", "align-content", "text-align"],
    answer: "text-align",
  },
  {
    ask: "Which one of these choices is === to '100' in Javascript?",
    choices: ["'100'", "100", "50 * 2", "one hundred"],
    answer: "100",
  },
  {
    ask: "Which syntax is used to hold data in an array in Javascript?",
    choices: ["()", "[]", "{}", "<>"],
    answer: "[]",
  },
  {
    ask: "When put in local storage, what type is all data stored as?",
    choices: ["numbers", "objects", "strings", "arrays"],
    answer: "strings",
  },
];

// initalizes local storage
(function initLS() {
  // find an item in LS with the name of 'highscores'
  var dataFromLS = JSON.parse(localStorage.getItem("highscores"));
  // if that item doesn't exist, we create it and store it in LS under the name 'highscores'
  if (!dataFromLS) {
    localStorage.setItem("highscores", JSON.stringify({}));
  }
})();

// on submit button click: store user name and score in local storage and display on high score screen while preventing default refresh
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var dataFromLS = JSON.parse(localStorage.getItem("highscores"));
  dataFromLS[userName.value] = seconds;
  localStorage.setItem("highscores", JSON.stringify(dataFromLS));
  highScore.removeAttribute("class", "hidden");
  endScreen.setAttribute("class", "hidden");
  // for each key in the dataFromLS object, create a new li and append it to the high score screen
  for (var key in dataFromLS) {
    var newLi = document.createElement("li");
    newLi.textContent = key + ": " + dataFromLS[key];
    hsList.appendChild(newLi);
  }
});

// on restart button click: reset timer, question index, and show start page while hiding highscore screen
restartButton.addEventListener("click", function () {
  seconds = 120;
  questionIndex = 0;
  highScore.setAttribute("class", "hidden");
  hero.removeAttribute("class", "hidden");
  hero.setAttribute("class", "hero");
  startPage.removeAttribute("class", "hidden");
  timer.textContent = seconds;
});

// Function that generates questions with answers on screen.
function generateQuiz() {
  answers.innerHTML = "";
  var activeQue = qArr[questionIndex];
  questions.textContent = activeQue.ask;
  quiz.classList.add("questions");
  for (let i = 0; i < activeQue.choices.length; i++) {
    var currentChoice = activeQue.choices[i];
    var queButton = document.createElement("button"); // create the button element
    queButton.innerText = currentChoice; // for each answer after we create the button, we give the button a text value of either answer 1, 2,3 or 4
    answers.classList.add("answers");
    answers.appendChild(queButton);

    //removes seconds from clock if incorrect answer is chosen
    queButton.addEventListener("click", function () {
      if (this.innerText != activeQue.answer) {
        seconds -= 5;
        this.style.color = "#ED5347";
      } else {
        // whenever the user chooses the correct answer, you increase the question index, empty the question container, and render the following question
        questionIndex++;
        // on final question being answered correctly, hide the quiz and show the end screen, and stop the timer.
        if (questionIndex === 5 && this.innerText === activeQue.answer) {
          clearInterval(timeInterval);
          quiz.setAttribute("class", "hidden");
          endScreen.removeAttribute("class", "hidden");
          endScreen.setAttribute("class", "end-screen");
          userScore.textContent = seconds;
        } else {
          generateQuiz();
        }
      }
    });
  }
}
// on start button click: starts timer & hides start page while showing questions.
startButton.addEventListener("click", function () {
  timeInterval = setInterval(() => {
    seconds = seconds - 1;
    timer.textContent = seconds;
    // if timer reaches 0, hide quiz and show end screen
    if (seconds <= 0) {
      seconds = 0;
      clearInterval(timeInterval);
      quiz.setAttribute("class", "hidden");
      endScreen.removeAttribute("class", "hidden");
      //store time in local storage and display on end screen
      localStorage.setItem("highscores", seconds);
      userScore.textContent = seconds;
    }
    timer.textContent = seconds;
  }, 1000);
  startPage.setAttribute("class", "hidden");
  hero.setAttribute("class", "hidden");
  quiz.removeAttribute("class", "hidden");
  generateQuiz();
});
