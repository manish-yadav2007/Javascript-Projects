import { createAndAppendTodoItem } from './dom.js';

let todoList = [
    { name: "Learn HTML", uniqueId: 1 },
    { name: "Learn CSS", uniqueId: 2 },
    { name: "Learn JavaScript", uniqueId: 3 },
    { name: "Learn React", uniqueId: 4 },
];

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
    

    createAndAppendTodoItem(newTodo, container);
}

export { onAddTodoItem, todoList, todosCount as todosCountRef };
