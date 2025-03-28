class Timer {
    constructor(countdownTime) {
        this.countdownTime = countdownTime;
        this.countdownLeft = countdownTime;
        this.interval = null;
    }
    start() {
        if (this.interval) {
            return;
        }

        this.interval = setInterval(() => {
            if (this.countdownLeft > 0) {
                this.countdownLeft--;
                console.log(this.countdownLeft)
                updateCallback(this.countdownLeft);
            } else {
                this.stop();
                console.log("Time's up!");
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.interval = null;
        console.log("da dung roi")
    }
    reset() {
        this.stop();
        this.countdownLeft = countdownTime;
        updateCallback(this.countdownLeft);
    }
}

export default Timer;