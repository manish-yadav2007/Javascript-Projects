// ------------------------ Constants & State ------------------------
const cartIconEl = document.getElementById("cart-icon");
const cartEl = document.querySelector(".cart");
const cartCloseEl = document.getElementById("cartClose");
const cartContentContainer = document.querySelector(".cart-content");
const totalPriceEl = document.querySelector(".total-price");

// Retrieve cart from localStorage or initialize empty
let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];

// Product list
const cartItems = [
    { productName: "Casual Black Polo", price: 2500, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product1_n2tuf8.jpg", productId: 1000 },
    { productName: "Casual Blue Polo", price: 2200, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323229/product3_pe31ek.jpg", productId: 1001 },
    { productName: "Brown Hoodie", price: 2000, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product2_snbo3g.jpg", productId: 1002 },
    { productName: "Cream Jacket", price: 2300, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product4_yujcp0.jpg", productId: 1003 },
    { productName: "Casual Green Polo", price: 2100, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product5_scoqub.jpg", productId: 1004 },
    { productName: "Casual Red Polo", price: 2400, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product8_n4rces.jpg", productId: 1005 },
    { productName: "Casual Yellow Polo", price: 2100, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product7_qehnjy.jpg", productId: 1006 },
    { productName: "Casual Pink Polo", price: 2200, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product6_cmxlzc.jpg", productId: 1007 }
];

const productSectionEl = document.getElementById("productSection");
const productCardMainContainer = document.createElement("div");
productCardMainContainer.classList.add("product-content");
productSectionEl.append(productCardMainContainer);

// ------------------------ Persistence Functions ------------------------
function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
    localStorage.setItem("cartVisible", "true");
}

function restoreCartVisibility() {
    const visible = localStorage.getItem("cartVisible");
    if (visible === "true") cartEl.classList.add("active");
}

// ------------------------ Utility Functions ------------------------
function updateTotalPrice() {
    const total = cartItemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPriceEl.textContent = `₹${total}`;
}

// This function creates a DOM element for a cart item
function createCartItemDOM(item) {
    // Create a div element to hold the cart item
    const cartBox = document.createElement("div");
    // Add a class to the div element
    cartBox.classList.add("cart-box");
    // Set the data-id attribute to the product id
    cartBox.setAttribute("data-id", item.productId);

    // Create an img element to hold the product image
    const img = document.createElement("img");
    // Set the src attribute to the product image
    img.src = item.productImage;

    const cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-details");

    const title = document.createElement("h3");
    title.classList.add("cart-product-title");
    title.textContent = item.productName;

    const price = document.createElement("span");
    price.classList.add("cart-price");
    price.textContent = `₹${item.price}`;

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("cart-quantity");

    const decBtn = document.createElement("button");
    decBtn.textContent = "-";
    decBtn.addEventListener("click", () => {
        if (item.quantity > 1) {
            item.quantity--;
            quantitySpan.textContent = item.quantity;
            saveCartToLocalStorage();
            updateTotalPrice();
        }
    });

    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity");
    quantitySpan.textContent = item.quantity;

    const incBtn = document.createElement("button");
    incBtn.textContent = "+";
    incBtn.addEventListener("click", () => {
        item.quantity++;
        quantitySpan.textContent = item.quantity;
        saveCartToLocalStorage();
        updateTotalPrice();
    });

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("fa-solid", "fa-trash-arrow-up", "cart-remove");
    removeBtn.addEventListener("click", () => {
        const index = cartItemsArray.findIndex(ci => ci.productId === item.productId);
        if (index !== -1) {
            cartItemsArray.splice(index, 1);
            cartBox.remove();
            saveCartToLocalStorage();
            updateTotalPrice();
        }
    });

    quantityContainer.append(decBtn, quantitySpan, incBtn);
    cartDetails.append(title, price, quantityContainer);
    cartBox.append(img, cartDetails, removeBtn);
    cartContentContainer.appendChild(cartBox);
}

// ------------------------ Cart Logic ------------------------
//This function adds an item to the cart
//It first checks if the item already exists in the cart
//If it does, it alerts the user and returns
//If it doesn't, it creates a new item with a quantity of 1 and adds it to the cart
//It then creates a DOM element for the new item, saves the cart to local storage, and updates the total price

function addToCart(item) {
    //Check if the item already exists in the cart
    const exists = cartItemsArray.find(ci => ci.productId === item.productId);
    if (exists) {
        //Alert the user that the item is already in their cart
        alert("This product is already in your cart.");
        return;
    }
    //Create a new item with a quantity of 1
    const newItem = { ...item, quantity: 1 };
    //Add the new item to the cart
    cartItemsArray.push(newItem);
    //Create a DOM element for the new item
    createCartItemDOM(newItem);
    //Save the cart to local storage
    saveCartToLocalStorage();
    //Update the total price
    updateTotalPrice();
}

function createAndAppendCartItems(item) {
    const container = document.createElement("div");
    container.classList.add("product-box", "shadow-sm");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.src = item.productImage;
    img.classList.add("img-fluid");
    imgContainer.appendChild(img);

    const name = document.createElement("h3");
    name.textContent = item.productName;
    name.classList.add("product-name");

    const priceCartContainer = document.createElement("div");
    priceCartContainer.classList.add("price-and-cart");

    const price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = `₹${item.price}`;

    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa-solid", "fa-cart-plus", "add-cart");
    cartIcon.addEventListener("click", () => addToCart(item));

    priceCartContainer.append(price, cartIcon);
    container.append(imgContainer, name, priceCartContainer);
    productCardMainContainer.appendChild(container);
}



// ------------------------ Initialization ------------------------
//Loop through each item in the cartItems array and call the createAndAppendCartItems function for each item
cartItems.forEach(item => createAndAppendCartItems(item));

//Loop through each item in the cartItemsArray array and call the createCartItemDOM function for each item
cartItemsArray.forEach(item => createCartItemDOM(item));
//Call the updateTotalPrice function to update the total price of the cart
updateTotalPrice();
//Call the restoreCartVisibility function to make the cart visible
restoreCartVisibility();





// ------------------------ UI Events ------------------------
// Add an event listener to the cart icon element
cartIconEl.addEventListener("click", () => {
    // Add the "active" class to the cart element
    cartEl.classList.add("active");
    // Set the "cartVisible" item in local storage to "true"
    localStorage.setItem("cartVisible", "true");
});

// Add an event listener to the cart close element
cartCloseEl.addEventListener("click", () => {
    cartEl.classList.remove("active");
    localStorage.setItem("cartVisible", "false");
});
