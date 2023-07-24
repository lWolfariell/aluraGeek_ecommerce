let produtos = [] // variavel para armazenar os produtos da api
const endpointDaAPI = 'https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto'

getBuscarProdutosDaApi()

async function getBuscarProdutosDaApi() {

  const res = await fetch(endpointDaAPI); // utiliza o await para esperar a resposta (res) da chamada à API usando fetch
  produtos = await res.json(); // após obter a resposta é convertida em json e armazenado na variavel produtos
  mostrarProdutosPorCategoria(produtos);
  produtosSimilares(produtos);
  todosOsProdutos(produtos);
}

import { mostrarProdutosPorCategoria } from './modulos/mostrarProdutosPorCategoria.js'

import { produtosSimilares } from './modulos/produtosSimilares.js';

import { todosOsProdutos } from './modulos/todosOsProdutos.js';





