'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }
};

AppState.prototype.saveToLocalStorage = function () {
  // Save product data to local storage
  const productData = JSON.stringify(this.allProducts);
  localStorage.setItem('productData', productData);
};

AppState.prototype.loadItems = function () {
  // Retrieve data from local storage instead of creating new Products on each page load
  const savedProductData = localStorage.getItem('productData');
  
  if (savedProductData) {
    this.allProducts = JSON.parse(savedProductData);
  } else {
    this.instantiateProducts();
  }
};

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
