let onTodoStatusChange = (checkBoxUniqueId, labelElementUniqueId) => {
    let checkBoxElement = document.getElementById(checkBoxUniqueId);
    let labelElement = document.getElementById(labelElementUniqueId);

    // if (checkBoxElement.checked === true) {
    //     labelElement.classList.add('checked');
    // } else {
    //     labelElement.classList.remove('checked');
    // }

    labelElement.classList.toggle("checked");
}

let onDeleteTodo = (todoId, container) => {
    let todoElement = document.getElementById(todoId);
    container.removeChild(todoElement);
}

export { onTodoStatusChange, onDeleteTodo };
