// import __ from 'lodash';
// import Swal from 'sweetalert2';

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
// import { productos } from './assets/js/productos.js';

let url = window.location.href;
let index = parseInt(url.slice(-1));
console.log(index);
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

if (url.includes('productos.html') || url.includes('inicio.html')) {
    agprodini();
    productos();
}
