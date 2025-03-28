import Timer from "./timer.js";
import TimerManager from "./timermanager.js";


document.addEventListener("DOMContentLoaded", () => {

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



    let pomodoro = new Timer(1500);
    new TimerManager("pomodoro-duration", "pomodoro-start-btn", "pomodoro-pause-btn", "pomodoro-reset-btn", pomodoro);

    let shortbreak = new Timer(300);
    new TimerManager("shortbreak-duration", "shortbreak-start-btn", "shortbreak-pause-btn", "shortbreak-reset-btn", shortbreak);


    let longbreak = new Timer(900);
    new TimerManager("longbreak-duration", "longbreak-start-btn", "longbreak-pause-btn", "longbreak-reset-btn", longbreak);
});