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
    const id = this.nextCategoryId;
    this.nextCategoryId++;
    const category = new Category(id, name);
    this.categories.push(category);
    return category;
  }

  getCategoryById(id) {
    return this.categories.find((category) => category.id === id);
  }

  updateCategory(id, name) {
    const category = this.getCategoryById(id);
    category.name = name;
  }

  // Delete category and all products
  deleteCategory(id) {
    const category = this.getCategoryById(id);
    const index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }
}

class ProductService {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(name, price, category) {
    const id = this.nextProductId;
    this.nextProductId++;
    const product = new Product(id, name, price, category);
    category.products.push(product);
    this.products.push(product);
    return product;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(id, name, price, category) {
    const product = this.getProductById(id);
    product.name = name;
    product.price = price;
    product.category = category;
  }

  deleteProduct(id) {
    const product = this.getProductById(id);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}

const categoryService = new CategoryService();
const productService = new ProductService();

let aux = -1;

// Function to populate the category selection menu
function populateCategorySelection() {
  let options = "";

  categoryService.categories.forEach((category) => {
    options += `<option value="${category.id}">${category.name}</option>`;
  });

  document.getElementById("productCategory").innerHTML = options;
}

// Function to display categories and products on the page
function displayCategoriesAndProducts() {
  let html = "";

  categoryService.categories.forEach((category) => {
    html += `
      <li>
        <div class="categoriesList">
          <span><b>Categoria:</b> ${category.name}</span>
          <div>
            <button class="editButton" onclick="editCategory(${category.id})"><i class="fa-solid fa-pencil"></i></button>
            <button class="deleteButton" onclick=""><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <ul class="productsListByCategory">`; // Abra a lista de produtos dentro da categoria
    category.products.forEach((product) => {
      html += `
                <li>
                  <div class="productList">
                    <span><b>Produto:</b> ${product.name} - <b>Preço:</b> R$ ${product.price}</span>
                    <div>
                      <button class="editButton"><i class="fa-solid fa-pencil"></i></button>
                      <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                </li>`;
    });
    html += `</ul></li>`; // Feche a lista de produtos dentro da categoria
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
  const category = categoryService.categories.find(
    (category) => category.id == productCategory
  );

  productService.addProduct(productName, productPrice, category);
  displayCategoriesAndProducts();
  clearFormFields(); // Clear form fields
}

function editCategory(id) {
  const category = categoryService.getCategoryById(id);
  document.getElementById("categoryName").value = category.name;
  document.getElementById("categoryName").focus();
  document.getElementById("editCategoryButton").classList.remove("hidden");
  document.getElementById("createCategoryButton").classList.add("hidden");
  aux = id;
}

function updateCategory() {
  const categoryName = document.getElementById("categoryName").value;
  categoryService.updateCategory(aux, categoryName);
  aux = -1;

  document.getElementById("editCategoryButton").classList.add("hidden");
  document.getElementById("createCategoryButton").classList.remove("hidden");
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
