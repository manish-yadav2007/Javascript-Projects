let getTodoListFromLocalStorage = () => {
    let retrieveTodoList = localStorage.getItem("todo");
    let parsedData = JSON.parse(retrieveTodoList);
    return parsedData === null ? [] : parsedData;
};

let saveTodoListToLocalStorage = (todoList) => {
    localStorage.setItem("todo", JSON.stringify(todoList));
};

export { getTodoListFromLocalStorage, saveTodoListToLocalStorage };
