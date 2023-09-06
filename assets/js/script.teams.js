//console.log("script.teams.js loaded");

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
    console.log("Equipes: ", this.equipes);
  }

  // R = Read
  listarEquipes() {
    return this.equipes;
  }

  listarEquipePorId(id) {
    return this.equipes.find((equipe) => equipe.id === id);
  }
}

const equipeService = new EquipeService();

function criarEquipe() {
  const nomeDaEquipe = document.getElementById("equipe").value;
  const quantidadeDeIntegrantes = Number(
    document.getElementById("quantidade").value
  );

  const novaEquipe = new Equipe(nomeDaEquipe, quantidadeDeIntegrantes);

  equipeService.adicionarEquipe(novaEquipe);

  listarEquipes();

  //console.log("Nova equipe: ", novaEquipe);

  //console.log("Nome da equipe: ", nomeDaEquipe);
  //console.log("Quantidade de integrantes: ", quantidadeDeIntegrantes);
}

function listarEquipes() {
  const listaDeEquipes = equipeService.listarEquipes();

  const elementoListaDeEquipes = document.getElementById("lista-de-equipes");
  elementoListaDeEquipes.innerHTML = "";

  let content = "";

  listaDeEquipes.forEach((equipe) => {
    content += `
    <div onclick="listarEquipeUnica(${equipe.id})">
      
      <p>
        Nome: ${equipe.nome}
      </p>
      
    </div>
    `;
  });

  elementoListaDeEquipes.innerHTML = content;
}

function listarEquipeUnica(id) {
  const equipe = equipeService.listarEquipePorId(id);

  const elementoEquipe = document.getElementById("equipe-unica");
  elementoEquipe.innerHTML = "";

  let content = `
    <div>
      <p>
        ID: ${equipe.id}
      </p>
      <p>
        Nome: ${equipe.nome}
      </p>
      <p>
        Total de jogadores: ${equipe.totalJogadores}
      </p>
      <p>
        Jogadores titulares: ${equipe.titulares}
      </p>
      <p>
        Jogadores reservas: ${equipe.reservas}
      </p>
    </div>
    `;

  elementoEquipe.innerHTML = content;
}
