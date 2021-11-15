const $audio = document.querySelector('audio');
const $btnMusica =document.querySelector('#encapsulador');
const $play = document.querySelector('#play');
const $etiquetaplay = document.querySelector('.bi-pause-fill');
const $volBtn =document.querySelector('#vol-btn');
const $volRange =document.querySelector('.vol-range');
const $volumen = document.querySelector('#volumen');
const etiquetavol = document.querySelector('.bi-volume-up-fill');
const $siguiente = document.querySelector('#siguiente');
const cancion1 = document.querySelector('#cancion1');
const cancion2 = document.querySelector('#cancion2');
const cancion3 = document.querySelector('#cancion3');
const cancion4 = document.querySelector('#cancion4');
const cancion5 = document.querySelector('#cancion5');

//Mostrar el controlador
export function mostrarControlador() {
    $btnMusica.addEventListener('click', () => {
        //falta meter la animación para mostrarlo
        let mostrarPlay = $play.style.display === 'initial';
        $play.style.display = mostrarPlay ? $play.style.display = 'none' : $play.style.display = 'initial';
        let mostrarVol = $volBtn.style.display === 'initial';
        $volBtn.style.display = mostrarVol ? $volBtn.style.display = 'none' : $volBtn.style.display = 'initial';
        let mostrarSig = $siguiente.style.display === 'initial';
        $siguiente.style.display = mostrarSig ? $siguiente.style.display = 'none' : $siguiente.style.display = 'initial';
        let mostrar = $volRange.style.display === 'initial';
        $volRange.style.display = mostrar ? $volRange.style.display = 'none' : $volRange.style.display = 'initial';
    });
};
//Reproducir música
export function siguienteCancion() {
    $audio.addEventListener('ended', () => {
        let anterior = $audio.getAttribute('src');
        if (anterior == cancion1.src) {
            $audio.setAttribute('src', cancion2.src);
        } else if (anterior == cancion2.src) {
            $audio.setAttribute('src', cancion3.src);
        } else if (anterior == cancion3.src) {
            $audio.setAttribute('src', cancion4.src);
        } else if (anterior == cancion4.src) {
            $audio.setAttribute('src', cancion5.src);
        } else if (anterior == cancion5.src) {
            $audio.setAttribute('src', cancion1.src);
        }
        $audio.play();
        $audio.volume=0.3;
    });
};


// Pausar o Reproducir la música.
export function playPause() {
    $play.addEventListener('click', () => {
        // Actualizar el label del botón

        let pause = $etiquetaplay.classList.contains('bi-play-fill');
        if (pause === false) {
            $etiquetaplay.classList.replace('bi-pause-fill', 'bi-play-fill');
        } else {
            $etiquetaplay.classList.replace('bi-play-fill', 'bi-pause-fill');
        }
        // Reproducir o pausar
        pause ? $audio.play() : $audio.pause();
    });
};

//Mostrar el rango de volumen
// export function mostrarRange() {
//     $volBtn.addEventListener('click', () => {
//         //falta meter la animación para mostrarlo
//         let mostrar = $volRange.style.display === 'initial';
//         $volRange.style.display = mostrar ? $volRange.style.display = 'none' : $volRange.style.display = 'initial';
//     });
// };
//Cambiar la intensidad del volumen
export function cambiarVolumen() {
    
    $volumen.addEventListener('change', () => {
        let valorVol = $volumen.value;
        $audio.volume = valorVol;
        if (valorVol == 0) {
            etiquetavol.classList.replace('bi-volume-up-fill', 'bi-volume-mute-fill');
        } else {
            etiquetavol.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill');
        }
    });

};

//Pasar a la siguiente canción 
export function saltarCancion() {
    $siguiente.addEventListener('click', () => {
        let anterior = $audio.getAttribute('src');
        if (anterior == cancion1.src) {
            $audio.setAttribute('src', cancion2.src);
        } else if (anterior == cancion2.src) {
            $audio.setAttribute('src', cancion3.src);
        } else if (anterior == cancion3.src) {
            $audio.setAttribute('src', cancion4.src);
        } else if (anterior == cancion4.src) {
            $audio.setAttribute('src', cancion5.src);
        } else if (anterior == cancion5.src) {
            $audio.setAttribute('src', cancion1.src);
        }
        $etiquetaplay.classList.contains('bi-play-fill') ? $etiquetaplay.classList.replace('bi-play-fill', 'bi-pause-fill') : $audio.play();
        $audio.play();
    });
};