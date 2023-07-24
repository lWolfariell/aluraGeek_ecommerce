function produtosSimilares(produtos) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const categoriaDoProduto = urlParams.get('categoria')

    // Encontra o produto correspondente ao ID na lista de produtos
    const produtoClicado = produtos.find(produto => produto.id === id);

    if (produtoClicado) {

        const elementoParaInserirProdutoClicado = document.querySelector('.__prodClicadoContainer');
        elementoParaInserirProdutoClicado.innerHTML = `
        <figure class="__imgProd">
          <img src="${produtoClicado.imagemUrl}" alt="${produtoClicado.nomeProduto}">
        </figure>
  
        <div class="__infoProd">
          <p class="__tituloProd">${produtoClicado.nomeProduto}</p>
          <p class="__valorProd">R$${produtoClicado.valor}</p>
          <p class="__descriProd">${produtoClicado.descricao}</p>
        </div>
      `;

        const elementoParaInserirProdutoClicado2 = document.querySelector('.__listarProdutos');
        if (elementoParaInserirProdutoClicado2) {
            produtos.forEach(produto => {
                if (produto.categoria === categoriaDoProduto && produto.id !== id) {
                    elementoParaInserirProdutoClicado2.innerHTML += `
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
    }
}


export { produtosSimilares }