

-----

# To-Do List

A sleek and responsive to-do list web application built with HTML, CSS, Bootstrap, and vanilla JavaScript. It features dynamic task management and persists your tasks in the browser's local storage.

-----

### Project Demo

The following project demonstrates the core functionalities of the application: adding new tasks, marking tasks as complete (which applies a strikethrough effect), deleting tasks, and reloading the page to show that all tasks and their statuses are saved and restored.



### Project Demo

project Link- todoorbit.netlify.app





-----

### Table of Contents

  - Project Title
  - Project Demo
  - Table of Contents
  - Features
  - Technologies Used
  - How It Works
  - Code Overview
  - Setup and Usage
  - Future Improvements

-----

### ✨ Features

  * **Add Tasks:** Easily add new tasks through an input field.
  * **Delete Tasks:** Remove tasks you no longer need with a single click.
  * **Mark as Complete:** Toggle the completion status of a task, which applies a visual strikethrough effect.
  * **Data Persistence:** Your to-do list is saved to your browser's **local storage**. Your tasks will be there when you return, even after closing the browser tab.
  * **Responsive Design:** A clean, user-friendly interface that works on various screen sizes, thanks to the Bootstrap framework.
  * **Input Validation:** The application prevents users from adding empty tasks.

-----

### 💻 Technologies Used

  * HTML5
  * **CSS3**
  * **JavaScript (ES6+)**
  * **Bootstrap:** For responsive layout and styling components.
  * **Font Awesome:** For icons like the delete (trash) icon.

-----

### ⚙️ How It Works

The application's logic revolves around a central JavaScript array, `todoList`, which acts as the single source of truth for all tasks.

1.  On Load: The app first checks the browser's `localStorage` for any saved tasks using `getTodoListFromLocalStorage()`. If found, it parses this data to populate the `todoList` array.

2.  Rendering: The application iterates through the `todoList` array and dynamically creates the necessary HTML elements for each task using the `createAndAppendTodDoItem()` function.

3.  Adding a Task: When a user types a task and clicks the "Add" button, the `onAddTodoItem()` function is triggered. It creates a new task object, adds it to the `todoList` array, and calls `createAndAppendTodDoItem()` to render the new task in the UI.

4.  Changing Task Status: Clicking a task's checkbox triggers `onTodoStatusChange()`. This function updates the task's `isChecked` status in the `todoList` array and toggles a `.checked` CSS class to apply the strikethrough style.

5.  Deleting a Task: Clicking the trash icon calls `todoItemDelete()`. This function removes the task's HTML element from the page and also removes the task object from the `todoList` array.

6.  Saving Progress: Clicking the "Save" button serializes the current `todoList` array into a JSON string and saves it to `localStorage`, ensuring all changes are preserved for the next session.

-----

### Code Overview

#### JavaScript Logic

The application's entire functionality is managed by a single JavaScript file. Here are the key functions:

  * `getTodoListFromLocalStorage()`: Retrieves and parses the task list from `localStorage`. If no list is found, it returns an empty array.
  * `createAndAppendTodDoItem(todo)`: This is the core rendering function. For each `todo` object, it creates an `<li>` element with a checkbox, a label, and a delete icon. It also attaches the necessary `onclick` event listeners.
  * `onAddTodoItem()`: Handles the logic for adding a new task. It reads the input value, creates a new `todo` object, pushes it to the `todoList` array, and then calls the render function.
  * `onTodoStatusChange(checkBoxId, labelId, deleteIconId)`: Manages the completion state of a task. It finds the corresponding task in the `todoList` array and toggles its `isChecked` boolean property.
  * `todoItemDelete(deleteIconId)`: Manages task deletion. It removes the task's HTML element from the DOM and splices the corresponding object from the `todoList` array.
  * `saveBtn.onclick`: An event handler that stringifies the `todoList` array and saves it to `localStorage` under the key `"todoList"`.

-----

### 🚀 Setup and Usage

To run this project locally, follow these simple steps:

1.  **Download or Clone:** Download the project files or clone the repository to your local machine.
2.  **File Structure:** Ensure you have the necessary files in the same directory:
      * `index.html` (The main page structure)
      * `style.css` (Custom styles, including the `.checked` class)
      * `script.js` (The provided JavaScript code)
3.  **Open in Browser:** Open the `index.html` file in any modern web browser.

You can now start adding, completing, and deleting tasks\!

-----

### 🌟 Future Improvements

  * **Automatic Saving:** Modify the code to save to `localStorage` automatically after any change (adding, deleting, or toggling a task), removing the need for a manual "Save" button.
  * **Edit Functionality:** Add the ability for users to edit the text of an existing task.
  * **Robust Unique IDs:** Instead of using the array length for `uniqueValue`, use a more reliable method like `Date.now()` or a simple counter that never decreases to prevent potential ID conflicts.
  * **User Experience:** Add smooth CSS transitions or animations for adding and deleting tasks to enhance the user experience.
  * **Task Filtering:** Implement buttons to filter the view between "All," "Active," and "Completed" tasks.