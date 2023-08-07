const posts = [];
let indexPost = -1;

function exibirPosts() {
  let conteudoExibicao = "";
  posts.forEach((post, index) => {
    conteudoExibicao += `
       <div class="post">
         <h2>${post.titulo}</h2>
         <p><strong>Resumo:</strong> ${post.resumo}</p>
         <p><strong>Autor:</strong> ${post.autor}</p>
         <p><strong>Data de Publicação:</strong> ${post.dataPublicacao}</p>
         <button onclick="editarPost(${index})">Editar</button>
         <button onclick="removerPost(${index})">Remover</button>
       </div>
     `;
  });
  document.getElementById("exibicao").innerHTML = conteudoExibicao;
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

  document.getElementById("titulo").value = post.titulo;
  document.getElementById("resumo").value = post.resumo;
  document.getElementById("autor").value = post.autor;
  document.getElementById("data_publicacao").value = post.dataPublicacao;

  indexPost = index;
}

function removerPost(index) {
  posts.splice(index, 1);

  exibirPosts();
}

function savePosts() {
  const titulo = document.getElementById("titulo").value;
  const resumo = document.getElementById("resumo").value;
  const autor = document.getElementById("autor").value;
  const dataPublicacao = document.getElementById("data_publicacao").value;

  document.getElementById("titulo").value = "";
  document.getElementById("resumo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("data_publicacao").value = "";

  if (indexPost === -1) {
    if (titulo && resumo && autor && dataPublicacao) {
      cadastrarPost(titulo, resumo, autor, dataPublicacao);
    }
  } else {
    if (titulo && resumo && autor && dataPublicacao) {
      posts[indexPost] = {
        titulo,
        resumo,
        autor,
        dataPublicacao,
      };
      exibirPosts();
    }
  }
}
