let timeDisplay = document.querySelector(".time_display");
let startBtn = document.getElementById("btn_start");
let pauseBtn = document.getElementById("btn_pause");
let restartBtn = document.getElementById("btn_restart");

let msec = 0, sec = 0, mins = 0, hours = 0;
let timerId = null;

function updateDisplay() {
  let h = hours.toString().padStart(2, '0');
  let m = mins.toString().padStart(2, '0');
  let s = sec.toString().padStart(2, '0');
  let ms = msec.toString().padStart(3, '0'); // fixed for 000 format
  timeDisplay.textContent = `${h} : ${m} : ${s} : ${ms}`;
}

function startTimer() {
  msec++;
  if (msec === 1000) { // use 1000 for 1 second (since display shows 000)
    msec = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      mins++;
      if (mins === 60) {
        mins = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

startBtn.addEventListener("click", () => {
  if (timerId !== null) clearInterval(timerId);
  timerId = setInterval(startTimer, 1); // 1ms interval for 000 format
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);
});

restartBtn.addEventListener("click", () => {
  clearInterval(timerId);
  msec = sec = mins = hours = 0;
  updateDisplay();
});
