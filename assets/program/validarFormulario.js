const formulario = document.querySelector('[data-formulario]');
const errorMessages = document.querySelector('[data-error-messages]');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    errorMessages.innerHTML = '';
    let nome = document.querySelector('[data-formNome]').value;
    let mensagem = document.querySelector('[data-formMensagem]').value;

    if (nome.trim() === "") { // Usado a função trim() para remover quaisquer espaços em branco no início e no final dos valores dos campos e em seguida, verificamos se os campos estão vazios usando a comparação === ''. Se algum campo estiver vazio, chamamos a função.
        mostrarMenssagemErro('O campo Nome é obrigatório.');
        const nomeEstilo = document.querySelector('.__formNome')
        nomeEstilo.style.border = '1px solid red';
    }

    if (mensagem.trim() === "") {
        mostrarMenssagemErro('O campo Mensagem é obrigatório.');
        const mensagemEstilo = document.querySelector('.__formMensagem')
        mensagemEstilo.style.border = '1px solid red';
    }

    if (errorMessages.innerHTML === '') {
        formulario.submit();
    
        //Se o elemento errorMessages não tiver nenhuma mensagem de erro (ou seja, o innerHTML está vazio), podemos enviar o formulário chamando o método submit() do objeto form.

        alert('Muito obrigado pelo envio');
    }

});

function mostrarMenssagemErro(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessages.appendChild(errorMessage);
}