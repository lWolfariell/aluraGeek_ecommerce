let produtos = [] // variavel para armazenar os produtos da api

const endpointDaAPI = 'https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto'

getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi() {

  const res = await fetch(endpointDaAPI); // utiliza o await para esperar a resposta (res) da chamada à API usando fetch
  produtos = await res.json(); // após obter a resposta é convertida em json e armazenado na variavel produtos
  mostrarProdutos(produtos);
}

const elementoOndeSeráInserido = document.querySelectorAll('.__listarProdutos');

const categoriaHtml = document.querySelectorAll('.--categoria');
const categoriasHtml = [];

categoriaHtml.forEach(elemento => {
  const categoriaConteudo = elemento.textContent;
  categoriasHtml.push(categoriaConteudo);
});

function mostrarProdutos() {
  produtos.forEach(produto => {
    if (categoriasHtml.includes(produto.categoria)) {
      elementoOndeSeráInserido.innerHTML += `
        <li class="__produto">
          <img src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
          <p class="--nomeProd">${produto.nomeProduto}</p>
          <p class="--valor">R$${produto.valor},00</p>
          <p class="--verProdLink"><a href="#">Ver Produto</a></p>
        </li>
      `;
    }
  });
}





