//start timer
var quizTimer = 2;

function setTime() {
  var timerInterval = setInterval(function() {
    quizTimer--;
    console.log(quizTimer);

    if(quizTimer === 0) {
      clearInterval(timerInterval);
      quizOver();
    }

  }, 1000);
}





function quizOver() {
 alert('time up!')
}

setTime();

//localstorage


//DOM manipulation