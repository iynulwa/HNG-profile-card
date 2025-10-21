// CLOCK
const timeElement = document.getElementById('clock');

function updateTime() {
  var currentTime = Date.now();
  timeElement.innerText = currentTime;
}

updateTime();

setInterval(updateTime, 1000);