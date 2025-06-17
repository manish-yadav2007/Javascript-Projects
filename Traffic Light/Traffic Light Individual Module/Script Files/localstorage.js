import {applyColor}  from  "./applyColor.js"; 



window.addEventListener("DOMContentLoaded", () => {
    let savedColor = localStorage.getItem("color"); 
    if (savedColor) {
        applyColor(savedColor); 
    }
})

