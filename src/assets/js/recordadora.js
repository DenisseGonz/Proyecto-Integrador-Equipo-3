import Swal from "sweetalert2";

export function recordadora(){
  const $recordar=document.querySelector('#btn__olvidar');

  $recordar.addEventListener('click',()=>{
    Swal.fire({
      title: '<h2><strong> ¡Olvidaste tu contraseña!</strong></h2>',
      imageUrl: '../src/assets/img/recordadora.gif',
      background: '#000',
      width:'300em',
      backdrop: `
      rgba(0,0,0,0.9)`,

      html:
      '<label for="inputPregunt" class="col pregunta__seguridad">Respuesta a tu pregunta de seguridad:</label>'+
      '<input type="text" class="formulario__datos--campos col-4 my-2" id="inputRespuesta"'+
          'placeholder="Respuesta a la pregunta de seguridad">',
 
      showCloseButton: true,
      
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Enviar',
        confirmButtonColor:'#9f8932'
      
    });
  })

} 
 