class Equipe {
  constructor(nome, titulares) {
    this.id = this.gerarId();
    this.nome = nome;
    this.titulares = titulares;
    this.reservas = this.calcularReservas();
    this.totalJogadores = this.calcularTotalJogadores();
  }

  gerarId() {
    return Math.floor(Math.random() * 1000);
  }

  calcularReservas() {
    return Math.floor(this.titulares / 2);
  }

  calcularTotalJogadores() {
    return this.titulares + this.reservas;
  }
}

class EquipeService {
  constructor() {
    this.equipes = [];
  }

  // CRUD = Create, Read, Update, Delete
  // C = Create
  adicionarEquipe(parametro) {
    this.equipes.push(parametro);
  }

  // R = Read
  listarEquipes() {
    return this.equipes;
  }

  listarEquipesPorId(parametro) {
    return this.equipes.find((equipe) => equipe.id == parametro);
  }

  // U = Update
  atualizarEquipe(id, nome, titulares) {
    const equipe = this.listarEquipesPorId(id);

    equipe.nome = nome;
    equipe.titulares = titulares;
    equipe.reservas = equipe.calcularReservas();
    equipe.totalJogadores = equipe.calcularTotalJogadores();

    return equipe;
  }

  // D = Delete
  deletarEquipe(parametro) {
    return (this.equipes = this.equipes.filter(
      (equipe) => equipe.id != parametro
    ));
  }
}

const equipeService = new EquipeService();

// alert("Testado!");

function criarEquipe() {
  const nome = document.getElementById("nomeDaEquipe").value;
  const titulares = Number(document.getElementById("quantidade").value);

  const novaEquipe = new Equipe(nome, titulares);

  equipeService.adicionarEquipe(novaEquipe);

  listarEquipes();
  limparInputs();

  // console.log(novaEquipe);
  // console.log(equipeService.equipes);

  // alert("Nome da equipe: " + nome + "\nQuantidade de titulares: " + titulares);
}

function listarEquipes() {
  const equipes = equipeService.listarEquipes();

  const elementoLista = document.getElementById("listarEquipes");
  elementoLista.innerHTML = "";

  let content = "";

  equipes.forEach((equipe) => {
    content += `
    <div onclick="listarEquipesPorId(${equipe.id})">
      <p>Nome: ${equipe.nome}</p>
    </div>
    `;
  });

  elementoLista.innerHTML = content;
  //console.log(equipes);
}

function listarEquipesPorId(id) {
  const equipe = equipeService.listarEquipesPorId(id);
  document.getElementById("listarEquipeUnica").classList.remove("hidden");

  const elementoLista = document.getElementById("listarEquipeUnica");
  elementoLista.innerHTML = "";

  let content = `
    <div>
      <p> Id: ${equipe.id}</p>
      <p> Nome: ${equipe.nome}</p>
      <p> Total de jogadores: ${equipe.totalJogadores}</p>
      <p> Titulares: ${equipe.titulares}</p>
      <p> Reservas: ${equipe.reservas}</p>
      <button onclick="atualizarEquipe(${equipe.id})">Editar</button>
      <button onclick="deletarEquipe(${equipe.id})">Deletar</button>
    </div>
  `;

  elementoLista.innerHTML = content;

  //console.log(equipe);
}

let aux = null;

function atualizarEquipe(id) {
  const equipe = equipeService.listarEquipesPorId(id);

  document.getElementById("nomeDaEquipe").value = equipe.nome;
  document.getElementById("quantidade").value = equipe.titulares;

  document.getElementById("botaoCadastrar").classList.add("hidden");
  document.getElementById("botaoEditar").classList.remove("hidden");

  aux = id;
}

function editarEquipe() {
  const nome = document.getElementById("nomeDaEquipe").value;
  const titulares = Number(document.getElementById("quantidade").value);

  equipeService.atualizarEquipe(aux, nome, titulares);

  listarEquipes();

  document.getElementById("botaoCadastrar").classList.remove("hidden");
  document.getElementById("botaoEditar").classList.add("hidden");

  document.getElementById("listarEquipeUnica").classList.add("hidden");
  limparInputs();

  aux = null;
}

function limparInputs() {
  document.getElementById("nomeDaEquipe").value = "";
  document.getElementById("quantidade").value = "";
}

function deletarEquipe(id) {
  equipeService.deletarEquipe(id);

  listarEquipes();

  document.getElementById("listarEquipeUnica").classList.add("hidden");
}
