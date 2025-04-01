import Timer from "./timer.js";
import Stopwatch from "./stopwatch.js";

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("#menu button");
    let timers = document.querySelectorAll(".timer");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            for (let timer of timers) {
                timer.style.display = "none";
            }
            let targetId = button.id.replace("-btn", "");
            document.getElementById(targetId).style.display = "flex";
        });
    }
    let pomodoro = new Timer("pomodoro-duration", "pomodoro-start-btn", "pomodoro-pause-btn", "pomodoro-reset-btn", "pomodoro-c", 25);
    let shortbreak = new Timer("shortbreak-duration", "shortbreak-start-btn", "shortbreak-pause-btn", "shortbreak-reset-btn", "shortbreak-c", 5);
    let longbreak = new Timer("longbreak-duration", "longbreak-start-btn", "longbreak-pause-btn", "longbreak-reset-btn", "longbreak-c", 15);

    let stopwatch = new Stopwatch("startBtn", "pauseBtn", "resetBtn", "lapBtn", "display", "laps");

    document.getElementById("settings-btn").addEventListener("click", function () {



        let pomodoroDuration = parseInt(document.getElementById("pomodoro-ds").value);
        let shortbreakDuration = parseInt(document.getElementById("shortbreak-ds").value);
        let longbreakDuration = parseInt(document.getElementById("longbreak-ds").value);

        pomodoro = new Timer("pomodoro-duration", "pomodoro-start-btn", "pomodoro-pause-btn", "pomodoro-reset-btn", "pomodoro-c", pomodoroDuration);
        shortbreak = new Timer("shortbreak-duration", "shortbreak-start-btn", "shortbreak-pause-btn", "shortbreak-reset-btn", "shortbreak-c", shortbreakDuration);
        longbreak = new Timer("longbreak-duration", "longbreak-start-btn", "longbreak-pause-btn", "longbreak-reset-btn", "longbreak-c", longbreakDuration);

        stopwatch = new Stopwatch("startBtn", "pauseBtn", "resetBtn", "lapBtn", "display", "laps");
    });
});

