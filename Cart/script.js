let cartIconEl = document.getElementById("cart-icon");
let cartEl = document.querySelector(".cart");
let cartCloseEl = document.getElementById("cartClose");
let cartContentContainer = document.querySelector(".cart-content");
let cartPriceEl = document.getElementById("cartPrice"); 
let cartItems = [
    { productName: "Casual Black Polo", price: 2500, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product1_n2tuf8.jpg", productId: 1000 },
    { productName: "Casual Blue Polo", price: 2200, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323229/product3_pe31ek.jpg", productId: 1001 },
    { productName: "Brown Hoodie", price: 2000, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product2_snbo3g.jpg", productId: 1002 },
    { productName: "Cream Jacket", price: 2300, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product4_yujcp0.jpg", productId: 1003 },
    { productName: "Casual Green Polo", price: 2100, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product5_scoqub.jpg", productId: 1004 },
    { productName: "Casual Red Polo", price: 2400, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product8_n4rces.jpg", productId: 1005 },
    { productName: "Casual Yellow Polo", price: 2100, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product7_qehnjy.jpg", productId: 1006 },
    { productName: "Casual Pink Polo", price: 2200, productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product6_cmxlzc.jpg", productId: 1007 }
];

let cartProductIds = new Set(); // Prevent duplicate cart entries
let productSectionEl = document.getElementById("productSection");

// Create main container
let productCardMainContainer = document.createElement("div");
productCardMainContainer.classList.add("product-content");
productSectionEl.append(productCardMainContainer);





// Create product cards dynamically
let createAndAppendCartItems = (item) => {
    let createProductCardContainer = document.createElement("div");
    createProductCardContainer.classList.add("product-box", "shadow-sm");
    productCardMainContainer.appendChild(createProductCardContainer);

    let createProductImageContainer = document.createElement("div");
    createProductImageContainer.classList.add("img-container");
    createProductCardContainer.appendChild(createProductImageContainer);

    let createProductImage = document.createElement("img");
    createProductImage.src = item.productImage;
    createProductImage.classList.add("img-fluid");
    createProductImageContainer.appendChild(createProductImage);

    let createProductName = document.createElement("h3");
    createProductName.classList.add("product-name");
    createProductName.innerText = item.productName;
    createProductCardContainer.appendChild(createProductName);

    let createPriceAndCartContainer = document.createElement("div");
    createPriceAndCartContainer.classList.add("price-and-cart");
    createProductCardContainer.appendChild(createPriceAndCartContainer);

    let createPrice = document.createElement("h3");
    createPrice.classList.add("price");
    createPrice.innerText = `₹${item.price}`;
    createPriceAndCartContainer.appendChild(createPrice);

    let createCartIcon = document.createElement("i");
    createCartIcon.classList.add("fa-solid", "fa-cart-plus", "add-cart");
    createCartIcon.setAttribute("data-id", item.productId); // Data attribute for tracking
    createPriceAndCartContainer.appendChild(createCartIcon);


    // Attach individual event listener here
    createCartIcon.addEventListener("click", () => {
        addToCart(item);
    });
};






// Loop through all items to create cards
for (let item of cartItems) {
    createAndAppendCartItems(item);
}






// Toggle Cart visibility
cartIconEl.addEventListener("click", () => cartEl.classList.add("active"));
cartCloseEl.addEventListener("click", () => cartEl.classList.remove("active"));












// Add to Cart Function
let addToCart = (item) => {



    if (cartProductIds.has(item.productId)) {
        alert("🛒 Item already in cart!");
        return;
    }

    cartProductIds.add(item.productId);

    let cartItemsProductId = "cart" + item.productId;

    let createCartProductContainer = document.createElement("div");
    createCartProductContainer.classList.add("cart-box");
    createCartProductContainer.id = cartItemsProductId;
    cartContentContainer.appendChild(createCartProductContainer);

    let createCartProductImage = document.createElement("img");
    createCartProductImage.src = item.productImage;
    createCartProductContainer.appendChild(createCartProductImage);

    let createCartDetailsContainer = document.createElement("div");
    createCartDetailsContainer.classList.add("cart-details");
    createCartProductContainer.appendChild(createCartDetailsContainer);

    let createCartProductName = document.createElement("h3");
    createCartProductName.classList.add("cart-product-title");
    createCartProductName.innerText = item.productName;
    createCartDetailsContainer.appendChild(createCartProductName);

    let createCartPriceSpan = document.createElement("span");
    createCartPriceSpan.classList.add("cart-price");
    createCartPriceSpan.innerText = `₹${item.price}`;
    createCartDetailsContainer.appendChild(createCartPriceSpan);


    let cartQuantityContainer = document.createElement("div");
    cartQuantityContainer.classList.add("cart-quantity");
    createCartDetailsContainer.appendChild(cartQuantityContainer);

    let createQuantityDecrementBtn = document.createElement("button");
    createQuantityDecrementBtn.innerText = "-";
    cartQuantityContainer.appendChild(createQuantityDecrementBtn);

    let createQuantity = document.createElement("span");
    createQuantity.classList.add("quantity");
    createQuantity.innerText = "1";
    cartQuantityContainer.appendChild(createQuantity);

    let createQuantityIncrementBtn = document.createElement("button");
    createQuantityIncrementBtn.innerText = "+";
    cartQuantityContainer.appendChild(createQuantityIncrementBtn);

    let createProductRemoveCrossIcon = document.createElement("i");
    createProductRemoveCrossIcon.classList.add("fa-solid", "fa-trash-arrow-up", "cart-remove");
    createCartProductContainer.appendChild(createProductRemoveCrossIcon);


    createProductRemoveCrossIcon.addEventListener("click", () => {
        let conformMsg = confirm("Are You Sure to delete this item form Cart?");
        if (conformMsg) {
            cartContentContainer.removeChild(createCartProductContainer);
            cartProductIds.delete(item.producId);
        }
    })

    
};


// let showCartPrice = () => {
//     let totalPrice = cartPriceEl.innerHTML; 
//     totalPrice += item.price; 

// }