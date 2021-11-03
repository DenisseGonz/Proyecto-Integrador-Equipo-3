//export function gryffindor() {
    //fetch('../src/casas.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //Aspectos generales de la página
            let colorPrincipal = data.Gryffindor.configuracion.color_principal;
            let colorSecundario =
                data.Gryffindor.configuracion.color_secundario;
            let escudoCasa = data.Gryffindor.configuracion.escudo;
            let imgFondoPrincipal =
                data.Gryffindor.configuracion.img_fondo_principal;
            let imgFondoSala = data.Gryffindor.configuracion.img_fondo_casa;
            let nombreCreador = data.Gryffindor.configuracion.creador;
            let imgCreador = data.Gryffindor.configuracion.img_creador;
            let infoCreador = data.Gryffindor.configuracion.info_creador;

            //Información del carrusel
            let curiosidadesArray = data.Gryffindor.curiosidades;
            console.log(curiosidadesArray);
            const json = JSON.parse(data);
            console.log(json);
        })
        .catch((err) => console.log(err));
}//termina el fetch


export function slytherin() {}

export function hufflepuff() {}

export function ravenclaw() {}
