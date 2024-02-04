function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    /* console.log(instrumento); */

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        };
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

};

