window.onscroll = function () {
    console.log(window.scrollY, slogan.offsetHeight )
    if (window.scrollY >= slogan.offsetHeight) {
        cabecalho.style = "display: block";
        cabecalho.style = "display: block";
    }
    else {
        cabecalho.style = "display: none";
    }
}