let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    jogo_usuario = sessionStorage.jogo_usuario_meuapp;
    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
 
        if (jogo_usuario == '1') {
            window.location.href = 'leagueoflegends.html'

        }
        if (jogo_usuario == '2') {
            window.location.href = 'csgo.html'


        }
        if (jogo_usuario == '3') {
            window.location.href = 'valorant.html'

        }
        validar_sessao();
    }

}
function nome() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    jogo_usuario = sessionStorage.jogo_usuario_meuapp;
    if (login_usuario == undefined) {
        b_usuario.innerHTML = `undefined`;
    } 
    else {
        b_usuario.innerHTML = `${nome_usuario}`;
    }
}


function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}
function logoffnoticia() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login2();
}

function redirecionar_login2() {
    window.location.href = '../login.html';
}
function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}