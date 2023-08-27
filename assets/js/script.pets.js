// Função para cadastrar um novo pet
function cadastrarPet() {
  const nome = document.getElementById("nome").value;
  const especie = document.getElementById("especie").value;
  const idade = document.getElementById("idade").value;

  const listaPets = document.getElementById("lista-pets");
  const novoPet = document.createElement("li");
  novoPet.textContent = `Nome: ${nome}, Espécie: ${especie}, Idade: ${idade}`;
  listaPets.appendChild(novoPet);

  // Limpar campos após o cadastro
  document.getElementById("nome").value = "";
  document.getElementById("especie").value = "";
  document.getElementById("idade").value = "";
}

// Chamada da função para cadastrar pet ao enviar o formulário
document
  .getElementById("pet-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarPet();
  });
