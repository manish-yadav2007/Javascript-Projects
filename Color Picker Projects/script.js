let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let greyButton = document.getElementById("greyBtn");
let greenButton = document.getElementById("greenBtn");
let blueButton  = document.getElementById("blueBtn");
let purpleButton = document.getElementById("purpleBtn");

let selectedColorHexCodeSpan = document.getElementById("selectedColorHexCode");





window.addEventListener("DOMContentLoaded", function() {
    let savedColor = localStorage.getItem("selectedColor"); 
    
    if (savedColor) {
        colorPickerContainerElement.style.backgroundColor = savedColor;
        selectedColorHexCodeSpan.textContent = savedColor;
    }
})



function applyColor(color) {
    colorPickerContainerElement.style.backgroundColor = color;
    selectedColorHexCodeSpan.textContent = color;
    localStorage.setItem("selectedColor", color); 
}



greyButton.addEventListener("click", () => applyColor("#e0e0e0")); 
greenButton.addEventListener("click", () => applyColor("#6fcf97")); 
blueButton.addEventListener("click", () => applyColor("#56ccf2"));
purpleButton.addEventListener("click", () => applyColor("#bb6bd9")); 






