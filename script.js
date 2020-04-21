//timer vars
var quizTimer = 6; 
var timerInterval;

//scoring related vars
var questionIndex = 0;  
var score = 0;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizContent = document.querySelector("#quizContent");
var highScores = document.querySelector("#highScores");
var challengeQuestion = document.createElement("p")
challengeQuestion.setAttribute("id", "questions")
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
    "answers" : ["how to meet ladies","HoT MaiL", "HyperText Markup Language","Hey! That's my lettuce!"],
    "correctAnswer" : "HyperText Markup Language"
   },
  {
    "question" : "what is question 2 all about?",
    "answers" : ["question 2","22222", "ham", "not question 2"],
    "correctAnswer" : "ham"
   },
  {
    "question" : "3, thrird question?",
    "answers" : ["333","tres", "drei", "three"],
    "correctAnswer" : "three"
   }
  
];

//begin countdown
function beginQuiz() {
  timerInterval = setInterval(countDown, 1000);
  quiz(event);
}

//countdown when 0 trigger quiz over
function countDown(){
  quizTimer--;
  displayCountdown.innerHTML = quizTimer;
  if(quizTimer ===0) {
    quizOver();
  }
}

//stop the timer calculate score etc...
function quizOver() {
  displayCountdown.parentElement.innerHTML = "TIME UP!"
  quizContent.innerHTML = "All done<br>your socre is X<br>Enter your intials[  ]";
  clearInterval(timerInterval);
}

//quiz questions
function quiz(event){
  if(event.target.id !=="startButton"){//if its not the first question calculate points and stuff
    
  }
  quizContent.innerHTML = "";         
  challengeQuestion.innerText = questionBank[questionIndex].question;
  listAnswerOption1.innerText=questionBank[questionIndex].answers[0];
  listAnswerOption2.innerText=questionBank[questionIndex].answers[1];
  listAnswerOption3.innerText=questionBank[questionIndex].answers[2];
  listAnswerOption4.innerText=questionBank[questionIndex].answers[3];
  quizContent.appendChild(challengeQuestion);
  quizContent.appendChild(listAnswers);
  listAnswers.appendChild(listAnswerOption1);
  listAnswers.appendChild(listAnswerOption2);
  listAnswers.appendChild(listAnswerOption3);
  listAnswers.appendChild(listAnswerOption4);
  questionIndex++; 
  
    
}


startButton.addEventListener("click", beginQuiz);
highScores.addEventListener("click", displayHighScores);
listAnswers.addEventListener("click", quiz);


function displayHighScores(){
  alert('local storage stuff');
}
