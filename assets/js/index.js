let produtos = [] // variavel para armazenar os produtos da api


const endpointDaAPI = 'https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto'

getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi() {

  const res = await fetch(endpointDaAPI); // utiliza o await para esperar a resposta (res) da chamada à API usando fetch
  produtos = await res.json(); // após obter a resposta é convertida em json e armazenado na variavel produtos
  mostrarProdutosPorCategoria();
  produtosSimilares(produtos);
  todosOsProdutos(produtos);
}

function mostrarProdutosPorCategoria() {
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
          <p class="--valor">R$${produto.valor},00</p>
          <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produto.id}">Ver Produto</a></p>
        </li>
      `;
    }
  });
}


function produtosSimilares() {
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
        <p class="__valorProd">R$${produtoClicado.valor},00</p>
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
            <p class="--valor">R$${produto.valor},00</p>
            <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produto.id}">Ver Produto</a></p>
          </li>
        `;
        }
      });
    }
  }
}


function todosOsProdutos(listaDosProdutos) {
  const elementoParaInserirTodosOsProdutos = document.getElementById('listarProdutos');

  elementoParaInserirTodosOsProdutos.innerHTML = ''

  listaDosProdutos.forEach(produto => {
    elementoParaInserirTodosOsProdutos.innerHTML += `
    <li class="__produto">
                    <figure class="img-container">
                        <img class="prodImg" src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
                        <div class="iconsImgs">
                            <img class="removeIcon" src="assets/imagens/icons8-lixeira.svg" alt="remover">
                            <img class="editIcon" src="assets/imagens/icons8-lápis-24.png" alt="editar">                            
                        </div>
                    </figure>
                    <p class="--nomeProd">${produto.nomeProduto}</p>
                    <p class="--valor">R$${produto.valor},00</p>
                    <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produtos.id}">Ver Produto</a></p>
                </li>
    
    `;
  });

};




