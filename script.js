//start timer
var quizTimer = 60;
var timerInterval;

function setTime() {
  timerInterval = setInterval(countDown, 50);
}

function countDown(){
  quizTimer--;
  //console.log(quizTimer);
  if(quizTimer ===0) {
      quizOver();
  }
}

function quizOver() {
 alert('time up!')
 clearInterval(timerInterval);
}

setTime();

//localstorage


//DOM manipulation