let stopBtn = document.getElementById("stopButton");
let readyBtn = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let stopLightTraffic = document.getElementById("stopLight");
let readyLightTraffic = document.getElementById("readyLight");
let goLightTraffic = document.getElementById("goLight");



function applyColor(color) {
    stopLightTraffic.style.backgroundColor = "#3a3a3a";
    readyLightTraffic.style.backgroundColor = "#3a3a3a";
    goLightTraffic.style.backgroundColor = "#3a3a3a";

    if (color === "red") {
        stopLightTraffic.style.backgroundColor = "red";
    }
    else if (color === "yellow") {
        readyLightTraffic.style.backgroundColor = "yellow";
    }
    else if (color === "green") {
        goLightTraffic.style.backgroundColor = "green";
    }

    localStorage.setItem("color", color);
}



window.addEventListener("DOMContentLoaded", function() {
    let savedColor = localStorage.getItem("color");
    if (savedColor) {
        applyColor(savedColor);
    }
})


stopBtn.addEventListener("click", () => applyColor("red"));
readyBtn.addEventListener("click", () => applyColor("yellow"));
goButton.addEventListener("click", () => applyColor("green"));