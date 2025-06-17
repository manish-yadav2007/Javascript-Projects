import { applyColor  } from "./applyColor.js";





let stopBtn = document.getElementById("stopButton");
let readyBtn = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");











stopBtn.addEventListener("click", () => applyColor("red")); 
readyBtn.addEventListener("click", () => applyColor("yellow")); 
goButton.addEventListener("click", () => applyColor("green")); 