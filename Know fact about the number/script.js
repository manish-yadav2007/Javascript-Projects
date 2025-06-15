let userInputEl = document.getElementById("userInput"); 
let spinnerEl = document.getElementById("spinner"); 
let factEl = document.getElementById("fact"); 





let validateInput = () => {
    if (userInputEl.value === "") {
        alert("Enter a Number please!"); 
    } 
}


userInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        
        let userEnterdValue = userInputEl.value; 
        // url with targeted id 
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userEnterdValue; 
        // remove d-none class from html file in loading spinner for now 
        spinnerEl.classList.remove("d-none"); 
        // clear previous result 
        factEl.textContent = "";
        
        fetch(url)
        .then((response) => {
            return response.json(); 
        })

        .then((responseData) => {
            // console.log(responseData); 
            spinnerEl.classList.add("d-none"); 
            factEl.textContent = responseData.fact; 
        })

        validateInput(); 
        
    }


    
})