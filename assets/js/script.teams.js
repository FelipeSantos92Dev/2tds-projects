//console.log("script.teams.js loaded");

class Equipe {
  constructor(nome, titulares) {
    this.nome = nome;
    this.titulares = titulares;
    this.reservas = this.calcularReservas();
    this.totalJogadores = this.calcularTotalJogadores();
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

  adicionarEquipe(parametro) {
    this.equipes.push(parametro);
    console.log("Equipes: ", this.equipes);
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

  //console.log("Nova equipe: ", novaEquipe);

  //console.log("Nome da equipe: ", nomeDaEquipe);
  //console.log("Quantidade de integrantes: ", quantidadeDeIntegrantes);
}
