window.onload = function() {
    var second = 0;
var minute = 0;
var appendSeconds = document.getElementById("Seconds");
var appendMinutes = document.getElementById("Minutes");
var startbutton = document.getElementById("Start-button");
var stopbutton = document.getElementById("Stop-button");
var resetbutton = document.getElementById("Reset-button");
var Interval;

startbutton.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
}
stopbutton.onclick = function() {
    clearInterval(Interval);
}
resetbutton.onclick = function() {
    clearInterval(Interval);
    second = "00";
    minute = "00";
    appendSeconds.innerHTML = second;
    appendMinutes.innerHTML = minute;
}

function startTimer() {
    second++;
    if (second <= 9) {
        appendSeconds.innerHTML = "0" + second;
    }

    if (second > 9 && second < 60) {
        appendSeconds.innerHTML = second;
    }

    if (second >= 60) {
        minute++;
        appendMinutes.innerHTML = "0" + minute;
        second = 0;
        appendSeconds.innerHTML = "0" + second;
    }
    
    if (minute > 9){
        appendMinutes.innerHTML = minute;
      }
}
}