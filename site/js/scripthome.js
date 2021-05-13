window.onscroll = function () {
    if (window.scrollY < slogan.offsetHeight) {
        cabecalho.style = " transform: translateY(-100%) ; ";
        jogosli.classList.remove('destaque');
        homeli.classList.add('destaque');
        quemli.classList.remove('destaque');
        graficoli.classList.remove('destaque');
    }
    if (window.scrollY >= slogan.offsetHeight) {
        cabecalho.style = " transform: translateY(0) ; ";
        jogosli.classList.add('destaque');
        homeli.classList.remove('destaque');
        quemli.classList.remove('destaque');
        graficoli.classList.remove('destaque');
    }
    if (window.scrollY >= home.offsetHeight + slogan.offsetHeight-50 ) {
        graficoli.classList.remove('destaque');
        quemli.classList.add('destaque');
        jogosli.classList.remove('destaque');
        homeli.classList.remove('destaque');
    }
    if (window.scrollY >= quemsomos.offsetHeight + home.offsetHeight + slogan.offsetHeight-50) {
        graficoli.classList.add('destaque');
        quemli.classList.remove('destaque');
        jogosli.classList.remove('destaque');
        homeli.classList.remove('destaque');
    }
}

function start() {
    body.style = "overflow-y: auto;"
}