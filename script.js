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
challengeQuestion.setAttribute("id", "questions")
var listAnswers = document.createElement("ol");
listAnswers.setAttribute("id", "choices");
var listAnswerOption1 = document.createElement("li");
var listAnswerOption2 = document.createElement("li");
var listAnswerOption3 = document.createElement("li");
var listAnswerOption4 = document.createElement("li");

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
challengeQuestion.innerText ="why is an orange?";
listAnswerOption1.innerText="because";
listAnswerOption2.innerText="why not?";
listAnswerOption3.innerText="ask your mom"
listAnswerOption4.innerText="herman";

 quizContent.appendChild(challengeQuestion);
 quizContent.appendChild(listAnswers);
 listAnswers.appendChild(listAnswerOption1);
 listAnswers.appendChild(listAnswerOption2);
 listAnswers.appendChild(listAnswerOption3);
 listAnswers.appendChild(listAnswerOption4);

}


startButton.addEventListener("click", beginQuiz);
highScores.addEventListener("click", displayHighScores);





function displayHighScores(){
  alert('local storage stuff');
}


/////////////////localstorage


