import Timer from "./timer.js";
import TimerManager from "./timermanager.js";


document.addEventListener("DOMContentLoaded", () => {
    let timer = new Timer(1500);
    new TimerManager("result", "start-btn", "pause-btn", "reset-btn", timer);
});