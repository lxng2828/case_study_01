class Timer {
    constructor(resultId, startBtnId, pauseBtnId, resetBtnId, counterId, countdownTime) {
        this.result = document.getElementById(resultId);
        this.startBtn = document.getElementById(startBtnId);
        this.pauseBtn = document.getElementById(pauseBtnId);
        this.resetBtn = document.getElementById(resetBtnId);
        this.counter = document.getElementById(counterId);

        this.countdownTime = countdownTime * 60;
        this.countdownLeft = this.countdownTime;
        this.interval = null;
        this.running = false;
        this.cycleCount = 0;

        this.startBtn.addEventListener("click", this.start.bind(this));
        this.pauseBtn.addEventListener("click", this.stop.bind(this));
        this.resetBtn.addEventListener("click", this.reset.bind(this));

        this.updateUI();
    }

    start() {
        if (this.running) return;
        this.running = true;

        this.interval = setInterval(function() {
            if (this.countdownLeft > 0) {
                this.countdownLeft--;
                this.updateUI();
            } else {
                this.stop();
                console.log("Time's up!");
                new Audio("./assets/bell.mp3").play();
                this.cycleCount++;
                this.updateUI();
            }
        }.bind(this), 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.running = false;
    }

    reset() {
        this.stop();
        this.countdownLeft = this.countdownTime;
        this.updateUI();
    }

    updateUI() {
        let minutes = Math.floor(this.countdownLeft / 60);
        let seconds = this.countdownLeft % 60;
        if (seconds < 10) {
            this.result.value = `${minutes}:0${seconds}`;
        } else {
            this.result.value = `${minutes}:${seconds}`;
        }
        if (seconds < 10) {
            this.result.value = `${minutes}:0${seconds}`;
        } else {
            this.result.value = `${minutes}:${seconds}`;
        }
        this.counter.innerText = this.cycleCount;
    }
}

export default Timer;