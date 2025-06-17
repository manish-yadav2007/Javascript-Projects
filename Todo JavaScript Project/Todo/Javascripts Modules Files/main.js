import { createAndAppendTodoItem } from './dom.js';
import { onAddTodoItem, todoList, todosCountRef } from './addTask.js';
import { onTodoStatusChange, onDeleteTodo } from './statusHandler.js';

// DOM access
let todoItemsContainerElement = document.getElementById('todoItemsContainer');
let addTodoBtn = document.getElementById('addTodoButton');
let userInputElement = document.getElementById('todoUserInput');

// Load initial todos
for (let todo of todoList) {
    createAndAppendTodoItem(todo);
}

// Add new todo
addTodoBtn.addEventListener("click",  () => {
    onAddTodoItem(userInputElement.value, todoItemsContainerElement);
    userInputElement.value = "";
});

export { onTodoStatusChange, onDeleteTodo };
