import { createAndAppendTodoItem } from "./dom.js";
import { onAddTodoItem, todoList } from "./addTask.js";

let todoItemsContainerElement = document.getElementById("todoItemsContainer");
let addTodoBtn = document.getElementById("addTodoButton");
let userInputElement = document.getElementById("todoUserInput");

for (let todo of todoList) {
    createAndAppendTodoItem(todo);
}

addTodoBtn.addEventListener("click", () => {
    onAddTodoItem(userInputElement.value, todoItemsContainerElement);
    userInputElement.value = "";
});
