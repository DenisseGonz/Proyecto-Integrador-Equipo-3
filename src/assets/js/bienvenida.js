import Swal from "sweetalert2";

export function bienvenida () {

    Swal.fire({
        title: '<h2><strong> ¡Bienvenidx!</strong></h2>',
        imageUrl: '../src/assets/img/logo.png',
        background: '#000',
        width:'300em',
        backdrop: `
        rgba(0,0,0,0.9)`,

        html:

          '<h3>Entra para <b> adquirir productos escolares </b></h3> ' +
          '<h3> y enterarte de <b>eventos en Hogwarts</b> </h3>' ,
        showCloseButton: true,
        
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Continuar',
          confirmButtonColor:'#9f8932'
        
      })
    
}

