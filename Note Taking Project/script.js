let noteInputEl = document.getElementById("noteInput");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");




window.addEventListener("DOMContentLoaded", () => {
    let savedValue = localStorage.getItem("text"); 

    if (savedValue) {
        noteInputEl.textContent = JSON.parse(savedValue); 
    }

})





saveBtnEl.addEventListener("click", () => {
    let userEnteredValue = noteInputEl.value;
    localStorage.setItem("text", JSON.stringify(userEnteredValue)); 
 

})




clearBtn.addEventListener("click", () => {
    localStorage.removeItem("text"); 
    noteInputEl.value = ""; 
})





