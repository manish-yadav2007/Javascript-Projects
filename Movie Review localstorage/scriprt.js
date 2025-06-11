let containerElement = document.getElementById("movieReviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let addButton = document.getElementById("addBtn");
let reviewsContainerEl = document.getElementById("reviewsContainer");
let formContainerEl = document.getElementById("formContainer");




addButton.addEventListener("click", () => {


    let userEnteredMovieTitle = titleInputEl.value;
    let userEnteredReview = reviewTextareaEl.value;

    titleInputEl.value = "";
    reviewTextareaEl.value = "";

    let createReviewTitle = document.createElement("h1");
    createReviewTitle.classList.add("moview-review-title-result");
    createReviewTitle.textContent = "Movie Title: " + userEnteredMovieTitle;
    reviewsContainerEl.appendChild(createReviewTitle);


    let createReviewDescription = document.createElement("p");
    createReviewDescription.textContent = "Review: " + userEnteredReview;
    createReviewDescription.classList.add("movie-review-result");
    reviewsContainerEl.appendChild(createReviewDescription);





})




formContainerEl.addEventListener("submit", (event) => {
    event.preventDefault();
})
