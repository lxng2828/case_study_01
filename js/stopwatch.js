class Stopwatch {
    constructor(startBtnId, pauseBtnId, resetBtnId, lapBtnId, displayId, lapsId) {
        this.startBtn = document.getElementById(startBtnId);
        this.pauseBtn = document.getElementById(pauseBtnId);
        this.resetBtn = document.getElementById(resetBtnId);
        this.lapBtn = document.getElementById(lapBtnId);
        this.display = document.getElementById(displayId);
        this.lapsContainer = document.getElementById(lapsId);

        this.timerCount = 0;
        this.interval = null;
        this.running = false;
        this.laps = [];

        this.startBtn.addEventListener("click", this.start.bind(this));
        this.pauseBtn.addEventListener("click", this.pause.bind(this));
        this.resetBtn.addEventListener("click", this.reset.bind(this));
        this.lapBtn.addEventListener("click", this.recordLap.bind(this));

        this.updateDisplay();
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.interval = setInterval(function () {
                this.timerCount++;
                this.updateDisplay();
            }.bind(this), 1000);
        }
    }

    pause() {
        if (this.running) {
            clearInterval(this.interval);
            this.running = false;
        }
    }

    reset() {
        this.pause();
        this.timerCount = 0;
        this.laps = [];
        this.lapsContainer.innerHTML = "";
        this.updateDisplay();
    }

    recordLap() {
        if (!this.running) return;

        let lapTime = this.formatTime(this.timerCount);
        this.laps.push(lapTime);

        let lapsContent = this.lapsContainer.innerHTML;
        lapsContent = lapsContent + `<p>Lap ${this.laps.length}: ${lapTime}</p>`;
        this.lapsContainer.innerHTML = lapsContent;
    }

    updateDisplay() {
        this.display.innerText = this.formatTime(this.timerCount);
    }

    formatTime(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        return `${hours}:${minutes}:${remainingSeconds}`;
    }
}

export default Stopwatch;

