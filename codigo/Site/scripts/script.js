onload = () => {
    let form = document.getElementById('form');
    form.addEventListener('submit', onAtualizar);

    let strDados = localStorage.getItem("auth");

    let objDados = JSON.parse(strDados);

    objDados = {
        cadastros: [{
            user: "vitas",
            senha: "pucminas",
            email: "vitor@gmail.com",
        }],
    }
    localStorage.setItem("auth", JSON.stringify(objDados));
}

function onAtualizar(event) {
    let objDados = JSON.parse(localStorage.getItem('auth'));
    console.log(event);
    let strNome = document.querySelector('#user');
    let strEmail = document.querySelector('#email');
    let strSenha = document.querySelector('#senha');
    let strConfirmarSenha = document.querySelector('#confirmarsenha');

    var deuErro = false;

    if (strNome.value == '' || strNome.value == null) {
        strNome.classList.add('errorInput');
        deuErro = true;
    } else {
        strNome.classList.remove('errorInput');
    }
    if ((strSenha.value == null) || (strSenha.value != strConfirmarSenha.value) || (strSenha.value == '')) {
        strSenha.classList.add('errorInput');
        strConfirmarSenha.classList.add('errorInput');
        deuErro = true;
    } else {
        strSenha.classList.remove('errorInput');
        strConfirmarSenha.classList.remove('errorInput');
    }
    if (!deuErro) {
        let attCadastro = {

            user: strNome.value,
            senha: strSenha.value,
            email: strEmail.value,

        };

        console.log(attCadastro);
        console.log(objDados);

        objDados.cadastros = [attCadastro];

        localStorage.setItem("auth", JSON.stringify(objDados));

    }
    event.preventDefault();
}