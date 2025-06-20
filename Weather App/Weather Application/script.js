// ===========================================
// 1. Primitive Data Types & Constants
// ===========================================
const API_KEY = '19de726cec98645c73f72539289e6c43'; // YOUR API KEY IS HERE
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ICON_BASE_URL = 'https://openweathermap.org/img/wn/'; // Base URL for weather icons

// ===========================================
// 2. Basic DOM & DOM Properties
//    (References to HTML elements)
// ===========================================
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const weatherDisplay = document.getElementById('weatherDisplay');
const initialMessage = document.getElementById('initialMessage'); // Reference to the initial/error message container

const cityNameEl = document.getElementById('cityName'); // Using 'El' suffix for element reference
const currentDateTimeEl = document.getElementById('currentDateTime');
const weatherIconEl = document.getElementById('weatherIcon');
const temperatureEl = document.getElementById('temperature');
const weatherDescriptionEl = document.getElementById('weatherDescription');
const windSpeedEl = document.getElementById('windSpeed');
const humidityEl = document.getElementById('humidity');
const visibilityEl = document.getElementById('visibility');
const pressureEl = document.getElementById('pressure');

// 15. HTML Checkbox Inputs & DOM Checked Property
// We need to get a reference to the dynamically added unitToggle checkbox
const unitToggleCheckbox = document.getElementById('unitToggle'); // Get reference by its ID


// ===========================================
// 3. Client-Side Data Storage (Local Storage)
//    getItem() and setItem()
// ===========================================
const LAST_CITY_KEY = 'lastSearchedCity'; // A constant for localStorage key

// ===========================================
// 4. Function Declarations & Helper Functions
// ===========================================

/**
 * Formats a Unix timestamp into a human-readable date and time.
 * @param {number} timestamp - The Unix timestamp.
 * @returns {string} Formatted date and time string.
 */
function formatDateTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    return date.toLocaleString('en-US', options); // Using 'en-US' for consistent formatting
}

/**
 * Converts meters to kilometers and rounds up.
 * @param {number} meters - Distance in meters.
 * @returns {string} Formatted visibility in kilometers.
 * // 9. Math.random and ceil (though we use Math.round or Math.ceil here for specific conversion)
 */
function metersToKilometers(meters) {
    // Using Math.round for more natural visibility display
    return `${Math.round(meters / 1000)} km`;
}

/**
 * Shows or hides a DOM element by toggling 'd-none' class.
 * @param {HTMLElement} element - The DOM element to toggle.
 * @param {boolean} show - True to show, false to hide.
 */
function toggleVisibility(element, show) {
    if (show) {
        element.classList.remove('d-none');
        // Special case for spinner, uses d-flex-visible
        if (element.id === 'loadingSpinner') {
            element.classList.add('d-flex-visible');
        } else {
            element.classList.add('d-block');
        }
    } else {
        element.classList.add('d-none');
        if (element.id === 'loadingSpinner') {
            element.classList.remove('d-flex-visible');
        } else {
            element.classList.remove('d-block');
        }
    }
}

/**
 * Displays a message in the initialMessage area.
 * @param {string} message - The message to display.
 */
function showInfoMessage(message) {
    initialMessage.querySelector('p').textContent = message; // Update text inside the <p> tag
    toggleVisibility(initialMessage, true);
    toggleVisibility(loadingSpinner, false);
    toggleVisibility(weatherDisplay, false);
}

/**
 * Hides all display sections and shows the loading spinner.
 */
function showLoading() {
    toggleVisibility(initialMessage, false);
    toggleVisibility(weatherDisplay, false);
    toggleVisibility(loadingSpinner, true);
}

/**
 * Hides loading spinner and info message, shows weather display.
 */
function showWeatherDisplay() {
    toggleVisibility(loadingSpinner, false);
    toggleVisibility(initialMessage, false);
    toggleVisibility(weatherDisplay, true);
}

// ===========================================
// 5. Objects & Object Destructuring
//    and DOM Properties (value, textContent, src, alt)
// ===========================================

/**
 * Updates the UI with weather data.
 * @param {object} weatherData - The weather data object from the API.
 */
function updateWeatherUI(weatherData) {
    // Object Destructuring for easier access to properties
    const {
        name,
        dt,
        main: {
            temp,
            humidity,
            pressure
        },
        weather: [{
            description,
            icon
        }], // Array of objects, taking the first one
        wind: {
            speed
        },
        visibility
    } = weatherData; // Note: 'visibility' is directly under the top-level 'weatherData' object

    // Display Data using DOM Properties
    cityNameEl.textContent = name;
    currentDateTimeEl.textContent = formatDateTime(dt);
    weatherIconEl.src = `${ICON_BASE_URL}${icon}@2x.png`;
    weatherIconEl.alt = description;

    // Check unit preference
    const isImperial = unitToggleCheckbox.checked;
    temperatureEl.textContent = `${Math.round(temp)}${isImperial ? '°F' : '°C'}`; // Ternary operator for temperature unit
    weatherDescriptionEl.textContent = description.charAt(0).toUpperCase() + description.slice(1); // Basic String method
    
    windSpeedEl.textContent = `${speed}${isImperial ? ' mph' : ' m/s'}`;
    humidityEl.textContent = `${humidity}%`;
    visibilityEl.textContent = metersToKilometers(visibility); // Convert meters to km
    pressureEl.textContent = `${pressure} hPa`;

    showWeatherDisplay();
}

// ===========================================
// 6. Making HTTP Requests (Fetch API), HTTP Methods (GET),
//    Conditional Statements (loose/strict equality)
//    and Error Handling (try...catch, Promise.reject)
// ===========================================


const getWeatherData = async () => { // Async/Await for cleaner async code
    const city = cityInput.value.trim(); // Trim whitespace from input
    const isImperial = unitToggleCheckbox.checked;
    const units = isImperial ? 'imperial' : 'metric'; // Set units based on checkbox

    // 7. Input Fields & Conditional Statements
    if (city === '') { // Strict equality for empty string check
        showInfoMessage('Please enter a city name.');
        return; // Exit the function early
    }

    showLoading(); // Show loading spinner

    // 13. HTML Placeholders (already in HTML)
    // 14. Basic Javascript methods (string.trim(), string.toLowerCase())

    const apiUrl = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`;

    try {
        const response = await fetch(apiUrl); // HTTP GET request

        if (!response.ok) { // `response.ok` is true for 2xx status codes
            const errorData = await response.json(); // Parse error message from API
            // Check for specific OpenWeatherMap error codes
            if (errorData.cod === '404') { // Strict equality for '404' string code
                throw new Error('City not found. Please check spelling!');
            } else if (errorData.cod === 401) { // OpenWeatherMap returns 401 as a number
                throw new Error('Invalid API Key. Please check your API key.');
            }
            // Fallback for other network/API errors
            throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
        }

        const data = await response.json(); // Parse the JSON response
        updateWeatherUI(data);

        // 12. Client-side data storage - localStorage
        localStorage.setItem(LAST_CITY_KEY, city); // Store the last successfully searched city

    } catch (error) {
        console.error('Error fetching weather data:', error);
        showInfoMessage(`Error: ${error.message}`);
        // 11. Null Text Area Element (not directly used, but good to keep in mind for potential null checks if you add a text area)
    }
};

// ===========================================
// 16. Event Listeners & Basic Keyboard Events
// ===========================================

// Function Expression for event handler
const handleSearchInput = (event) => {
    // 8. Conditional statements (loose equality vs. strict equality)
    // Using strict equality `===` is generally preferred for consistency and preventing unexpected type coercions.
    if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
        getWeatherData();
    }
};

searchBtn.addEventListener('click', getWeatherData);
cityInput.addEventListener('keypress', handleSearchInput);
unitToggleCheckbox.addEventListener('change', () => {
    // When units change, re-fetch data for the current city
    // This leverages the last stored city or the current input
    const lastCity = localStorage.getItem(LAST_CITY_KEY);
    if (cityInput.value.trim() !== '') {
        getWeatherData(); // Use current input if available
    } else if (lastCity) {
        cityInput.value = lastCity; // Populate input with last city
        getWeatherData();
    }
});


// ===========================================
// 17. Initial Load and Local Storage Retrieval
//     (Execution Context Storage Mechanisms)
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    const lastCity = localStorage.getItem(LAST_CITY_KEY);
    if (lastCity) {
        cityInput.value = lastCity; // Populate input with last searched city
        /* `getWeatherData` is a function that fetches weather data from the OpenWeatherMap API based
        on the city name entered by the user. Here is a summary of what the function does: */
        getWeatherData(); // Automatically fetch weather for the last city
    } else {
        showInfoMessage('Enter a city to get started!');
    }
});

