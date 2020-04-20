//timer vars
var quizTimer = 60;
var timerInterval;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizContent = document.querySelector("#quizContent");
var highScores = document.querySelector("#highScores");

//DOM creation vars
var challengeQuestion = document.createElement("p")
var listAnswers = document.createElement("ol");

// //Question bank
var questionBank = {
  question1:"Commonly used data types DO NOT include:",
  answers1:["strings","booleans","alerts","numbers"],
  correctAnswer1:"alerts",
  question2:"What does HTML stand for?",
  answers2:["How to meet ladies","Hypertext Markup Language","It doesn't stand for anything","Hey! That's MY lettuce!"],
  correctAnswer2:"alerts"
  };

//begin countdown
function beginQuiz() {
  timerInterval = setInterval(countDown, 1000);
  quiz();
}

//countdown by one, when 0 trigger quiz over
function countDown(){
  quizTimer--;
  displayCountdown.innerHTML = quizTimer;
  if(quizTimer ===0) {
    quizOver();
  }
}

//stop the timer calculate score etc...
function quizOver() {
  displayCountdown.innerHTML = "TIME UP!"
  quizContent.innerHTML = "All done<br>your socre is X<br>Enter your intials[  ]";
  clearInterval(timerInterval);
}

//quiz questions
function quiz(){
quizContent.innerHTML = "";
challengeQuestion.textContent="first question goes here";
listAnswers.innerHTML = "<li>first things</li><li>second thing</li>";
quizContent.appendChild(challengeQuestion);
quizContent.appendChild(listAnswers);
}


startButton.addEventListener("click", beginQuiz);
highScores.addEventListener("click", displayHighScores);





function displayHighScores(){
  alert('local storage stuff');
}


/////////////////localstorage


