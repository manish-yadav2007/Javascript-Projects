import { arthimaticCalculation } from "./arthmeticCalculations.js";



// Main logic

let calculations = async (button, displayEl) => {
    let buttonValue = button.textContent;

    if (buttonValue === "C") {
        displayEl.value = "";
    } else if (buttonValue === "DEL") {
        displayEl.value = displayEl.value.slice(0, -1);
    } else if (buttonValue === "=") {
        try {
            let result = await arthimaticCalculation(displayEl.value);
            displayEl.value = result;
        } catch (error) {
            displayEl.value = error;
        }
    } else {
        displayEl.value += buttonValue;
    }
};

export { calculations };