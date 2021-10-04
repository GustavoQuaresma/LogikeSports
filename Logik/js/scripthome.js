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
    if (window.scrollY >= home.offsetHeight + slogan.offsetHeight - 50) {
        graficoli.classList.remove('destaque');
        quemli.classList.add('destaque');
        jogosli.classList.remove('destaque');
        homeli.classList.remove('destaque');
    }
    if (window.scrollY >= quemsomos.offsetHeight + home.offsetHeight + slogan.offsetHeight - 50) {
        graficoli.classList.add('destaque');
        quemli.classList.remove('destaque');
        jogosli.classList.remove('destaque');
        homeli.classList.remove('destaque');
    }
}
function gif(){
    var vetorgifs = ['giffundo.gif','giffundo2.gif','giffundo3.gif','giffundo4.gif','giffundo5.gif']
    var sorteio = parseInt(Math.random()*5)+0;
    fundo = vetorgifs[sorteio];
    slogan.style.backgroundImage = "url('../img/"+ fundo +"')";
}

function grafico() {
    fetch("/leituras/estatistica", {
        method: "get"

    }).then(resposta => {
        if (resposta.ok) {

            resposta.json().then(json => {
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: [
                            'League of Legends',
                            'CSGO',
                            'Valorant'
                        ],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [json.jogo1, json.jogo2, json.jogo3],
                            backgroundColor: [
                                'rgb(65,105,225)',
                                'rgb(153, 51, 153)',
                                'rgb(250, 68, 84)'
                            ],
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 18
                                    },
                                    color: 'black',

                                },
                                title: {
                                    padding: {
                                        top: 52
                                    }
                                }
                            }
                        }
                    }
                });

            })
        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}
