let todoItemsContainerElement = document.getElementById('todoItemsContainer');
let addTodoBtn = document.getElementById('addTodoButton');
let saveBtnEl = document.getElementById("saveBtn");






let getTodoListFromLocalStorage = () => {
    let retrieveTodoList = localStorage.getItem("saveTodo");
    let parsedData = JSON.parse(retrieveTodoList);


    if (parsedData === null) {
        return [];
    }
    else {
        return parsedData;
    }
}




// create todo list object 

let todoList = getTodoListFromLocalStorage();






saveBtnEl.addEventListener("click", () => {
    localStorage.setItem("saveTodo", JSON.stringify(todoList));
})





let todosCount = todoList.length;











function onTodoStatusChange(checkBoxUniqueId, labelElementUniqueId) {

    // check true of false checkbox 
    let checkBoxElement = document.getElementById(checkBoxUniqueId);
    // console.log(checkBoxElement.checked);

    // check label element 
    let labelElement = document.getElementById(labelElementUniqueId);


    if (checkBoxElement.checked === true) {
        labelElement.classList.add('checked');
    }
    else {
        labelElement.classList.remove('checked');
    }




    // labelElement.classList.toggle("checked");


}



function onDeleteTodo(trashIcon) {
    let todoElement = document.getElementById(trashIcon);
    todoItemsContainerElement.removeChild(todoElement);


    // find each todo id using findIndex 

    let deletedElementIndex = todoList.findIndex(
        (eachTodo) => {


            // if eachTodId is equal to todoId  then reture the first index 
            let eachTodoId = "todo" + eachTodo.uniqueId;

            if (eachTodoId === trashIcon) {
                return true;
            }
            else {
                return false;
            }



        }

    );


    todoList.splice(deletedElementIndex, 1);

}





function createAndAppendTodoItem(todo) {

    let checkBoxUniqueId = "checkbox" + todo.uniqueId;
    let labelElementUniqueId = "label" + todo.uniqueId;
    let trashIcon = "todo" + todo.uniqueId;



    // create list item 

    let createListItem = document.createElement('li');
    createListItem.classList.add("todo-item-container", "d-flex", "flex-row");
    createListItem.id = trashIcon;
    todoItemsContainerElement.appendChild(createListItem);



    // create input check box 

    let createInputCheckbox = document.createElement('input');
    createInputCheckbox.type = "checkbox";
    createInputCheckbox.classList.add("checkbox-input");
    createInputCheckbox.id = checkBoxUniqueId;
    createInputCheckbox.onclick = function () {
        onTodoStatusChange(checkBoxUniqueId, labelElementUniqueId);
    }
    createListItem.appendChild(createInputCheckbox);





    // label container

    let createLabelContainer = document.createElement('div');
    createLabelContainer.classList.add("label-container", "d-flex", "flex-row");
    createListItem.appendChild(createLabelContainer);







    // create label element

    let createLabelElement = document.createElement('label');
    createLabelElement.classList.add("checkbox-label");
    createLabelElement.setAttribute("for", checkBoxUniqueId);
    createLabelElement.textContent = todo.name;
    createLabelElement.id = labelElementUniqueId;
    createLabelContainer.appendChild(createLabelElement);







    // create delete container

    let createDeleteContainer = document.createElement('div');
    createDeleteContainer.classList.add("delete-icon-container");
    createLabelContainer.appendChild(createDeleteContainer);
    console.log(createDeleteContainer)




    // icon element 

    let createIconElement = document.createElement('i');
    createIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    createIconElement.onclick = function () {
        onDeleteTodo(trashIcon);
    }
    createDeleteContainer.appendChild(createIconElement);
    console.log(createIconElement)




}


for (let todo of todoList) {
    createAndAppendTodoItem(todo);
}



function onAddTodoItem() {
    let userInputElement = document.getElementById('todoUserInput');
    let userEnteredValue = userInputElement.value;

    if (userEnteredValue === "") {
        alert("Please Add Your Task In Input Box!!");
        return;
    }


    todosCount += 1;
    let newTodo = {
        name: userEnteredValue,
        uniqueId: todosCount
    }


    todoList.push(newTodo);


    createAndAppendTodoItem(newTodo);
    userInputElement.value = "";
}


addTodoBtn.onclick = function () {
    onAddTodoItem();
}








