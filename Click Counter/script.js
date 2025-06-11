let clickCounterContainerEl = document.getElementById("clickCounterContainer"); 

let counterValueEl = document.getElementById("counterValue");


let incrementBtnEl = document.getElementById("incrementBtn");





let saveCounterValue = (counterValue) => {
    localStorage.setItem("clickCount", counterValue); 
}



function getValue() {

    let getStoredValue = localStorage.getItem("clickCount"); 

    if (getStoredValue) {
        counterValueEl.textContent = getStoredValue; 
    }
}

getValue(); 





incrementBtnEl.addEventListener("click", function() {
    let counterValue = counterValueEl.textContent;
    counterValue++;
    counterValueEl.textContent = counterValue;
    
    saveCounterValue(counterValue);
    
})    




