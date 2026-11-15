
// MI Marketplace JavaScript

// 1. Product search
const searchInput = document.getElementById("search");
const productList = document.getElementById("product-list");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();
  const products = productList.querySelectorAll(".product");

  products.forEach(function (product) {
    const productName = product.textContent.toLowerCase();

    if (productName.includes(searchText)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// 2. Seller button
const sellerButton = document.getElementById("seller-button");

sellerButton.addEventListener("click", function () {
  alert("Welcome to MI Marketplace! Seller registration is coming soon.");
});

// 3. Category buttons
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("You selected: " + button.textContent);
  });
});

console.log("MI Marketplace is running!");
