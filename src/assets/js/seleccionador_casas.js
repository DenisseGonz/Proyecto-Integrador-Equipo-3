import { data } from './data.js';
export function gryffindor() {
    //Aspectos generales de la página

    let vida__fundador = data[0][0][7];
    document.querySelector('.vida__fundador').innerHTML = vida__fundador;
    let retrato__fundador = data[0][0][6];
    document
        .querySelector('.retrato__fundador')
        .setAttribute('src', retrato__fundador);
    let nombre__fundador = data[0][0][5];
    document.querySelector('.nombre__fundador').innerHTML = nombre__fundador;

    //Información del carrusel
    let titulo__curiosidad, curiosidad, texto__curiosidad;

    for (let i = 0; i < data[0][1].length; i++) {
        // i es para el número de curiosidades (que son 5)

        titulo__curiosidad = data[0][1][i][0];
        document.querySelector(`.titulo__curiosidad-${i + 1}`).innerHTML =
            titulo__curiosidad;
        curiosidad = data[0][1][i][1];
        document
            .querySelector(`.curiosidad__${i + 1}`)
            .setAttribute('src', curiosidad);
        texto__curiosidad = data[0][1][i][2];
        document.querySelector(`.texto__curiosidad-${i + 1}`).innerHTML =
            texto__curiosidad;
    }
}

export function slytherin() {
    //Aspectos generales de la página

    let vida__fundador = data[1][0][7];
    document.querySelector('.vida__fundador').innerHTML = vida__fundador;
    let retrato__fundador = data[1][0][6];
    document
        .querySelector('.retrato__fundador')
        .setAttribute('src', retrato__fundador);
    let nombre__fundador = data[1][0][5];
    document.querySelector('.nombre__fundador').innerHTML = nombre__fundador;

    //Información del carrusel
    let titulo__curiosidad, curiosidad, texto__curiosidad;

    for (let i = 0; i < data[1][1].length; i++) {
        // i es para el número de curiosidades (que son 5)

        titulo__curiosidad = data[1][1][i][0];
        document.querySelector(`.titulo__curiosidad-${i + 1}`).innerHTML =
            titulo__curiosidad;
        curiosidad = data[1][1][i][1];
        document
            .querySelector(`.curiosidad__${i + 1}`)
            .setAttribute('src', curiosidad);
        texto__curiosidad = data[1][1][i][2];
        document.querySelector(`.texto__curiosidad-${i + 1}`).innerHTML =
            texto__curiosidad;
    }
}

export function hufflepuff() {
    //Aspectos generales de la página

    let vida__fundador = data[2][0][7];
    document.querySelector('.vida__fundador').innerHTML = vida__fundador;
    let retrato__fundador = data[2][0][6];
    document
        .querySelector('.retrato__fundador')
        .setAttribute('src', retrato__fundador);
    let nombre__fundador = data[2][0][5];
    document.querySelector('.nombre__fundador').innerHTML = nombre__fundador;

    //Información del carrusel
    let titulo__curiosidad, curiosidad, texto__curiosidad;

    for (let i = 0; i < data[2][1].length; i++) {
        // i es para el número de curiosidades (que son 5)

        titulo__curiosidad = data[2][1][i][0];
        document.querySelector(`.titulo__curiosidad-${i + 1}`).innerHTML =
            titulo__curiosidad;
        curiosidad = data[2][1][i][1];
        document
            .querySelector(`.curiosidad__${i + 1}`)
            .setAttribute('src', curiosidad);
        texto__curiosidad = data[2][1][i][2];
        document.querySelector(`.texto__curiosidad-${i + 1}`).innerHTML =
            texto__curiosidad;
    }
}

export function ravenclaw() {
    //Aspectos generales de la página

    let vida__fundador = data[3][0][7];
    document.querySelector('.vida__fundador').innerHTML = vida__fundador;
    let retrato__fundador = data[3][0][6];
    document
        .querySelector('.retrato__fundador')
        .setAttribute('src', retrato__fundador);
    let nombre__fundador = data[3][0][5];
    document.querySelector('.nombre__fundador').innerHTML = nombre__fundador;

    //Información del carrusel
    let titulo__curiosidad, curiosidad, texto__curiosidad;

    for (let i = 0; i < data[3][1].length; i++) {
        // i es para el número de curiosidades (que son 5)

        titulo__curiosidad = data[3][1][i][0];
        document.querySelector(`.titulo__curiosidad-${i + 1}`).innerHTML =
            titulo__curiosidad;
        curiosidad = data[3][1][i][1];
        document
            .querySelector(`.curiosidad__${i + 1}`)
            .setAttribute('src', curiosidad);
        texto__curiosidad = data[3][1][i][2];
        document.querySelector(`.texto__curiosidad-${i + 1}`).innerHTML =
            texto__curiosidad;
    }
}
