function mostrarProdutosPorCategoria(produtos) {
    const elementosOndeSeraoInseridos = {
      'Star Wars': document.getElementById('listar1'),
      'Consoles': document.getElementById('listar2'),
      'Diversos': document.getElementById('listar3'),
    };
  
    produtos.forEach(produto => {
      const categoria = produto.categoria;
      if (elementosOndeSeraoInseridos[categoria]) {
        elementosOndeSeraoInseridos[categoria].innerHTML += `
          <li class="__produto" data-id="${produto.id}">
            <img src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
            <p class="--nomeProd">${produto.nomeProduto}</p>
            <p class="--valor">R$${produto.valor}</p>
            <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produto.id}">Ver Produto</a></p>
          </li>
        `;
      }
    });
  }

  export { mostrarProdutosPorCategoria }