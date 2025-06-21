
let onTodoStatusChange = (checkBoxUniqueId, labelElementUniqueId) => {
    let checkBoxElement = document.getElementById(checkBoxUniqueId);
    let labelElement = document.getElementById(labelElementUniqueId);
    labelElement.classList.toggle("checked");
};

let onDeleteTodo = (todoId, container) => {
    let todoElement = document.getElementById(todoId);
    if (todoElement) {
        container.removeChild(todoElement);
    }
};

export { onTodoStatusChange, onDeleteTodo };