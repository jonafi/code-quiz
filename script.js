//timer vars
var quizTimer = 60;
var timerInterval;

//DOM manipulation vars
var displayCountdown = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");

//begin countdown
function beginQuiz() {
timerInterval = setInterval(countDown, 50);
}

//countdown by one, when 0 trigger quiz over
function countDown(){
quizTimer--;
displayCountdown.innerHTML = quizTimer;
//console.log(quizTimer);
if(quizTimer ===0) {
quizOver();
}
}

//stop the timer calculate score etc...
function quizOver() {
  displayCountdown.innerHTML = "TIME UP!"
  clearInterval(timerInterval);

}


addEventListener("click", beginQuiz)







/////////////////localstorage


