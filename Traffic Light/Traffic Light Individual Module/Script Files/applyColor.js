

function applyColor(color) {
    
    let stopLightTraffic = document.getElementById("stopLight");
    let readyLightTraffic = document.getElementById("readyLight");
    let goLightTraffic = document.getElementById("goLight");

    
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


export { applyColor }; 