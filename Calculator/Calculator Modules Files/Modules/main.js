

import { calculations   } from "./calcuations.js";


let displayEl = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculations(button, displayEl);
    });
});