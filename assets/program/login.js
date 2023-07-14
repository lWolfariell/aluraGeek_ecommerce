/* function addUser(email, password) {
    var newUser = {
        email: email,
        password: password
    };

    users.push(newUser);
} */

const admin = {
    email: 'admin@alurageek.com',
    password: 'minhaSenha123'
};

const formIniciarSessao = document.querySelector('[data-__iniciaSessao]')
const menssagemErro = document.querySelector('[data-error-messages]')

formIniciarSessao.addEventListener('submit', function (event) {
    event.preventDefault();
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };    

    if (validar(user.email) === false) {
        mostrarMenssagemErro('Por gentileza sinalizar um email valido ex.: teste@teste.com');
        const nomeEstilo = document.querySelector('.inputEmail')
        nomeEstilo.style.border = '2px solid red';
        console.log('erro no email')

    } else if (user.password.trim() === ''){
        mostrarMenssagemErro('O campo senha é obrigatório');
        const senhaEstilo = document.querySelector('.inputEmail')
        senhaEstilo.style.border = '2px solid red';
        console.log('erro na senha')

    } else if (menssagemErro.innerHTML === '' && user.email === admin.email && user.password === admin.password) {
        formulario.submit();
        console.log('erro na validação final')
    
        //Se o elemento errorMessages não tiver nenhuma mensagem de erro (ou seja, o innerHTML está vazio), podemos enviar o formulário chamando o método submit() do objeto form.

        alert('Muito obrigado pelo envio');
    }



    
});

function validar(email) {
    // Expressão regular para validar o formato do email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}



/* function verificarCredenciais(email, password) {
        // Realize a validação dos dados do usuário
        // Aqui você pode usar a lógica específica para verificar se o email e senha estão corretos

        if (email === 'admin@test.com' && password === 'minhaSenha123') {


            mostrarMenssagemErro('O campo Nome é obrigatório.');
            const nomeEstilo = document.querySelector('.__formNome')
            nomeEstilo.style.border = '1px solid red';
        }

        // Exemplo simples: verifique se o email é 'usuario@example.com' e a senha é 'minhaSenha123'
        if (email === 'usuario@example.com' && password === 'minhaSenha123') {
            return true;
        } else {
            return false;
        } */