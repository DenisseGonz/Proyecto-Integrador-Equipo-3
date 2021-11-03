/*El siguiente codigo puede llenar las cards de productos de cualquier página
funciona haciendo una petición a un archivo json que al menos por ahora es local
para que todos los productos sean colocados conviene quitar el primer if 
que hace la comprobación si el producto esta clasificado como destacado que es la
condicion para que aparezca en el inicio puede agregar algun otro tipo de atributo 
al archivo json y modificar el condicional para que solo se agreguen los productos 
con ese atributo o simplemente quitarlo para que todos se agreguen 
(como en la de productos)*/

/*En caso de querer usar este script es posible que necesite crear un div con id #productos
o en su defecto cambiar estas lineas apropiadamente por el id de su página*/
import { max } from "lodash";
import Swal from "sweetalert2";
export function agprodini(){
const $contenedor = document.querySelector("#productos");
const $carrusel = document.querySelector("#carrusel");

fetch("../src/productos.json")
    .then(resp => resp.json())
    .then(data => {
        var j=0;
        data.forEach(i => {
            if (i.destacado == "si") {
                let $singleProduct = document.createElement("div");
                var id=`img${j+1}`;
                $singleProduct.className = "producto col-md-6 col-lg-4 col-xl-3";
                var a = `<div class="producto__parte-1">
                        <img id="${id}" class="producto__parte-1--img" src="${i.img}">`
                if (i.descuento != " ") {
                    a = a +`<span class="producto__parte-1--descuento">${i.descuento}</span>`
                }
                if (i.tipo != " ") {
                    a = a + `<span class="producto__parte-1--nuevo">${i.tipo}</span>`
                }
                a = a + `<ul class="producto__parte-1--ul">
                    <li><a href="#" class="chest"></a></li>
                    </ul>
                </div>
                <div class="producto__parte-2">
                <h3 class="producto__parte-2--titulo">${i.nombre}</h3>`
                if (i.antiguoPrecio !== " ") {
                    a = a + `<h4 class="producto__parte-2--viejo-precio">${i.antiguoPrecio}</h4>`
                }
                a = a +`<h4 class="producto__parte-2--precio">${i.precio}</h4></br>
                <span class="btn producto__parte-2--boton">
                    <a href="#">Agregar al baúl</a>
                </span>
                </div>`
                /*Agregare esta linea para probar una cuestion con el cofre*/
                $singleProduct.innerHTML = a
                $contenedor.appendChild($singleProduct);
                /*esta parte del codigo solo agrega el carrusel de la vista móvil puede ignorarse*/
                let $caritem = document.createElement("div");
                if (j==0) {
                    $caritem.className = "carousel-item active w-80";
                } else {
                    $caritem.className = "carousel-item w-80";
                }
                $caritem.innerHTML=a;
                $carrusel.appendChild($caritem);
                j++;
                /*esta parte del codigo genera las vistas detalladas*/
                let $img=document.querySelector(`#${id}`);
                $img.addEventListener("click",()=>{
                    Swal.fire({
                        html:
                        `<img class="producto__parte-1--img-pop" src=${i.img}>
                        <h3 class="producto__parte-2--titulo-des">${i.nombre}</h3>
                         <h4 class="producto__parte-2--precioDes">${i.precio}</h4>
                         <h4 class="producto__parte-2--descripcion">${i.descripcion}</h4>`,
                        showCloseButton:true,
                        confirmButtonText:"Agregar al baúl",
                        confirmButtonColor:'#9f8932',
                        showCancelButton:true,
                        cancelButtonColor: '#363859',
                        cancelButtonText:"regresar",
                        background: 'rgba(0,0,0,0.8)',
                    })
                }) 
            }
        });
    })
    .catch(e => {
        console.log(e);
    });
}






