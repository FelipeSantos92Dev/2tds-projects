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
  }

  listarEquipes() {
    return this.equipes;
  }

  removerEquipe(equipe) {
    const index = this.equipes.indexOf(equipe);
    this.equipes.splice(index, 1);
  }

  editarEquipe(equipe, novaEquipe) {
    const index = this.equipes.indexOf(equipe);
    this.equipes[index] = novaEquipe;
  }
}

function criarEquipe() {
  const nomeDaEquipe = document.getElementById("equipe").value;
  const quantidadeDeIntegrantes = document.getElementById("quantidade").value;

  const novaEquipe = new Equipe(nomeDaEquipe, quantidadeDeIntegrantes);

  console.log("Nova equipe: ", novaEquipe);

  //console.log("Nome da equipe: ", nomeDaEquipe);
  //console.log("Quantidade de integrantes: ", quantidadeDeIntegrantes);
}
