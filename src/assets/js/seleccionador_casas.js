export function gryffindor(){
    fetch('../src/casas.json').then(response => response.json() )
    .then(data =>{
        let colorPrincipal = data.Gryffindor.configuracion.color_principal;
        console.log(colorPrincipal);
        let body = document.querySelector('body');
        body.style.backgroundColor=colorPrincipal;
    }).catch(err => console.log(err));
}
export function slytherin(){

}
export function hufflepuff(){

}
export function ravenclaw(){

}