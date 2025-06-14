let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

userInputEl.addEventListener("keydown", (event) => {
    let keyCodeValue = event.key;
    let unicode = keyCodeValue.charCodeAt(0); 

    if (keyCodeValue.length  > 1) return; 

    let createListItem = document.createElement("li");
    createListItem.textContent = unicode;
    keyCodeListEl.appendChild(createListItem);
});
