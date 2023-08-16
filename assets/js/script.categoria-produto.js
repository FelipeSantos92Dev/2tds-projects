// main.js

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.products = [];
  }
}

// Product
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

// CategoryService
class CategoryService {
  constructor() {
    this.categories = [];
    this.nextCategoryId = 1;
  }

  addCategory(name) {
    const id = this.nextCategoryId++;
    const category = new Category(id, name);
    this.categories.push(category);
    return category;
  }

  getCategoryById(id) {
    return this.categories.find((category) => category.id === id);
  }

  listCategories() {
    return this.categories;
  }
}

// ProductService
class ProductService {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(name, price, category) {
    const id = this.nextProductId++;
    const product = new Product(id, name, price, category);
    category.products.push(product);
    this.products.push(product);
    return product;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  listProducts() {
    return this.products;
  }
}

// Create instances of category and product services
const categoryService = new CategoryService();
const productService = new ProductService();

// Function to populate the category selection menu
function populateCategorySelection() {
  const selectElement = document.getElementById("productCategory");
  selectElement.innerHTML = ""; // Clear existing elements

  categoryService.listCategories().forEach((category) => {
    const optionElement = document.createElement("option");
    optionElement.value = category.name;
    optionElement.textContent = category.name;
    selectElement.appendChild(optionElement);
  });
}

// Function to display categories and products on the page
function displayCategoriesAndProducts() {
  const categoriesList = document.getElementById("categoriesList");
  categoriesList.innerHTML = "";

  categoryService.listCategories().forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = `Category: ${category.name}`;
    const productsList = document.createElement("ul");

    category.products.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.textContent = `Product: ${product.name}, Price: ${product.price}, Category: ${category.name}`;
      productsList.appendChild(productItem);
    });

    categoryItem.appendChild(productsList);
    categoriesList.appendChild(categoryItem);
  });
}

// Capture the category form and add an event handler
function createCategory() {
  const categoryName = document.getElementById("categoryName").value;
  categoryService.addCategory(categoryName);
  populateCategorySelection();
  displayCategoriesAndProducts();
  clearFormFields(); // Clear form fields
}

// Capture the product form and add an event handler
function createProduct() {
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productCategory = document.getElementById("productCategory").value;
  const category = categoryService
    .listCategories()
    .find((category) => category.name === productCategory);
  productService.addProduct(productName, productPrice, category);
  displayCategoriesAndProducts();
  clearFormFields(); // Clear form fields
}

// Function to clear form fields
function clearFormFields() {
  document.getElementById("categoryName").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "";
}

// Initialize the page
populateCategorySelection();
displayCategoriesAndProducts();
