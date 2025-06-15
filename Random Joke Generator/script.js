let jokeBtnEl = document.getElementById("jokeBtn"); 
let spinnerLoading = document.getElementById("spinner");
let jokeTextEl = document.getElementById("jokeText"); 




jokeBtnEl.addEventListener("click", () => {
    let url = "https://apis.ccbp.in/jokes/random";
    spinnerLoading.classList.remove("d-none"); 
    jokeTextEl.textContent = ""; 


    fetch(url)
    .then((response) => {
        return response.json(); 
    })

    .then((responseData) => {
        spinnerLoading.classList.add("d-none"); 
        jokeTextEl.textContent = responseData.value;
        // console.log(responseData);
         
    })

})
