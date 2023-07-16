// Stopwatch elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  toggleButtons(true);
}

function stopTimer() {
  clearInterval(timerInterval);
  toggleButtons(false);
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  elapsedTime = 0;
  toggleButtons(false);
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const milliseconds = String(Math.floor(time % 1000)).padStart(3, '0');
  const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, '0');
  const hours = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function toggleButtons(running) {
  startBtn.disabled = running;
  stopBtn.disabled = !running;
  resetBtn.disabled = running;
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
