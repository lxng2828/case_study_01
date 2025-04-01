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

        this.updateUI();
    }

    start() {
        if (this.running) {
            return;
        }
        this.running = true;
        this.interval = setInterval(function () {
            this.timerCount++;
            this.updateUI();
        }.bind(this), 1000);
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
        this.updateUI();
    }

    recordLap() {
        if (!this.running) return;

        let lapTime = this.formatTime(this.timerCount);
        this.laps.push(lapTime);

        let lapsContent = this.lapsContainer.innerHTML;
        lapsContent = lapsContent + `<p>Lap ${this.laps.length}: ${lapTime}</p>`;
        this.lapsContainer.innerHTML = lapsContent;
    }

    updateUI() {
        this.display.innerText = this.formatTime(this.timerCount);
    }

    formatTime(seconds) {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return `${h}:${m}:${s}`;
    }
}

export default Stopwatch;

