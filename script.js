//timer vars
var quizTimer = 60; 
var timerInterval;
var questionIndex = 0;
//scoring related vars
 
var score = 0;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizContent = document.querySelector("#quizContent");
var highScores = document.querySelector("#highScores");
var currentQuestion = document.createElement("p")
currentQuestion.setAttribute("id", "questions")
var listAnswers = document.createElement("ol");
listAnswers.setAttribute("id", "choices");
var listAnswerOption1 = document.createElement("li");
var listAnswerOption2 = document.createElement("li");
var listAnswerOption3 = document.createElement("li");
var listAnswerOption4 = document.createElement("li");

//Question bank
var questionBank = [
  {
    "question" : "What does HTML stand for?",
    "answers" : ["how to meet ladies","Hypertext Meta-Language", "HyperText Markup Language","Hey! That's my lettuce!"],
    "correctAnswer" : "HyperText Markup Language"
   },
  {
    "question" : "Which of the following HTML tags is self-closing",
    "answers" : ["<img>","<h1>", "<p>", "<div>"],
    "correctAnswer" : "<img>"
   },
  {
    "question" : "Whiche is the correct CSS syntax?",
    "answers" : ["{body:color=black}","{body;color:black;}", "body{color:black;}", "body:color=black;"],
    "correctAnswer" : "body{color:black;}"
     },
  
];

//begin countdown
function startTimer() {
  timerInterval = setInterval(countDown, 1000);
  quiz(event);
}

//countdown when 0 trigger quiz over
function countDown(){
  quizTimer--;
  displayCountdown.innerHTML = quizTimer;
  if(quizTimer ===0) {
    displayCountdown.parentElement.innerHTML = "TIME UP!"
    quizOver();
  }
}

//stop the timer calculate score etc...
function quizOver() {
  
  quizContent.innerHTML = "All done! <br>your score is " + score +"<br>Enter your intials<input type=\"text\"></input>";
  clearInterval(timerInterval);
 
}

//quiz questions
function quiz(event){
  if(event.target.id ==="startButton"){
  questionIndex = 0;
  score = 0;
  }
  else{
  questionIndex++;
  if(event.target.innerText === questionBank[questionIndex-1].correctAnswer ){
  score+=10;

  }
  else{
 score-=5;
 quizTimer-=10;
  }
  }
 
 if(questionIndex<questionBank.length){
  quizContent.innerHTML = "";         
  currentQuestion.innerText = questionBank[questionIndex].question;
  listAnswerOption1.innerText=questionBank[questionIndex].answers[0];
  listAnswerOption2.innerText=questionBank[questionIndex].answers[1];
  listAnswerOption3.innerText=questionBank[questionIndex].answers[2];
  listAnswerOption4.innerText=questionBank[questionIndex].answers[3];
  quizContent.appendChild(currentQuestion);
  quizContent.appendChild(listAnswers);
  listAnswers.appendChild(listAnswerOption1);
  listAnswers.appendChild(listAnswerOption2);
  listAnswers.appendChild(listAnswerOption3);
  listAnswers.appendChild(listAnswerOption4); 
}
else{
  quizOver();
}
}


startButton.addEventListener("click", startTimer);
highScores.addEventListener("click", displayHighScores);
listAnswers.addEventListener("click", quiz);


function displayHighScores(){
  alert('local storage stuff');
}
