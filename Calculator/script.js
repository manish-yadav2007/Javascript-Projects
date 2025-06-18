let displayEl = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");


let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equal");



// Async arithmetic evaluation
let arthimaticCalculation = async (expression) => {
    return new Promise((resolve, reject) => {
        try {
            let result = eval(expression);  
            resolve(result);
        } catch (err) {
            reject("Invalid Expression");
        } 
    });
};

// Main logic
let calculations = async (button) => {
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

// Button event binding
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculations(button);
    });
});
