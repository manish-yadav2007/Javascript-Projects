let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");

let requestBodyEl = document.getElementById("requestBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let requestBodyMsgEl = document.getElementById("requestBodyMsg"); 




let validateConsole = () => {
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "input element should contain url...."
        
    }
    else if (requestBodyEl.value === "") {
        requestBodyMsgEl.textContent = "Please Enter the Request body Data...."; 
    }
    else {
        requestUrlErrMsgEl.textContent = ""; 
    }
}





consoleFormEl.addEventListener("submit", (event) => {

    event.preventDefault();

    let url = requestUrlEl.value;
    let method = requestMethodEl.value;
    let bodyText = requestBodyEl.value;


    let options = {

        method: method,

        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization": "Bearer 4f9a1995870b17d8d27081fe23ad95e68eaaa346bfc920a34e94e885a6355a97"
        },

        body: bodyText
    }



    fetch(url, options)

        .then(
            (response) => {
                responseStatusEl.value = response.status;
                return response.json();
            }
        )

        .then(
            (responseData) => {
                responseBodyEl.value = JSON.stringify(responseData);
            }
        )

        


        validateConsole()



})









