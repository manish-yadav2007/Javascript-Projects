// Get Button Elements
let springButton = document.getElementById("springBtn");
let summerButton = document.getElementById("summerBtn");
let autumnButton = document.getElementById("autumnBtn");
let winterButton = document.getElementById("winterBtn");

// Get Image Elements
let seasonSmallImg = document.getElementById("seasonSmallImage");
let seasonMediumImg = document.getElementById("seasonMediumImage");

// Season Image URLs
let seasons = {
    spring: {
        small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png",
        medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
    },
    summer: {
        small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png",
        medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"
    },
    autumn: {
        small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png",
        medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"
    },
    winter: {
        small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png",
        medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"
    }
};

// Update image function
function updateSeasonImages(seasonName) {
    let { small, medium } = seasons[seasonName];
    seasonSmallImg.src = small;
    seasonMediumImg.src = medium;

    // Save to localStorage
    localStorage.setItem("selectedSeason", JSON.stringify({ small, medium }));
}

// Load saved season if exists
window.addEventListener("DOMContentLoaded", function () {
    let savedSeason = localStorage.getItem("selectedSeason");
    if (savedSeason) {
        let { small, medium } = JSON.parse(savedSeason);
        seasonSmallImg.src = small;
        seasonMediumImg.src = medium;
    }
});

// Add Event Listeners for Buttons
springButton.addEventListener("click", function () {
    updateSeasonImages("spring");
});

summerButton.addEventListener("click", function () {
    updateSeasonImages("summer");
});

autumnButton.addEventListener("click", function () {
    updateSeasonImages("autumn");
});

winterButton.addEventListener("click", function () {
    updateSeasonImages("winter");
});