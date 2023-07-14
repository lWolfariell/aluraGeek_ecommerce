document.getElementById("loginButton").addEventListener("click", function() {
    var bodyContent = document.getElementById("body_container");
    bodyContent.innerHTML = `
    <header class="cabecalho container">
    <div class="__headerTop">
        <figure class="--logo">
            <img src="assets/imagens/logo.png" alt="Logo AluraGeek">
        </figure>
        <button class="__login">Login</button>
        <div class="__barraDeBusca">
            <input type="search" name="Buscar" id="buscar" placeholder="O que deseja encontrar?">
            <img src="assets/imagens/Icone.svg" alt="Buscar" class="">
        </div>
    </div>

</header>

<main class="login container">

    <form class="__iniciarSessao" action="" method="get">

        <p>Iniciar Sessão</p>
        <input type="email" name="" id="" placeholder="Escreva seu email">
        <input type="password" name="" id="" placeholder="Escreva sua senha">
        <button class="__entrarBtn" type="submit">Entrar</button>

    </form>

</main>

<footer class="rodape container">

    <div class="__sobreEmpresa">



        <ul class="__sobreDescr">
            <img src="assets/imagens/Logo.png" alt="Logo AluraGeek" class="__logo">
            <div class="__descri">
                <li class="__descriItem"><a href="#">Quem somos nós</a></li>
                <li class="__descriItem"><a href="#">Política de Privacidade</a></li>
                <li class="__descriItem"><a href="#">Programa de fidelidade</a></li>
                <li class="__descriItem"><a href="#">Nossas Lojas</a></li>
                <li class="__descriItem"><a href="#">Quero ser franqueado</a></li>
                <li class="__descriItem"><a href="#">Anuncie aqui</a></li>
            </div>

        </ul>
        <form class="__formulario" action="" method="post">

            <p class="__formTitulo">Fale Conosco</p>

            <label class="__input-label">
                <span>Nome</span>
                <input class="__formNome" type="text" name="" id="" placeholder="Seu nome aqui">

            </label>

            <textarea class="__formMensagem" name="" id="" cols="30" rows="10"
                placeholder="Escreva sua mensagem"></textarea>

            <input class="__enviarMsgBtn" type="submit" value="Enviar Mensagem">
        </form>
    </div>

</footer>

<div class="__rodape">
    <p class="__dev">Desenvolvido por Vitor Guilherme 2023</p>
</div>
    `;
  });


