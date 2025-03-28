import Timer from "./timer.js";

class TimerManager {
    constructor(resultId, startBtnId, pauseBtnId, resetBtnId, timer) {
        this.result = document.getElementById(resultId);
        this.startBtn = document.getElementById(startBtnId);
        this.pauseBtn = document.getElementById(pauseBtnId);
        this.resetBtn = document.getElementById(resetBtnId);
        this.timer = timer;
        this.formattedTime = "";

        this.startBtn.addEventListener("click", () => this.timer.start(this.updateTimer.bind(this)));
        this.pauseBtn.addEventListener("click", () => this.timer.stop());
        this.resetBtn.addEventListener("click", () => this.timer.reset(this.updateTimer.bind(this)));

        this.updateTimer(this.timer.countdownLeft); // Hiển thị thời gian ban đầu
    }


    updateTimer(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;
        if (secs < 10) {
            this.result.value = `${minutes}:0${secs}`;
        } else {
            this.result.value = `${minutes}:${secs}`;
        }
    }
}

export default TimerManager;
