let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];



let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");


function deleteListItems(buttonId) {
    let btnIdElement = document.getElementById(buttonId);

    btnIdElement.parentElement.remove();


}






let createTitle = document.createElement("h1");
createTitle.textContent = "Your Ordered Items";
createTitle.classList.add("order-heading");
orderedItemsContainerEl.appendChild(createTitle);



function createAndAppendItem(items) {

    let btnId = "button" + items.uniqueNo;

    let itemId = "item" + items.uniqueNo;




    let createUlEl = document.createElement("ul");
    orderedItemsContainerEl.appendChild(createUlEl);

    let createListItem = document.createElement("li");
    createListItem.textContent = items.itemName;
    createListItem.id = itemId;
    createUlEl.appendChild(createListItem);


    let createBtn = document.createElement("button");
    createBtn.id = btnId;
    createBtn.classList.add("btn", "btn-danger");
    createBtn.textContent = "Cancel";

    createBtn.addEventListener("click", function () {
        deleteListItems(btnId, itemId);
    })
    createListItem.appendChild(createBtn);


}








for (let item of itemList) {
    createAndAppendItem(item);
}