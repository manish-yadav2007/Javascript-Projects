import { onTodoStatusChange, onDeleteTodo } from "./statusHandler.js";

let createAndAppendTodoItem = (todo, container = document.getElementById("todoItemsContainer")) => {
    let checkBoxId = "checkbox" + todo.uniqueId;
    let labelId = "label" + todo.uniqueId;
    let todoId = "todo" + todo.uniqueId;

    let listItem = document.createElement("li");
    listItem.className = "todo-item-container d-flex flex-row";
    listItem.id = todoId;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-input";
    checkbox.id = checkBoxId;
    checkbox.addEventListener("click", () => onTodoStatusChange(checkBoxId, labelId));
    listItem.appendChild(checkbox);

    let labelContainer = document.createElement("div");
    labelContainer.className = "label-container d-flex flex-row";
    listItem.appendChild(labelContainer);

    let label = document.createElement("label");
    label.className = "checkbox-label";
    label.setAttribute("for", checkBoxId);
    label.textContent = todo.name;
    label.id = labelId;
    labelContainer.appendChild(label);

    let deleteContainer = document.createElement("div");
    deleteContainer.className = "delete-icon-container";
    let icon = document.createElement("i");
    icon.className = "far fa-trash-alt delete-icon";
    icon.addEventListener("click", () => onDeleteTodo(todoId, container));
    deleteContainer.appendChild(icon);
    labelContainer.appendChild(deleteContainer);

    container.appendChild(listItem);
};

export { createAndAppendTodoItem };
