import Timer from "./timer.js";
import Stopwatch from "./stopwatch.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("settings-btn").addEventListener("click", function () {

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

        let pomodoroDuration = parseInt(document.getElementById("pomodoro-ds").value) || 25;
        let shortbreakDuration = parseInt(document.getElementById("shortbreak-ds").value) || 5;
        let longbreakDuration = parseInt(document.getElementById("longbreak-ds").value) || 15;

        let pomodoro = new Timer("pomodoro-duration", "pomodoro-start-btn", "pomodoro-pause-btn", "pomodoro-reset-btn", "pomodoro-c", pomodoroDuration);
        let shortbreak = new Timer("shortbreak-duration", "shortbreak-start-btn", "shortbreak-pause-btn", "shortbreak-reset-btn", "shortbreak-c", shortbreakDuration);
        let longbreak = new Timer("longbreak-duration", "longbreak-start-btn", "longbreak-pause-btn", "longbreak-reset-btn", "longbreak-c", longbreakDuration);

        let stopwatch = new Stopwatch("startBtn", "pauseBtn", "resetBtn", "lapBtn", "display", "laps");
    });
});

