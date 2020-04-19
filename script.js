//timer vars
var quizTimer = 60;
var timerInterval;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizContent = document.querySelector("#quizContent");

//begin countdown
function beginQuiz() {
timerInterval = setInterval(countDown, 50);
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

quizContent.innerHTML = "question 1: why is an orange"; 
}

startButton.addEventListener("click", beginQuiz)







/////////////////localstorage


