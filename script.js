let [hour, minute, second, millisecond] = [0, 0, 0, 0];
let timer = null;

function updateDisplay() {
    document.getElementById('hours').innerText = hour.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minute.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = second.toString().padStart(2, '0');
    document.getElementById('milliseconds').innerText = millisecond.toString().padStart(2, '0');
}

function stopwatch() {
    millisecond++;
    if (millisecond == 100) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    updateDisplay();
}

function startStop() {
    if (timer !== null) return; // Prevent multiple intervals
    timer = setInterval(stopwatch, 10);
}

function pauseStop() {
    clearInterval(timer);
    timer = null;
}

function resetStop() {
    clearInterval(timer);
    timer = null;
    [hour, minute, second, millisecond] = [0, 0, 0, 0];
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function lapStop() {
    let lapTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${millisecond.toString().padStart(2, '0')}`;
    let lapList = document.getElementById('laps');
    let newLap = document.createElement('li');
    newLap.innerText = lapTime;
    lapList.appendChild(newLap);
}

updateDisplay();