//console.log("script.teams.js loaded");

class Equipe {
  constructor(nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
  }
}

class EquipeService {
  constructor() {
    this.equipes = [];
  }

  adicionarEquipe(equipe) {
    this.equipes.push(equipe);
    console.log("Equipes: ", this.equipes);
  }
}

const equipeService = new EquipeService();

function criarEquipe() {
  const nomeDaEquipe = document.getElementById("equipe").value;
  const quantidadeDeIntegrantes = document.getElementById("quantidade").value;

  const novaEquipe = new Equipe(nomeDaEquipe, quantidadeDeIntegrantes);

  equipeService.adicionarEquipe(novaEquipe);

  //console.log("Nova equipe: ", novaEquipe);

  //console.log("Nome da equipe: ", nomeDaEquipe);
  //console.log("Quantidade de integrantes: ", quantidadeDeIntegrantes);
}
