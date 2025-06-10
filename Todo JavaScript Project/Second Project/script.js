

// get the container element for the to do items
let toDoItemContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveBtn = document.getElementById("saveButton");


function getTodoListFromLocalStorage() {
    let stringiedTodoListStorage = localStorage.getItem("todoList");
    let parseTodoList = JSON.parse(stringiedTodoListStorage);
    if (parseTodoList === null) {
        return [];
    }
    else {
        return parseTodoList;
    }
    
}



let todoList = getTodoListFromLocalStorage();

// count the number of todos tasks in todoList objects array
let todosCount = todoList.length;



// create a strikethrough effect on the label when the checkbox is checked
function onTodoStatusChange(checkBoxId, labelId, deleteIconId) {
    let checkBoxElement = document.getElementById(checkBoxId);
    console.log(checkBoxElement.checked);

    let labelElementId = document.getElementById(labelId);
    labelElementId.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(

        function (eachTodo) {
            let eachTodoId = "todo" + eachTodo.uniqueValue;

            if (eachTodoId === deleteIconId) {
                return true;
            }
            else {
                return false;
            }
        }

    );


    let todoObject = todoList[todoObjectIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    }
    else {
        todoObject.isChecked = true;
    }

}




// todo item delete function
function todoItemDelete(deleteIconId) {
    let deleteIconElement = document.getElementById(deleteIconId);
    toDoItemContainer.removeChild(deleteIconElement);

    let deletedElementIndex = todoList.findIndex(

        function (eachTodo) {
            let eachTodoId = "todo" + eachTodo.uniqueValue;

            if (eachTodoId === deleteIconId) {
                return true;
            }
            else {
                return false;
            }
        }

    );


    todoList.splice(deletedElementIndex, 1);
}





saveBtn.onclick = function () {
    let stringifiedTodoList = JSON.stringify(todoList);
    localStorage.setItem("todoList", stringifiedTodoList);
}





function createAndAppendTodDoItem(todo) {

    // unique id for each checkbox
    let checkBoxId = "checkbox" + todo.uniqueValue;
    // unique id for each label
    let labelId = "label" + todo.uniqueValue;
    // unique id for each delete icon
    let deleteIconId = "todo" + todo.uniqueValue;







    // create HTML List Item element dynamically
    let toDoElement = document.createElement("li");
    toDoElement.id = deleteIconId;
    toDoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    toDoItemContainer.appendChild(toDoElement);







    // create HTML checkbox Input element dynamically
    let toDoInput = document.createElement("input");
    toDoInput.type = "checkbox";
    toDoInput.id = checkBoxId;
    toDoInput.checked = todo.isChecked;
    toDoInput.onclick = function () {
        onTodoStatusChange(checkBoxId, labelId, deleteIconId);
    };
    toDoInput.classList.add("checkbox-input");
    toDoElement.appendChild(toDoInput);





    // Create a div element to contain the label and delete icon
    let labelContainerElement = document.createElement("div");
    labelContainerElement.classList.add("label-container", "d-flex", "flex-row", "justify-content-evenly");
    toDoElement.appendChild(labelContainerElement);





    // Create a label element
    let labelElement = document.createElement("label");
    labelElement.textContent = todo.text;
    labelElement.setAttribute("for", checkBoxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");

    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }

    labelContainerElement.appendChild(labelElement);





    // Create a div element to contain the delete icon
    let createIconContainer = document.createElement("div");
    createIconContainer.classList.add("delete-icon-container");
    labelContainerElement.appendChild(createIconContainer);




    // create a icon element
    let createIconElement = document.createElement("i");
    createIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    createIconElement.onclick = function () {
        todoItemDelete(deleteIconId);
    };
    createIconContainer.appendChild(createIconElement);





}



// add tasks to the list
for (let todo of todoList) {
    createAndAppendTodDoItem(todo);
}





// add todo task dynamically throuugh the input field
function onAddTodoItem() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;


    // if user not enter any task in input field which throw a warning alert
    if (userInputValue === "") {
        alert("please enter your task!!!");
        return;
    }

    // count the todo items
    todosCount += 1;

    let newTodoObject = {
        text: userInputValue,
        uniqueValue: todosCount,
        isChecked: false
    }


    console.log(todoList);


    todoList.push(newTodoObject);
    createAndAppendTodDoItem(newTodoObject);
    // clear the input field after adding the task
    userInputElement.value = "";

}




// event listner for add tasks by user input field
addTodoButton.onclick = function () {
    onAddTodoItem();
};
