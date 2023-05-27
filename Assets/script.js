var timer = document.getElementById("time");
var highScore = document.getElementById("highscore");
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("start-button");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var endScreen = document.getElementById("end-screen");
var userScore = document.getElementById("user-score");
var userName = document.getElementById("user-name");
var submitButton = document.getElementById("submit-button");
var seconds = 120;
var questionIndex = 0;
var timeInterval;
var questions;
var questionIndex;

const qArr = [
  {
    ask: "What is SEO?",
    choices: [
      "Separate every organization",
      "Super energetic otters",
      "Search engine offer ",
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
];
console.log(qArr[questionIndex]);

startButton.addEventListener("click", () => {
  //   empty container
  questions.innerHTML = "";

  // create element
  const box = document.createElement("div");

  //   add class to apply properties (class should already exist in css/ can be added/modified)
  box.classList.add("dynamic-box");

  //   append the box to the questions element (the box becomes a child component to the questions component)
  questions.appendChild(box);
});

// whenever the user chooses the correct answer, you increase the question index, empty the question container, and render the following question
submitButton.addEventListener("click", () => {
  questionIndex++;
  console.log(qArr[questionIndex]);
});
