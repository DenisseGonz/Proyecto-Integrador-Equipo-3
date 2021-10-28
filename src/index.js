// import __ from 'lodash';
// import Swal from 'sweetalert2';

// Swal.fire(
//     'Ya accediste',
//     'success'
// );
import {gryffindor,slytherin,hufflepuff,ravenclaw} from './assets/js/seleccionador_casas.js';

let url = window.location.href;
let index = parseInt(url.slice(-1));
console.log(index);

switch(index){
    case 1:
        gryffindor();
    break;
    case 2:
        slytherin();
    break;
    case 3:
        hufflepuff();
    break;
    case 4:
        ravenclaw();
    break;
    default:
    break;
}