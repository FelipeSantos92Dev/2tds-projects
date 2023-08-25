class Carro {
  constructor(marca, modelo, ano, cor, quilometragem, preco, imagem) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.quilometragem = quilometragem;
    this.preco = preco;
    this.imagem = imagem;
  }
}

class ListaDeCarros {
  constructor() {
    this.carros = [];
  }

  adicionarCarro(carro) {
    this.carros.push(carro);
  }
}

const todosCarros = new ListaDeCarros();

function criarCarro() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = document.getElementById("ano").value;
  const cor = document.getElementById("cor").value;
  const quilometragem = document.getElementById("quilometragem").value;
  const preco = document.getElementById("preco").value;
  const imagem = document.getElementById("imagem").value;

  const validado = camposValidos(
    marca,
    modelo,
    ano,
    cor,
    quilometragem,
    preco,
    imagem
  );

  if (validado) {
    const novoCarro = new Carro(
      marca,
      modelo,
      ano,
      cor,
      quilometragem,
      preco,
      imagem
    );

    todosCarros.adicionarCarro(novoCarro);

    limparCampos();
    mostrarCarros();
  }
}

function camposValidos(marca, modelo, ano, cor, quilometragem, preco, imagem) {
  let isValid = true;

  if (!marca) {
    mostrarErro("marca", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("marca");
  }

  if (!modelo) {
    mostrarErro("modelo", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("modelo");
  }

  if (!ano) {
    mostrarErro("ano", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("ano");
  }

  if (!cor) {
    mostrarErro("cor", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("cor");
  }

  if (!quilometragem) {
    mostrarErro("quilometragem", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("quilometragem");
  }

  if (!preco) {
    mostrarErro("preco", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("preco");
  }

  if (!imagem) {
    mostrarErro("imagem", "Campo obrigatório");
    isValid = false;
  } else {
    removerErro("imagem");
  }

  return isValid;
}

function mostrarErro(id, message) {
  document.getElementById(`${id}Error`).innerHTML = message;
  document.getElementById(id).classList.add("error");
}

function removerErro(id) {
  document.getElementById(`${id}Error`).innerHTML = "";
  document.getElementById(id).classList.remove("error");
}

function limparCampos() {
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("quilometragem").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("imagem").value = "";
}

function mostrarCarros() {
  let carCard = "";

  todosCarros.carros.forEach((carro) => {
    carCard += `
      <div class="car-card">
        <img src="${carro.imagem}" alt="${carro.marca} ${carro.modelo}">
        <h3>${carro.marca} ${carro.modelo}</h3>
        <p>Ano: ${carro.ano}</p>
        <p>Cor: ${carro.cor}</p>
        <p>Quilometragem: ${carro.quilometragem} km</p>
        <p>Diária: R$ ${carro.preco}</p>
      </div>
    `;
  });

  document.getElementById("carList").innerHTML = carCard;
}
