// let speedTypingTestContainer = document.getElementById("speedTypingTest");
// let timerCountdown = document.getElementById("timer");
// let quoteDisplayParagraph = document.getElementById("quoteDisplay");
// let resultDisplay = document.getElementById("result");
// let quoteInputElement = document.getElementById("quoteInput");
// let submitButton = document.getElementById("submitBtn");
// let resetButton = document.getElementById("resetBtn");
// let spinnerLoading = document.getElementById("spinner");

// let timerSecondInitilization = 0;
// let intervalId = null;

// resetButton.addEventListener('click', function () {
//     spinnerLoading.classList.remove('d-none');
//     quoteDisplayParagraph.textContent = "";

//     // ✅ Reset timer
//     clearInterval(intervalId); // Clear existing timer  
//     timerSecondInitilization = 0; // Reset time
//     timerCountdown.textContent = 0; // Show reset time

//     let url = "https://apis.ccbp.in/random-quote";

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (jsonData) {
//             console.log(jsonData);
//             spinnerLoading.classList.add("d-none");
//             quoteDisplayParagraph.textContent = jsonData.content;

//             intervalId = setInterval(function () {
//                 timerSecondInitilization += 1;
//                 timerCountdown.textContent = timerSecondInitilization + " Seconds";
//             }, 1000);
//         });
// });




// submitButton.addEventListener("click", function() {

//     if (quoteInputElement.value === quoteDisplayParagraph.textContent) {
//         resultDisplay.textContent = "You Typed in " + timerCountdown.textContent;    
//         clearInterval(intervalId); 
//     }
//     else {
//         resultDisplay.textContent = "You Typed Incorrect sentence"; 
//     }
// })







let speedTypingTestContainer = document.getElementById("speedTypingTest");
let timerCountdown = document.getElementById("timer");
let quoteDisplayParagraph = document.getElementById("quoteDisplay");
let resultDisplay = document.getElementById("result");
let quoteInputElement = document.getElementById("quoteInput");
let submitButton = document.getElementById("submitBtn");
let resetButton = document.getElementById("resetBtn");
let spinnerLoading = document.getElementById("spinner");

let timerSecondInitilization = 0;
let intervalId = null;








resetButton.addEventListener("click", function () {
    spinnerLoading.classList.remove("d-none");
    quoteDisplayParagraph.textContent = "";
    resultDisplay.textContent = ""; 
    quoteInputElement.value = "";
    
    clearInterval(intervalId);
    timerSecondInitilization = 0;
    timerCountdown.textContent = "0 Seconds";
    
    let url = "https://apis.ccbp.in/random-quote";
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        spinnerLoading.classList.add("d-none");
        quoteDisplayParagraph.textContent = jsonData.content;
        
        intervalId = setInterval(function () {
            timerSecondInitilization += 1;
            timerCountdown.textContent = timerSecondInitilization + " Seconds";
        }, 1000);
    });
});

submitButton.addEventListener("click", function () {
    if (
        quoteInputElement.value.trim() ===
        quoteDisplayParagraph.textContent.trim()
    ) {
        resultDisplay.textContent =
        "✅ You typed in " + timerSecondInitilization + " seconds!";
        clearInterval(intervalId);
    } else {
        resultDisplay.textContent = "❌ You typed the sentence incorrectly.";
    }
});

window.addEventListener("DOMContentLoaded", function() {
    localStorage.setItem("TypingAppStatus", JSON.stringify({
        quote: quoteDisplayParagraph.textContent,
        timer: timerCountdown.textContent,
        input: quoteInputElement.value,
        result: resultDisplay.textContent
   }))    
})

