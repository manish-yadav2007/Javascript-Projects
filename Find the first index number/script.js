let userInputEl = document.getElementById("userInput");
let findButton = document.getElementById("findBtn");
let indexOfNumberEl = document.getElementById("indexOfNumber");


let numbers = [17, 31, 77, 20, 63];



findButton.addEventListener("click", () => {
    let userEnteredValue = parseInt(userInputEl.value);

    let findIndexValue = numbers.findIndex((element) => {
        if (userEnteredValue == element) {
            return true; 
        }
    })


    indexOfNumberEl.innerHTML = findIndexValue; 



})