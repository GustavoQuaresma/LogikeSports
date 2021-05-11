window.onscroll = function () {
    if (window.scrollY >= slogan.offsetHeight) {
        cabecalho.style = "  height: 50px; ";
    
    }
    else {
        cabecalho.style = "height: 0px;";
        
    }
}