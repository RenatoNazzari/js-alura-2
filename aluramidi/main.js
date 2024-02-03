function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    /* console.log(instrumento); */

    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    };

}; 
