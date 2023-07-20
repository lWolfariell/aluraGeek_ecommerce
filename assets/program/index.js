let produtos = [] // variavel para armazenar os produtos da api

const endpointDaAPI = 'https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto'

getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi() {

    const res = await fetch(endpointDaAPI); // utiliza o await para esperar a resposta (res) da chamada à API usando fetch
    produtos = await res.json(); // após obter a resposta é convertida em json e armazenado na variavel produtos
    exibirProdutosPorCategoria(produtos);
    mostrarProdutosConsoles(produtos);
}

/* lista produtos home */
const elementoParaInserirProdutos = document.getElementById('produtosContainer'); // definido onde vou inserir os produtos

function exibirProdutosPorCategoria(listaDeProdutos) {
    const produtosPorCategoria = {} // criado um objeto vazio, que será usado para organizar os produtos por categoria, cada propriedade desse objeto representará uma categoria, e o valor será um array contendo os produtos dessa categoria.

    listaDeProdutos.forEach(produto => {
        //Verificar se a categoria do produto já existe como uma propriedade do objeto 
        if (produtosPorCategoria[produto.categoria]) {
            produtosPorCategoria[produto.categoria].push(produto); //Se existir, o produto é adicionado ao array daquela categoria.
        } else {
            produtosPorCategoria[produto.categoria] = [produto]; //Se não existir, é criada uma propriedade com o nome da categoria, e o produto é armazenado como o primeiro elemento do array daquela categoria.
        }
    });

    elementoParaInserirProdutos.innerHTML = ''; // definimos o conteúdo HTML como uma string vazia para limpar qualquer conteúdo anterior.

    for (const categoria in produtosPorCategoria) { // percorra cada categoria no objeto produtosPorCategoria e escreva

        elementoParaInserirProdutos.innerHTML +=
            `
        <section class="__categoriasProdutos">
        <div class="__categoriaProdutos-top">
          <p class="--categoria">${categoria}</p>
          <button class="--verTudoBtn">Ver tudo &#8594;</button>
        </div>
        <ul class="__listarProdutos">

          ${produtosPorCategoria[categoria].map(produto =>
                `
              <li class="__produto">
                <img src="${produto.imagemUrl}" alt="${produto.nomeProduto}">
                <p class="--nomeProd">${produto.nomeProduto}</p>
                <p class="--valor">R$${produto.valor},00</p>
                <p class="--verProdLink"><a href="#">Ver Produto</a></p>
              </li>
            `)
                .join('')}
        </ul>
      </section>
        
        `;

        /* Foi usado o método join para juntar todos os elementos do array de produtos em uma única string, sem nenhum separador. 
        Dessa forma, os elementos do array se tornam uma sequência contínua de HTML. */
    }
}
/* fim lista produtos home */






