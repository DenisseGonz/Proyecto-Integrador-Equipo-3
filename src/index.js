// import __ from 'lodash';
import Swal from 'sweetalert2';

// Swal.fire(
//     'Ya accediste',
//     'success'
// );
import {
    gryffindor,
    slytherin,
    hufflepuff,
    ravenclaw,
} from './assets/js/seleccionador_casas.js';
import { agprodini } from './assets/js/inicio-incluye-productos.js';
import { productos } from './assets/js/productos.js';
import {
    mostrarControlador,
    siguienteCancion,
    playPause,
    mostrarRange,
    cambiarVolumen,
    saltarCancion,
} from './assets/js/audio.js';
import { recordadora } from './assets/js/recordadora.js';
import { bienvenida } from './assets/js/bienvenida.js';

let url = window.location.href;
let index = parseInt(url.slice(-1));

let gri = document.querySelector('.griffindor');
let huf = document.querySelector('.hufflepuff');
let sly = document.querySelector('.slytherin');
let rav = document.querySelector('.ravenclaw');

switch (index) {
    case 1:
        gryffindor();
        gri.style.display = 'none';
        break;
    case 2:
        slytherin();
        sly.style.display = 'none';
        break;
    case 3:
        hufflepuff();
        huf.style.display = 'none';
        break;
    case 4:
        ravenclaw();
        rav.style.display = 'none';
        break;
    default:
        break;
}

const $btnMusica = document.querySelector('#encapsulador');
const $audio = document.querySelector('audio');
const $play = document.querySelector('#play');
const $volBtn = document.querySelector('#vol-btn');
const $volRange = document.querySelector('#volumen');
const $siguiente = document.querySelector('#siguiente');
const cancion1 = document.querySelector('#cancion1');
// ESTO ES PARA LA MÚSICA
document.addEventListener('DOMContentLoaded', function () {
    $audio.setAttribute('src', cancion1.src);
    $audio.volume = 0.3;
    //Mostrar controlador
    $btnMusica.addEventListener('click', mostrarControlador());
    //Cuando una canción se acaba, esta sigue
    $audio.addEventListener('ended', siguienteCancion());
    //Botón de pausa y play
    $play.addEventListener('click', playPause());
    //Mostrar range de volumen
    // $volBtn.addEventListener('click', mostrarRange());
    //Cambiar la intensidad del volumen
    $volRange.addEventListener('change', cambiarVolumen());
    //Pasar a la siguiente canción
    $siguiente.addEventListener('click', saltarCancion());
});

if (url.includes('productos.html') || url.includes('inicio.html') || url.includes('baul-compras.html')) {
    agprodini();
    productos();
}

if (url.includes('/index.html')) {
    bienvenida();
    recordadora();
}
