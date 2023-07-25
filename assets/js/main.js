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


function verificarSeOUsuarioEstáLogado() {

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  let botaoLogin = document.querySelector('[data-login]')
  let botoesVerTudo = document.querySelector('[data-verTudoBtn]')
  let emailCookieValor = getCookie("email");

  if (emailCookieValor !== null) {

    // Faça algo com o valor do cookie, por exemplo, preencher um campo de e-mail em um formulário:
    // Caso o parâmetro 'email' esteja presente, faça algo

    botaoLogin.style.display = "none";
    function redirecionarParaOutraPagina() {
      // Aqui você coloca a URL da outra página HTML para a qual deseja redirecionar.
      let outraPaginaURL = "loginIniciado.html";
      // Redireciona o usuário para a outra página.
      window.location.href = outraPaginaURL;
    }
    // Adicionar um ouvinte de evento de clique ao botão
    botoesVerTudo.addEventListener("click", redirecionarParaOutraPagina);

  } else {

    // Caso o parâmetro 'email' não esteja presente, faça outra coisa
    // Exemplo: exibir uma mensagem de erro
    console.log('O usuario não está logado');
  }
}

verificarSeOUsuarioEstáLogado()









