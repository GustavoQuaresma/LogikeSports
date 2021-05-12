window.onscroll = function () {
    if (window.scrollY >= slogan.offsetHeight) {
        cabecalho.style = " transform: translateY(0) ; ";
    
    }
    else {
        cabecalho.style = "";
        
    }
}

function start() {
    body.style = "overflow-y: auto;"
}