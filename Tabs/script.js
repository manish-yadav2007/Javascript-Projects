




let aboutBtn = document.getElementById("aboutButton");
let timeToVisitBtn = document.getElementById("timeToVisitButton");
let attractionsBtn = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

let activateTab = (clickedBtn, clickedTab) => {
    // Hide all tabs
    aboutTab.classList.remove("d-block");
    aboutTab.classList.add("d-none");

    timeToVisitTab.classList.remove("d-block");
    timeToVisitTab.classList.add("d-none");

    attractionsTab.classList.remove("d-block");
    attractionsTab.classList.add("d-none");




    // Show the clicked tab
    clickedTab.classList.remove("d-none");
    clickedTab.classList.add("d-block");



    

    // Remove selected style from all buttons
    aboutBtn.classList.remove("selected-button");
    timeToVisitBtn.classList.remove("selected-button");
    attractionsBtn.classList.remove("selected-button");

    // Highlight the clicked button
    clickedBtn.classList.add("selected-button");
}

// Event listeners for all three buttons
aboutBtn.addEventListener("click", () =>  {
    activateTab(aboutBtn, aboutTab);
});

timeToVisitBtn.addEventListener("click", () => {
    activateTab(timeToVisitBtn, timeToVisitTab);
});

attractionsBtn.addEventListener("click", () => {
    activateTab(attractionsBtn, attractionsTab);
});

// Set default visible tab on page load
activateTab(aboutBtn, aboutTab);
