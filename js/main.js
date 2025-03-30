import Timer from "./timer.js";
import TimerManager from "./timermanager.js";


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("settings-btn").addEventListener("click", () => {

        let buttons = document.querySelectorAll("#menu button");
        let timers = document.querySelectorAll(".timer");

        for (let button of buttons) {
            button.addEventListener("click", () => {
                for (let timer of timers) {
                    timer.style.display = "none";
                }
                let targetId = button.id.replace("-btn", "");
                document.getElementById(targetId).style.display = "flex";
            });
        }


        let pomodoroDuration = parseInt(document.getElementById("pomodoro-ds").value) * 60;
        let shortbreakDuration = parseInt(document.getElementById("shortbreak-ds").value * 60);
        let longbreakDuration = parseInt(document.getElementById("longbreak-ds").value) * 60;

        let pomodoro = new Timer(pomodoroDuration);
        new TimerManager("pomodoro-duration", "pomodoro-start-btn", "pomodoro-pause-btn", "pomodoro-reset-btn", pomodoro);

        let shortbreak = new Timer(shortbreakDuration);
        new TimerManager("shortbreak-duration", "shortbreak-start-btn", "shortbreak-pause-btn", "shortbreak-reset-btn", shortbreak);


        let longbreak = new Timer(longbreakDuration);
        new TimerManager("longbreak-duration", "longbreak-start-btn", "longbreak-pause-btn", "longbreak-reset-btn", longbreak);





    })


});