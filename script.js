var quizTimer = 60; 
var timerInterval;
var questionIndex = 0;
var score = 0;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizContent = document.querySelector("#quizContent");
var playAgain = document.querySelector("#playAgain");


var highScores = document.querySelector("#highScores");
var topScores = document.querySelector("#topScores");
var scoresView = document.querySelector("#scores");
var submitScore = document.querySelector("#submitHighScore");
var intials = document.querySelector("#initals");
var currentQuestion = document.createElement("p");
var scoreEntry = document.createElement("p");
scoreEntry.setAttribute("class", "scoreEntry");


currentQuestion.setAttribute("id", "questions");
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
    "question" : "Which is the correct CSS syntax?",
    "answers" : ["{body:color=black}","{body;color:black;}", "body{color:black;}", "body:color=black;"],
    "correctAnswer" : "body{color:black;}"
     },
  {
    "question" : "How do you insert a comment in a CSS file?",
    "answers" : ["//this is a comment", "//this is a comment//", "/* this is a comment */", "'this is a comment"],
    "correctAnswer" : "/* this is a comment */"
     },
     {
      "question" : "What is the correct syntax for referring to an external script called \"xxx.js\"?",
      "answers" : ["<script name =\"xxx.js\">", "<script src =\"xxx.js\">", "<script href =\"xxx.js\">", "<script location =\"xxx.js\">"],
      "correctAnswer" : "<script src =\"xxx.js\">"
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
  //TO DO clean up this section, maybe with a block of hidden HTML and a class change
  quizContent.innerHTML = 'All done! <br>Your score is ' + score + '<br>Enter your intials ' +
  '<input type="text" id="initials"><br><br>' +
  '<input type="submit" id="submitHighScore">';

  submitHighScore.addEventListener("click", addHighScore);
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
   alert('CORRECT!');
  }
  else{
  quizTimer-=10;
  alert('INCORRECT!');
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

function addHighScore(event){
  event.preventDefault();
  localStorage.setItem(document.querySelector("#initials").value, score);
  displayHighScores();
  
  }

function displayHighScores(){
  clearInterval(timerInterval);
  quizContent.innerHTML="";
  scoresView.setAttribute("style", "display:block");
  var scoreArray=[];
 
    for (let [key, value] of Object.entries(localStorage)) {
    scoreArray.push(("0" + value).slice(-2) + "  " + key.toUpperCase().substring(0,3) +"\n")
    scoreArray = scoreArray.sort().reverse();
     
    }

    for (let i=0; i<scoreArray.length; i++){
      topScores.appendChild(scoreEntry); 
     // scoreEntry.innerText=scoreArray[i];
     //could not figure out how to cyle through values :(
      scoreEntry.innerText=scoreArray;
    }
  
   

}

function reloadPage(){
  location.reload();
}

startButton.addEventListener("click", startTimer);
highScores.addEventListener("click", displayHighScores);
listAnswers.addEventListener("click", quiz);
playAgain.addEventListener("click", reloadPage);

