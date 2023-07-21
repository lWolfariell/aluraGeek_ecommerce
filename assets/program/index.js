let produtos = [] // variavel para armazenar os produtos da api


const endpointDaAPI = 'https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto'

getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi() {

  const res = await fetch(endpointDaAPI); // utiliza o await para esperar a resposta (res) da chamada à API usando fetch
  produtos = await res.json(); // após obter a resposta é convertida em json e armazenado na variavel produtos
  mostrarProdutosPorCategoria();
  produtosSimilares();
}

function mostrarProdutosPorCategoria() {
  const elementosOndeSerãoInseridos = {
    'Star Wars': document.getElementById('listar1'),
    'Consoles': document.getElementById('listar2'),
    'Diversos': document.getElementById('listar3'),
  };

  produtos.forEach(produto => {
    const categoria = produto.categoria;
    if (elementosOndeSerãoInseridos[categoria]) {
      elementosOndeSerãoInseridos[categoria].innerHTML += `
        <li class="__produto" data-id="${produto.id}">
          <img src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
          <p class="--nomeProd">${produto.nomeProduto}</p>
          <p class="--valor">R$${produto.valor},00</p>
          <p class="--verProdLink"><a href="produtosSimilares.html?id=${produto.id}">Ver Produto</a></p>
        </li>
      `;
    }
  });
}

function produtosSimilares(produtosid) {

  const produtoElemento = document.querySelector('.__produto');
  console.log(produtoElemento)
  const elementoParaInserirProdutoClicado = document.querySelector('.__prodClicadoContainer')
  elementoParaInserirProdutoClicado.innerHTML = ''

  elementoParaInserirProdutoClicado.innerHTML += `
  <figure class="__imgProd">
                <img src="${produtos.imagemUrl}" alt="">
            </figure>

            <div class="__infoProd">
                <p class="__tituloProd">${produtos.nomeProduto}</p>
                <p class="__valorProd">R$${produtos.valor}</p>
                <p class="__descriProd">${produtos.descricao}</p>
            </div>
  `



}



