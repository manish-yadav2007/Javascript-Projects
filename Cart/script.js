



let cartItems = [
    {
        productName: "Casual Black Polo",
        price: 2500,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product1_n2tuf8.jpg"
    }, {
        productName: "Casual Blue Polo",
        price: 2200,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323229/product3_pe31ek.jpg"
    },
    {
        productName: "Brown Hoodie",
        price: 2000,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product2_snbo3g.jpg"
    }, 
    {
        productName: "Cream Jacket",
        price: 2300,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product4_yujcp0.jpg"
    }, 
    {
        productName: "Casual Green Polo",
        price: 2100,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product5_scoqub.jpg"
    }, 
    {
        productName: "Casual Red Polo",
        price: 2400,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323227/product8_n4rces.jpg"
    },
    {
        productName: "Casual Yellow Polo",
        price: 2100,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323226/product7_qehnjy.jpg"
    }, 
    {
        productName: "Casual Pink Polo",
        price: 2200,
        productImage: "https://res.cloudinary.com/dyjo8b263/image/upload/v1750323225/product6_cmxlzc.jpg"
    }
]





let productSectionEl = document.getElementById("productSection"); 


// create Product Card Main Container
let productCardMainContainer = document.createElement("div");
productCardMainContainer.classList.add("product-content"); 
productSectionEl.append(productCardMainContainer);


let createAndAppendCartItems = (items) => {




    // create Product Card Container
    let createProductCardContainer = document.createElement("div");
    createProductCardContainer.classList.add("product-box", "shadow-sm");
    productCardMainContainer.appendChild(createProductCardContainer);



    // create product Image Container

    let createProductImageContainer = document.createElement("div");
    createProductImageContainer.classList.add("img-container");
    createProductCardContainer.appendChild(createProductImageContainer);





    // create Product Image
    let createProductImage = document.createElement("img");
    createProductImage.setAttribute("src", items.productImage);
    createProductImage.classList.add("img-fluid"); 
    createProductImageContainer.appendChild(createProductImage);



    // create product name title 

    let createProductName = document.createElement("h3");
    createProductName.innerText = items.productName;    
    createProductName.textContent = items.productName;
    createProductName.classList.add("product-name"); 
    createProductCardContainer.appendChild(createProductName);


    // create price and cart containmer 

    let createPriceAndCartContainer = document.createElement("div");
    createPriceAndCartContainer.classList.add("price-and-cart"); 
    createProductCardContainer.appendChild(createPriceAndCartContainer);



    // create price element 

    let createPrice = document.createElement("h3");
    createPrice.innerText = items.price;
    createPrice.classList.add("price");
    createPriceAndCartContainer.appendChild(createPrice);


    // create cart icon 


    let createCartIcon = document.createElement("i");
    createCartIcon.classList.add( "fa-solid", "fa-cart-plus", "add-cart");
    createPriceAndCartContainer.appendChild(createCartIcon);


}




for(let item of cartItems) {
    createAndAppendCartItems(item);
}