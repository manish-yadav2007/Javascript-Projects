import { createAndAppendTodoItem } from "./dom.js";
import { getTodoListFromLocalStorage, saveTodoListToLocalStorage } from "./localstorage.js";

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

let onAddTodoItem = (userInput, container) => {
    if (userInput.trim() === "") {
        alert("Please add your task in the input box!!");
        return;
    }

    todosCount += 1;
    let newTodo = {
        name: userInput,
        uniqueId: todosCount
    };
    todoList.push(newTodo);
    createAndAppendTodoItem(newTodo, container);
    saveTodoListToLocalStorage(todoList);
};

export { onAddTodoItem, todoList };