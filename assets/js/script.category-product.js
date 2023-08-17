class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.products = [];
  }
}

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

const categoryService = new CategoryService();
const productService = new ProductService();

// Function to populate the category selection menu
function populateCategorySelection() {
  let options = "";

  categoryService.listCategories().forEach((category) => {
    options += `<option value="${category.name}">${category.name}</option>`;
  });

  document.getElementById("productCategory").innerHTML = options;
}

// Function to display categories and products on the page
function displayCategoriesAndProducts() {
  let html = "";

  categoryService.listCategories().forEach((category) => {
    html += `<li><b>Categoria:</b> ${category.name}</li>`;
    category.products.forEach((product) => {
      html += `<ul><li><b>Produto:</b> ${product.name} - <b>Preço:</b> R$ ${product.price} - <b>Categoria:</b> ${category.name}</li></ul>`;
    });
  });

  document.getElementById("categoriesList").innerHTML = html;
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
