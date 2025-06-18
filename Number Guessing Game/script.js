let userInputEl = document.getElementById("userInput");
let outputCheckBtnEl = document.getElementById("outputCheckBtn");
let gameResultEl = document.getElementById("gameResult");
let difficultySelectEl = document.getElementById("difficultySelect"); 






let maxGuessedMsg = "Too High! Try Again";
let minGuessedMsg = "Too Low! Try Again";
let congratulationsMsg = "Congratulations! You got it right."
let invalidInputMsg = "Please provide a valid input.";


let randomNum = Math.ceil(Math.random() * 100)


let checkUserGuessedNumber = () => {
    let guessedNumber = parseInt(userInputEl.value);


    if (guessedNumber > randomNum) {
        gameResult.textContent = maxGuessedMsg;
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber < randomNum) {
        gameResult.textContent = minGuessedMsg;
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNumber === randomNum) {
        gameResult.textContent = congratulationsMsg;
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = invalidInputMsg;
        gameResult.style.backgroundColor = "#1e217c";
    }

}


outputCheckBtnEl.addEventListener("click", checkUserGuessedNumber); 