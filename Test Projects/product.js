/*
let products = [];


function addProduct(name, price, image) {
    const product = { name, price, image };
    products.push(product);
}


function updateClientDisplay() {
    const productListDiv = document.getElementById("clientProductList");
    for (const product of products) {
      
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <div class="client-product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <img src="${product.image}" alt="${product.name}">
                <!-- Add additional client-specific HTML here if needed -->
            </div>
        `;
        productListDiv.appendChild(productDiv);
    }
}
*/
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

// Array to store products
let products = [];

// Function to add a product
function addProduct(name, price, image) {
    const product = { name, price, image };
    products.push(product);
    // Update admin and client displays
    updateAdminDisplay();
    updateClientDisplay();
}

// Function to update admin display
function updateAdminDisplay() {
    const productListDiv = document.getElementById("adminProductList");
    productListDiv.innerHTML = ""; // Clear previous content
    for (const product of products) {
        // Create HTML elements to display product information for admin
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <div class="admin-product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <img src="${product.image}" alt="${product.name}">
            </div>
        `;
        productListDiv.appendChild(productDiv);
    }
}

// Function to update client display
function updateClientDisplay() {
    const productListDiv = document.getElementById("clientProductList");
    productListDiv.innerHTML = ""; // Clear previous content
    for (const product of products) {
        // Create HTML elements to display product information for client
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <div class="client-product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <img src="${product.image}" alt="${product.name}">
            </div>
        `;
        productListDiv.appendChild(productDiv);
    }
}

});





































