var timer = document.getElementById("time");
var highScore = document.getElementById("highscore");
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
var seconds = 120;
var questionIndex = 0;
var timeInterval;
var questionIndex;

const qArr = [
  {
    ask: "What is SEO?",
    choices: [
      "Separate every organization",
      "Super energetic otters",
      "Search engine authorization",
      "Search engine optimization",
    ],
    answer: "Search engine optimization",
  },
  {
    ask: "Which CSS property allows you to center a h1 element",
    choices: ["justify-content", "align-items", "align-content", "text-align"],
    answer: "text-align",
  },
  {
    ask: "Which one of these choices is === to '100'",
    choices: [100, "one hundred", 50 * 2, "100"],
    answer: "100",
  },
  {
    ask: "Which syntax is used to hold data in an array in Javascript?",
    choices: ["()", "[]", "{}", "<>"],
    answer: "[]",
  },
];
console.log(qArr[questionIndex]);
// on start button click: starts timer & hides start page while showing questions.
startButton.addEventListener("click", function () {
  timeInterval = setInterval(() => {
    seconds = seconds - 1;
    timer.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  startPage.setAttribute("class", "hidden");
  hero.setAttribute("class", "hidden");
  quiz.removeAttribute("class", "hidden");
  generateQuiz();
});
// create element
function generateQuiz() {
  var currentQuestion = qArr[questionIndex];
  questions.textContent = currentQuestion;
  currentQuestion.choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("value", choice);
    Options.append(choiceButton);
  });
}
//   add class to apply properties (class should already exist in css/ can be added/modified)
box.classList.add("dynamic-box");

//   append the box to the questions element (the box becomes a child component to the questions component)

// whenever the user chooses the correct answer, you increase the question index, empty the question container, and render the following question
submitButton.addEventListener("click", () => {
  questionIndex++;
  console.log(qArr[questionIndex]);
});
