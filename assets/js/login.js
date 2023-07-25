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
const menssagensErro = document.querySelector('[data-error-validate]')

formIniciarSessao.addEventListener('submit', function (event) {

    event.preventDefault();

    menssagensErro.innerHTML = '';

    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    if (validar(user.email) === false) {
        mostrarMenssagemErroValidar('Por gentileza sinalizar um email valido ex.: teste@teste.com');
        const nomeEstilo = document.querySelector('.inputEmail')
        nomeEstilo.style.border = '2px solid red';

    }

    if (user.password.trim() === '') {
        mostrarMenssagemErroValidar('O campo senha é obrigatório');
        const senhaEstilo = document.querySelector('.inputSenha')
        senhaEstilo.style.border = '2px solid red';

    }

    if (menssagensErro.innerHTML === '' && user.email === admin.email && user.password === admin.password) {

        //Se o elemento errorMessages não tiver nenhuma mensagem de erro (ou seja, o innerHTML está vazio), podemos enviar o formulário chamando o método submit() do objeto form.
        alert('Seja bem vindo!');
        window.location.href = 'loginIniciado.html';
        setCookie('email', user.email, 1); 
        

       
    } else {

        mostrarMenssagemErroValidar('Houve um erro! O email ou senha estão errados.');

    }




});

function validar(email) {
    // Expressão regular para validar o formato do email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}


function mostrarMenssagemErroValidar(message) {
    const menssagemErro = document.createElement('p');
    menssagemErro.textContent = message;
    menssagensErro.appendChild(menssagemErro);
}

// Função para criar ou atualizar um cookie
function setCookie(name, value, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

 // Ao configurar o cookie, eu posso acessar o valor do cookie em outras páginas do mesmo domínio.
