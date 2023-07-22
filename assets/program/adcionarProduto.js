function adcionarProduto (event){
    event.preventDefault(); // inpedir atualização da pagina

    //obter os valores dos campos do formulário
    const imageInput

}

// Função para enviar o formulário com os dados do produto para a API
function adicionarProduto(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const imageInput = document.getElementById('imageInput').files[0];
    const categorySelect = document.getElementById('categorySelect').value;
    const productNameInput = document.getElementById('productNameInput').value;
    const priceInput = document.getElementById('priceInput').value;
    const descriptionTextarea = document.getElementById('descriptionTextarea').value;

    // Você pode realizar validações dos campos aqui antes de enviar para a API

    // Criar um objeto com os dados do produto
    const produto = {
        image: imageInput,
        category: categorySelect,
        name: productNameInput,
        price: parseFloat(priceInput),
        description: descriptionTextarea
    };

    // Enviar o objeto 'produto' para a API usando o método fetch ou outras bibliotecas
    // Aqui está um exemplo usando o método fetch:
    fetch('URL_DA_SUA_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao adicionar o produto.');
        }
        return response.json();
    })
    .then(data => {
        // Aqui você pode lidar com a resposta da API após adicionar o produto
        console.log('Produto adicionado com sucesso:', data);
        // Você pode redirecionar o usuário para outra página ou realizar outras ações aqui
    })
    .catch(error => {
        console.error('Erro:', error);
        // Lide com o erro, exiba uma mensagem para o usuário, etc.
    });
}

// Event listener para o envio do formulário
const form = document.getElementById('productForm');
form.addEventListener('submit', adicionarProduto);
