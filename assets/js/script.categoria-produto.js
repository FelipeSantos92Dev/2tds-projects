// main.js

// Categoria
class Categoria {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.produtos = [];
  }
}

// Produto
class Produto {
  constructor(id, nome, preco, categoria) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }
}

// CategoriaService
class CategoriaService {
  constructor() {
    this.categorias = [];
    this.nextCategoriaId = 1;
  }

  adicionarCategoria(nome) {
    const id = this.nextCategoriaId++;
    const categoria = new Categoria(id, nome);
    this.categorias.push(categoria);
    return categoria;
  }

  buscarCategoriaPorId(id) {
    return this.categorias.find((categoria) => categoria.id === id);
  }

  listarCategorias() {
    return this.categorias;
  }
}

// ProdutoService
class ProdutoService {
  constructor() {
    this.produtos = [];
    this.nextProdutoId = 1;
  }

  adicionarProduto(nome, preco, categoria) {
    const id = this.nextProdutoId++;
    const produto = new Produto(id, nome, preco, categoria);
    categoria.produtos.push(produto);
    this.produtos.push(produto);
    return produto;
  }

  buscarProdutoPorId(id) {
    return this.produtos.find((produto) => produto.id === id);
  }

  listarProdutos() {
    return this.produtos;
  }
}

// Criar instâncias dos serviços de categorias e produtos
const categoriaService = new CategoriaService();
const produtoService = new ProdutoService();

// Função para popular o menu de seleção de categorias
function popularSelecaoCategorias() {
  const selectElement = document.getElementById("produtoCategoria");
  selectElement.innerHTML = ""; // Limpa os elementos existentes

  categoriaService.listarCategorias().forEach((categoria) => {
    const optionElement = document.createElement("option");
    optionElement.value = categoria.nome;
    optionElement.textContent = categoria.nome;
    selectElement.appendChild(optionElement);
  });
}

// Função para exibir categorias e produtos na página
function exibirCategoriasEProdutos() {
  const categoriasLista = document.getElementById("categoriasLista");
  categoriasLista.innerHTML = "";

  categoriaService.listarCategorias().forEach((categoria) => {
    const categoriaItem = document.createElement("li");
    categoriaItem.textContent = `Categoria: ${categoria.nome}`;
    const produtosLista = document.createElement("ul");

    categoria.produtos.forEach((produto) => {
      const produtoItem = document.createElement("li");
      produtoItem.textContent = `Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${categoria.nome}`;
      produtosLista.appendChild(produtoItem);
    });

    categoriaItem.appendChild(produtosLista);
    categoriasLista.appendChild(categoriaItem);
  });
}

// Capturar o formulário de categoria e adicionar um manipulador de evento
function createCategory() {
  const categoriaNome = document.getElementById("categoriaNome").value;
  categoriaService.adicionarCategoria(categoriaNome);
  popularSelecaoCategorias();
  exibirCategoriasEProdutos();
}

// Capturar o formulário de produto e adicionar um manipulador de evento
function createProduct() {
  const produtoNome = document.getElementById("produtoNome").value;
  const produtoPreco = parseFloat(
    document.getElementById("produtoPreco").value
  );
  const produtoCategoria = document.getElementById("produtoCategoria").value;
  const categoria = categoriaService
    .listarCategorias()
    .find((categoria) => categoria.nome === produtoCategoria);
  produtoService.adicionarProduto(produtoNome, produtoPreco, categoria);
  exibirCategoriasEProdutos();
}

// Inicializar a página
popularSelecaoCategorias();
exibirCategoriasEProdutos();
