import { gryffindor, slytherin, hufflepuff, ravenclaw } from './assets/js/seleccionador_casas.js';
import { agprodini } from './assets/js/inicio-incluye-productos.js';
import { productos } from './assets/js/productos.js';
import { mostrarControlador, siguienteCancion, playPause, cambiarVolumen, saltarCancion } from './assets/js/audio.js';
import { recordadora } from './assets/js/recordadora.js';
import { bienvenida } from './assets/js/bienvenida.js';
import { cambiarContraseña, cambiarCorreo, cambiarPregunta, borrarCuenta, inicioCorreo, registroUsuario, contacto, delivery } from './assets/js/validaciones.js';

document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let index = parseInt(url.slice(-1));

    if (!url.includes('index.html') && !url.includes('registro.html')) {
        const $audio = document.querySelector('audio');
        const cancion1 = document.querySelector('#cancion1');
        // ESTO ES PARA LA MÚSICA
        $audio.setAttribute('src', cancion1.src);
        $audio.volume = 0.3;
        //Mostrar controlador
        mostrarControlador();
        //Cuando una canción se acaba, esta sigue
        siguienteCancion();
        //Botón de pausa y play
        playPause();
        //Cambiar la intensidad del volumen
        cambiarVolumen();
        //Pasar a la siguiente canción
        saltarCancion();
    }
    if (url.includes('/index.html')) {
        bienvenida();
        recordadora();
        inicioCorreo();
    }else if(url.includes('/registro.html')){
        registroUsuario();
    }else if (url.includes('casas_base.html')) {
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
    }else if (url.includes('productos.html') || url.includes('inicio.html')) {
        agprodini();
        productos();
    }else if (url.includes('/usuario.html')) {
        cambiarContraseña();
        cambiarCorreo();
        cambiarPregunta();
        borrarCuenta();
    }
    else if (url.includes('/contacto.html')){
        contacto();
    }
    else if (url.includes('/delivery.html')){
        delivery();
    }
});

