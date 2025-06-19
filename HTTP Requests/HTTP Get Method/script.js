let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let loadingEl = document.getElementById("loading");
let httpResponseEl = document.getElementById("httpResponse");







let url = "https://gorest.co.in/public-api/users";


// sendGetRequestBtnEl.addEventListener("click", () => {
//     loadingEl.classList.remove("d-none");
//     requestStatusEl.textContent = "";
//     httpResponseEl.textContent = "";


//     fetch(url)
//         .then(
//             (response) => {

//                 requestStatusEl.textContent = response.status;
//                 return response.json();
//             }
//         )


//         .then(
//             (responseData) => {
//                 setTimeout(() => {
//                     loadingEl.classList.add("d-none");
//                     httpResponseEl.textContent = JSON.stringify(responseData, null, 2);
//                 }, 2000)
//             }
//         )
//         .catch((error) => {
//             loadingEl.classList.add("d-none");
//             requestStatusEl.textContent = "Request Faild"
//             httpResponseEl.textContent = error.message;
//         })


// })




sendGetRequestBtnEl.addEventListener("click", async () => {
    loadingEl.classList.remove("d-none");
    requestStatusEl.textContent = "";
    httpResponseEl.textContent = "";

    try {
        let response = await fetch(url);
        requestStatusEl.textContent = response.status;

        let responseData = await response.json();

        setTimeout(() => {
            loadingEl.classList.add("d-none");
            httpResponseEl.textContent = JSON.stringify(responseData, null, 2);
        }, 2000);
    } catch (error) {
        loadingEl.classList.add("d-none");
        requestStatusEl.textContent = "Request failed";
        httpResponseEl.textContent = error.message;
    }
});
