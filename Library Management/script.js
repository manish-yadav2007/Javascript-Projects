let searchInputElement = document.getElementById("searchInput");
let searchResultsContainer = document.getElementById("searchResults");
let spinnerLoading = document.getElementById("spinner");

// Function to render the book results
function showBooks(results) {
    searchResultsContainer.innerHTML = "";
    spinnerLoading.classList.add("d-none");

    if (results.length === 0) {
        let noResultEl = document.createElement("h1");
        noResultEl.textContent = "No Results Found";
        noResultEl.classList.add("text-center", "text-danger", "w-100", "mt-5");
        searchResultsContainer.appendChild(noResultEl);
        return;
    }

    // Title
    let headingEl = document.createElement("h1");
    headingEl.textContent = "📚 Popular Books";
    searchResultsContainer.appendChild(headingEl);

    // Loop through books and create cards
    for (let book of results) {
        const { imageLink, author } = book;

        let colDiv = document.createElement("div");
        colDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

        // Book Card
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("book-card");

        // Book Image
        let imgEl = document.createElement("img");
        imgEl.src = imageLink;
        imgEl.alt = `Cover of book by ${author}`;
        imgEl.classList.add("book-image");

        // Author
        let authorEl = document.createElement("p");
        authorEl.textContent = author;
        authorEl.classList.add("book-author");

        // Append elements
        cardDiv.appendChild(imgEl);
        cardDiv.appendChild(authorEl);
        colDiv.appendChild(cardDiv);
        searchResultsContainer.appendChild(colDiv);
    }
}

// Event listener on Enter key
searchInputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let keyword = searchInputElement.value.trim();
        if (keyword === "") return;

        spinnerLoading.classList.remove("d-none");
        searchResultsContainer.innerHTML = ""; // Clear old results

        let url = "https://apis.ccbp.in/book-store?title=" + keyword;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                showBooks(data.search_results);
            })
            .catch(error => {
                spinnerLoading.classList.add("d-none");
                let errorEl = document.createElement("h1");
                errorEl.textContent = "⚠️ Something went wrong";
                errorEl.classList.add("text-danger", "text-center", "w-100", "mt-5");
                searchResultsContainer.appendChild(errorEl);
                console.error("Fetch error:", error);
            });
    }
});

