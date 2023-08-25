class Transacao {
  constructor(descricao, valor, tipo) {
    this.descricao = descricao;
    this.valor = valor;
    this.tipo = tipo;
  }
}

class GerenciadorListaTransacoes {
  constructor() {
    this.transacoes = [];
    this.saldoAtual = 0;
    this.totalReceitas = 0;
    this.totalDespesas = 0;
  }

  adicionarTransacao(descricao, valor, tipo) {
    const transacao = new Transacao(descricao, valor, tipo);
    this.transacoes.push(transacao);
  }

  atualizarSaldo() {
    let totalReceitas = 0;
    let totalDespesas = 0;

    this.transacoes.forEach((transacao) => {
      if (transacao.tipo === "receita") {
        totalReceitas += transacao.valor;
      } else {
        totalDespesas += transacao.valor;
      }
    });

    this.saldoAtual = totalReceitas - totalDespesas;
    const saldoElement = document.getElementById("saldoAtual");
    saldoElement.innerHTML = `R$ ${this.saldoAtual.toFixed(2)}`;

    const totalReceitasElement = document.getElementById("totalReceitas");
    totalReceitasElement.innerHTML = `R$ ${totalReceitas.toFixed(2)}`;

    const totalDespesasElement = document.getElementById("totalDespesas");
    totalDespesasElement.innerHTML = `R$ ${totalDespesas.toFixed(2)}`;

    // Atualizar cor do texto do saldo com base no valor
    if (this.saldoAtual < 0) {
      saldoElement.style.color = "red";
    } else {
      saldoElement.style.color = "green";
    }
  }

  exibirTransacoes() {
    const listaDespesas = document.getElementById("listaDespesas");
    const listaReceitas = document.getElementById("listaReceitas");

    listaDespesas.innerHTML = "";
    listaReceitas.innerHTML = "";

    this.transacoes.forEach((transacao) => {
      const itemLista = document.createElement("li");
      itemLista.innerHTML = `<b>${
        transacao.descricao
      }:</b> R$ ${transacao.valor.toFixed(2)}`;

      if (transacao.tipo === "despesa") {
        listaDespesas.appendChild(itemLista);
      } else if (transacao.tipo === "receita") {
        listaReceitas.appendChild(itemLista);
      }
    });

    this.atualizarSaldo();
  }
}

const gerenciadorListaTransacoes = new GerenciadorListaTransacoes();

function adicionarTransacao() {
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  const descricaoCampo = document.getElementById("descricao");
  const valorCampo = document.getElementById("valor");

  const erroDescricao = document.getElementById("erroDescricao");
  const erroValor = document.getElementById("erroValor");

  erroDescricao.textContent = "";
  erroValor.textContent = "";

  let eValido = true;

  if (!descricao) {
    erroDescricao.textContent = "Campo obrigatório";
    eValido = false;
  }

  if (isNaN(valor) || valor <= 0) {
    erroValor.textContent = "Insira um valor válido";
    eValido = false;
  }

  if (tipo !== "despesa" && tipo !== "receita") {
    eValido = false;
  }

  if (eValido) {
    gerenciadorListaTransacoes.adicionarTransacao(descricao, valor, tipo);
    gerenciadorListaTransacoes.exibirTransacoes();
    limparCamposFormulario();
  }
}

function atualizarSaldo() {
  gerenciadorListaTransacoes.atualizarSaldo();
}

function limparCamposFormulario() {
  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
}

window.onload = () => {
  gerenciadorListaTransacoes.exibirTransacoes();
};
