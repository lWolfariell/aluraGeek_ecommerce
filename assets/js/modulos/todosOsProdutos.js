function todosOsProdutos(listaDosProdutos) {
  const elementoParaInserirTodosOsProdutos = document.getElementById('listarProdutos');
  elementoParaInserirTodosOsProdutos.innerHTML = '';

  listaDosProdutos.forEach(produto => {
    elementoParaInserirTodosOsProdutos.innerHTML += `
      <li class="__produto">
        <figure class="img-container">
          <img class="prodImg" src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
          <div class="iconsImgs">
            <img class="removeIcon" src="assets/img/icons8-lixeira.svg" alt="remover">
            <img class="editIcon" src="assets/img/icons8-lápis-24.png" alt="editar">                            
          </div>
        </figure>
        <p class="--nomeProd">${produto.nomeProduto}</p>
        <p class="--valor">R$${produto.valor}</p>
        <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produto.id}">Ver Produto</a></p>
      </li>
    `;
  });


  // Pegando os ícones remover e editar dentro do item do produto
  const removeIcon = document.querySelectorAll('.removeIcon');
  const editIcon = document.querySelectorAll('.editIcon');

  // Adicionando os ouvintes de eventos para os ícones remover e editar
  removeIcon.forEach((icon, index) => {
    icon.addEventListener('click', async () => {


      const produtoId = listaDosProdutos[index].id;
      const confirmarRemocao = confirm('Deseja realmente remover este produto?');

      if (!confirmarRemocao) {
        return;
      }

      try {
        const endpointRemocao = `https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto/${produtoId}`;
        const resposta = await fetch(endpointRemocao, {
          method: 'DELETE',
        });

        if (!resposta.ok) {
          throw new Error('Erro ao tentar remover o produto da API.');
        }

        // Remover o produto da lista local
        listaDosProdutos = listaDosProdutos.filter(produto => produto.id !== produtoId);

        // Atualizar a lista de produtos exibida na página
        todosOsProdutos(listaDosProdutos);
      } catch (erro) {
        console.error(erro);
        alert('Ocorreu um erro ao tentar remover o produto.');
      }
    });
  });

  editIcon.forEach((icon, index) => { // Correção: Mudar "icon" para "iconEd" para usar a variável correta
    icon.addEventListener('click', () => {
      // Quando o ícone de editar é clicado, redirecione para a página de edição passando o id do produto
      const produtoId = listaDosProdutos[index].id;
      window.location.href = `adcionarProduto.html?id=${produtoId}`;
      // Você pode utilizar outras técnicas aqui, como LocalStorage ou Cookies, para passar os dados do produto para a página de edição.
    });
  });
}


export { todosOsProdutos };

