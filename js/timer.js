class Timer {
    constructor(countdownTime) {
        this.countdownTime = countdownTime;
        this.countdownLeft = countdownTime;
        this.interval = null;
    }
    start(updateFunction) {
        if (this.interval) {
            return;
        }

        this.interval = setInterval(() => {
            if (this.countdownLeft > 0) {
                this.countdownLeft--;
                console.log(this.countdownLeft)
                updateFunction(this.countdownLeft);
            } else {
                this.stop();
                console.log("timesup!");
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.interval = null;
        console.log("stop")
    }
    reset(updateFunction) {
        this.stop();
        this.countdownLeft = this.countdownTime;
        updateFunction(this.countdownLeft);
        console.log("reset")
    }
}

export default Timer;