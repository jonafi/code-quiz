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
  q1 : {
    "question" : "What does HTML stand for?",
    "answers" : ["how to meet ladies","HoT MaiL", "HyperText Markup Language","Hey! That's my lettuce!"],
    "correctAnswer" : "HyperText Markup Language"
   }
  
  
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
challengeQuestion.innerText = questionBank.q1.question;
listAnswerOption1.innerText=questionBank.q1.answers[0];
listAnswerOption2.innerText=questionBank.q1.answers[1];
listAnswerOption3.innerText=questionBank.q1.answers[2];
listAnswerOption4.innerText=questionBank.q1.answers[3];

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


