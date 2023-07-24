const criaProdutos = (categoria, imagemUrl, nomeProduto, valor, descricao) => {
        // Enviar o objeto 'produto' para a API usando o método fetch ou outras bibliotecas
        // Aqui está um exemplo usando o método fetch:
        return fetch('https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoria,
                imagemUrl,
                nomeProduto,
                valor,
                descricao
            })
        }).then(resposta => {
            if (resposta.ok) {
                return resposta.body;
            }
        });
    }

    const formAdcionaProdutos = document.querySelector('[data-inserirProdutos]');


    formAdcionaProdutos.onsubmit = function (event) {
        event.preventDefault(); // impedir atualização da pagina

        //obter os valores dos campos do formulário
        const imagemUrl = document.getElementById('inserirImagem').value;
        const categoria = document.getElementById('categoria').value;
        const nomeProduto = document.getElementById('nomeProd').value;
        const valor = document.getElementById('prcProd').value;
        const descricao = document.getElementById('descrProduto').value;

        criaProdutos(categoria, imagemUrl, nomeProduto, valor, descricao)
        .then (resposta => {
            window.location.href = 'loginIniciado.html';
            console.log('resposta');
        }).catch (error => {
            console.log(error);
        })

    };

    
// Função para obter os dados de um produto pelo ID
const getProdutoPorId = async (produtoId) => {
    try {
      const endpoint = `https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto/${produtoId}`;
      const resposta = await fetch(endpoint);
      if (!resposta.ok) {
        throw new Error('Erro ao obter o produto da API.');
      }
      const produto = await resposta.json();
      return produto;
    } catch (erro) {
      console.error(erro);
      throw erro;
    }
  };
  
  // Função para preencher o formulário de edição com os dados do produto
  const preencherFormularioEdicao = (produto) => {
    const imagemUrlInput = document.getElementById('inserirImagem');
    const categoriaInput = document.getElementById('categoria');
    const nomeProdutoInput = document.getElementById('nomeProd');
    const valorInput = document.getElementById('prcProd');
    const descricaoInput = document.getElementById('descrProduto');
  
    // Preencher os campos do formulário com os dados do produto
    imagemUrlInput.value = produto.imagemUrl;
    categoriaInput.value = produto.categoria;
    nomeProdutoInput.value = produto.nomeProduto;
    valorInput.value = produto.valor;
    descricaoInput.value = produto.descricao;
  };
  
  // Função para realizar a edição do produto
  const editarProduto = async (produtoId, categoria, imagemUrl, nomeProduto, valor, descricao) => {
    try {
      const endpoint = `https://64adb39eb470006a5ec64d56.mockapi.io/tsteste/produto/${produtoId}`;
      const resposta = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoria,
          imagemUrl,
          nomeProduto,
          valor,
          descricao,
        }),
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao tentar atualizar o produto na API.');
      }
  
      // Redirecionar para a página inicial ou de listagem de produtos após a edição
      window.location.href = 'pagina_inicial.html';
    } catch (erro) {
      console.error(erro);
      alert('Ocorreu um erro ao tentar atualizar o produto.');
    }
  };
  
  // Obter o ID do produto a ser editado da URL (você pode usar esta técnica ou outras como LocalStorage, Cookies, etc.)
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = urlParams.get('id');
  
  // Verificar se o ID do produto foi fornecido
  if (produtoId) {
    // Buscar os dados do produto pelo ID e preencher o formulário de edição
    getProdutoPorId(produtoId)
      .then(produto => {
        preencherFormularioEdicao(produto);
      })
      .catch(erro => {
        console.error(erro);
        alert('Ocorreu um erro ao carregar os dados do produto.');
      });
  
    // Adicionar evento de submissão do formulário de edição
    const formEdicaoProduto = document.querySelector('[data-editarProduto]');
    formEdicaoProduto.onsubmit = function (event) {
      event.preventDefault();
  
      // Obter os valores atualizados dos campos do formulário
      const imagemUrl = document.getElementById('inserirImagem').value;
      const categoria = document.getElementById('categoria').value;
      const nomeProduto = document.getElementById('nomeProd').value;
      const valor = document.getElementById('prcProd').value;
      const descricao = document.getElementById('descrProduto').value;
  
      // Realizar a edição do produto com os dados atualizados
      editarProduto(produtoId, categoria, imagemUrl, nomeProduto, valor, descricao);
    };
  }
  