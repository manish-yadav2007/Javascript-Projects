

---

# 🌤️ WeatherWise

**WeatherWise** is a modern, responsive weather application built with HTML, CSS, and JavaScript. It uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch real-time weather data for any city input by the user.

---

## 📌 Project Overview

This project allows users to:

* Search for weather details by city name.
* Toggle between Metric (°C, m/s) and Imperial (°F, mph) units.
* See real-time temperature, weather condition, humidity, pressure, visibility, and wind speed.
* Automatically fetch and display the last searched city on page reload.

---

## 🛠️ Technologies & Concepts Used

### 🔹 HTML Concepts

| Feature             | Explanation                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Semantic Tags**   | Tags like `<header>`, `<div>`, `<input>`, `<button>`, `<p>`, and `<h1>` are used to structure content clearly.  |
| **Form Elements**   | Includes `<input>` for city name and `<button>` for triggering the search.                                      |
| **Custom Checkbox** | Implemented using `<input type="checkbox">` for toggling unit preferences.                                      |
| **Dynamic IDs**     | Elements are given unique `id`s for JavaScript interaction (like `cityInput`, `searchBtn`, `unitToggle`, etc.). |

---

### 🔹 CSS Concepts

| Feature                         | Explanation                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **CSS Variables**               | `:root` defines theme variables like `--text-light`, `--bg-dark`, etc., making styling reusable and manageable. |
| **Flexbox & Grid**              | Flexbox (`display: flex`) for layout alignment and Grid (`display: grid`) for responsive weather details.       |
| **Media Queries**               | Used for responsive design to adapt layout on small screens (e.g. max-width 500px and 350px).                   |
| **Custom Checkbox Styling**     | Styled from scratch using `appearance: none`, borders, and a checkmark with `::after`.                          |
| **Transitions & Hover Effects** | Smooth user interactions using `transition` and `:hover` pseudo-classes.                                        |
| **Animations**                  | Loading spinner animated using `@keyframes spin`.                                                               |
| **Utility Classes**             | `.d-none`, `.d-block`, and `.d-flex-visible` toggle visibility of elements dynamically.                         |

---

### 🔹 JavaScript Concepts

#### ✅ Core JavaScript

* **Primitive Data Types & Constants**: Constants like `API_KEY`, `BASE_URL` are defined using `const`.
* **DOM Manipulation**: Using `getElementById` to access and update DOM elements dynamically.
* **Event Listeners**: Listens for `click`, `keypress`, and `change` events to trigger API calls or toggle units.
* **Async/Await & Fetch API**: Fetches weather data asynchronously from OpenWeatherMap.
* **Error Handling**: Uses `try...catch` blocks to catch API errors (e.g. invalid city name).
* **String Methods**: `.trim()`, `.charAt()`, `.slice()` used for input processing and display formatting.
* **Template Literals**: Used to build strings like icon URLs and weather text with dynamic values.
* **Ternary Operator**: Used for toggling between `°C` and `°F`, `m/s` and `mph`.

#### 📦 Local Storage

* **localStorage API**: Saves the last searched city using `localStorage.setItem` and retrieves it on page load.

#### 🧠 Functions & Best Practices

* **Function Modularity**: Separated logic into helper functions like `showLoading()`, `toggleVisibility()`, `updateWeatherUI()`, etc.
* **Arrow Functions**: Used for concise event callbacks and cleaner code structure.
* **Destructuring Assignment**: Used to unpack values from API response objects directly for cleaner access.

---

## 📈 Features Breakdown

| Feature                    | Technologies Involved        | Description                                                                             |
| -------------------------- | ---------------------------- | --------------------------------------------------------------------------------------- |
| **City Search**            | HTML, JS, Fetch API          | User types a city name, and JavaScript fetches weather data using OpenWeatherMap.       |
| **Unit Toggle**            | Checkbox, JS DOM             | Toggle switch between Celsius (Metric) and Fahrenheit (Imperial).                       |
| **Loading Spinner**        | CSS Animation, JavaScript    | Spinner shows while data is being fetched from the API.                                 |
| **Error Messaging**        | JavaScript, DOM Manipulation | If an invalid city is entered, a friendly error message is shown.                       |
| **Responsive Design**      | CSS Media Queries            | App layout adjusts automatically for mobile, tablet, and desktop screens.               |
| **Weather Display**        | DOM, CSS Grid                | Displays weather icon, temperature, description, and other data in a clean card layout. |
| **Local Data Persistence** | localStorage API             | Remembers and fetches the last searched city on page reload.                            |

---

## 🔧 How It Works

1. User enters a city name in the input box.
2. On clicking search or pressing Enter:

   * JavaScript constructs a request URL using the city name and selected units.
   * Sends a GET request to the OpenWeatherMap API.
3. API responds with weather data:

   * JavaScript extracts relevant data using object destructuring.
   * Data is inserted into HTML elements.
   * Weather card is displayed with animation.
4. If there is an error (e.g. 404 or API key issue), an appropriate error message is shown.

---

## 📸 Preview

> *project-url- climetsphere.netlify.app*

---

## 🚀 Getting Started

### 🔹 Prerequisites:

* Web browser (Chrome, Firefox, etc.)
* Internet connection (for API call)

### 🔹 To Run Locally:

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Enter a city name and get weather instantly.

---

## 🔐 Note on API Key

Replace the placeholder API key (`YOUR_API_KEY_HERE`) in the JavaScript file with your actual [OpenWeatherMap API key](https://home.openweathermap.org/api_keys).

```js
const API_KEY = 'your_actual_api_key';
```

---

## 🙌 Credits & Attributions

* [OpenWeatherMap](https://openweathermap.org/) — Real-time weather data API.
* Icons from [Font Awesome](https://fontawesome.com/).
* Fonts from [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins).

---

## 📘 Learning Outcome

This project helps you learn and implement:

* Real-world API usage and error handling
* Modular, clean, and reusable JavaScript
* DOM manipulation with responsive design
* Use of localStorage for data persistence
* CSS styling best practices for UI/UX
* Writing beginner-friendly, well-commented code

---

## 📂 Folder Structure

```
weatherwise/
│
├── index.html            # HTML structure
├── style.css             # Styling and theme
├── script.js             # Logic and data handling
└── README.md             # Project documentation
```

---

## 📞 Contact

Have feedback or want to collaborate?

* 📧 Email: manishyaduvanshi8294@gmail.com
* 💬 LinkedIn/GitHub: *www.linkedin.com/in/-manish-yadav*

---


