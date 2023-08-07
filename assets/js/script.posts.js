const form = document.getElementById("postForm");
const exibicao = document.getElementById("exibicao");
const posts = [];

function exibirPosts() {
  exibicao.innerHTML = "";
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h2>${post.titulo}</h2>
        <p><strong>Resumo:</strong> ${post.resumo}</p>
        <p><strong>Autor:</strong> ${post.autor}</p>
        <p><strong>Data de Publicação:</strong> ${post.dataPublicacao}</p>
        <button onclick="editarPost(${index})">Editar</button>
        <button onclick="removerPost(${index})">Remover</button>
      `;
    exibicao.appendChild(postDiv);
  });
}

function cadastrarPost(titulo, resumo, autor, dataPublicacao) {
  const post = {
    titulo,
    resumo,
    autor,
    dataPublicacao,
  };
  posts.push(post);
  exibirPosts();
}

function editarPost(index) {
  const post = posts[index];
  const novoTitulo = prompt("Novo Título:", post.titulo);
  const novoResumo = prompt("Novo Resumo:", post.resumo);
  const novoAutor = prompt("Novo Autor:", post.autor);
  const novaDataPublicacao = prompt(
    "Nova Data de Publicação:",
    post.dataPublicacao
  );

  if (novoTitulo && novoResumo && novoAutor && novaDataPublicacao) {
    posts[index] = {
      titulo: novoTitulo,
      resumo: novoResumo,
      autor: novoAutor,
      dataPublicacao: novaDataPublicacao,
    };
    exibirPosts();
  }
}

function removerPost(index) {
  posts.splice(index, 1);
  exibirPosts();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const resumo = document.getElementById("resumo").value;
  const autor = document.getElementById("autor").value;
  const dataPublicacao = document.getElementById("data_publicacao").value;

  if (titulo && resumo && autor && dataPublicacao) {
    cadastrarPost(titulo, resumo, autor, dataPublicacao);
    form.reset();
  }
});

// Chame exibirPosts() inicialmente para mostrar posts existentes (se houver)
exibirPosts();
