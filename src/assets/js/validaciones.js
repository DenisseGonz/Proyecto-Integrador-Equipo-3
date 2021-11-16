
import Swal from 'sweetalert2';
const expRegLetras = /^[a-zA-Z]{2,}?/
const expRegContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
const expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//PAGINA DE USUARIOS
export function cambiarContraseña() {
    const $boton_enviar = document.getElementById('usuario__boton-contraseña');

    $boton_enviar.addEventListener('click', (ev) => {
        ev.preventDefault();
        let valor1 = document.getElementById('input__contraseña-1').value;
        let valor2 = document.getElementById('input__contraseña-2').value;
        let cumple = expRegContraseña.test(valor1);
        console.log(cumple);
        if (valor1 == '' || valor2 == '') {
            //Valores vacíos
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Algún campo está vacío, verifica la información<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (valor1 !== valor2) {
            //Contraseñas diferentes
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Las contraseñas no coinciden<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (valor1.length < 8 || valor1.length > 16) {
            //La contraseña pasa de los 16 caracteres
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Las contraseñas no son de 8 a 16 caracteres<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumple || valor1.includes(' ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Usa solo letras, números, carácteres especiales y no uses espacios. La contraseña debe contener al menos una mayúscula, al menos una minúscula y al menos un número<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (cumple) {
            //la contraseña tiene una forma correcta. FALTA CONFIRMAR QUE LA VIEJA CONTRASEÑA NO SEA IGUAL A LA NUEVA
            Swal.fire({
                html: '<h2 class="text-white">Solo un paso más</h2><p class="text-white">Ingresa por favor tu contraseña actual.<p>',
                input: 'password',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                showCancelButton: true,
                cancelButtonColor: '#9f8932',
                cancelButtonText: 'Cancelar',
                background: 'rgba(0,0,0,0.8)',
                icon: 'question',
                iconColor: '#9f8932'
            }).then((actual) => {
                if (actual.value == 'Renfihus33') {
                    Swal.fire({
                        html: '<h2 class="text-white">¡Magnífico!</h2><p class="text-white">Tu contraseña se acaba de actualizar.<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'success',
                        iconColor: '#9f8932'
                    });
                } else {
                    Swal.fire({
                        html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">La contraseña que ingresaste no es la actual. Intentalo de nuevo<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'error',
                        iconColor: '#9f8932'
                    });
                }
            });

        }


    });
}

export function cambiarCorreo() {
    const $boton_correo = document.getElementById('usuario__boton-correo');

    $boton_correo.addEventListener('click', (ev) => {
        ev.preventDefault();
        let valor1 = document.getElementById('input__correo-1').value;
        let valor2 = document.getElementById('input__correo-2').value;
        let cumple = expRegCorreo.test(valor1);

        if (valor1 == '' || valor2 == '') {
            //Valores vacíos
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Algún campo está vacío, verifica la información<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (valor1 !== valor2) {
            //Contraseñas diferentes
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Los correos no coinciden<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumple || valor1.includes(' ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Recuerda que los correos no tienen espacio. Intentaló de nuevo<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (cumple) {
            //el correo tiene una forma correcta. FALTA CONFIRMAR QUE EL VIEJO CORREO NO SEA IGUAL AL NUEVO
            Swal.fire({
                html: '<h2 class="text-white">Solo un paso más</h2><p class="text-white">Ingresa por favor tu contraseña actual.<p>',
                input: 'password',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                showCancelButton: true,
                cancelButtonColor: '#9f8932',
                cancelButtonText: 'Cancelar',
                background: 'rgba(0,0,0,0.8)',
                icon: 'question',
                iconColor: '#9f8932'
            }).then((actual) => {
                if (actual.value == 'Renfihus33') {
                    //FALTA METER LA COMPROBACIÓN DE QUE ES LA CONTRASEÑA
                    Swal.fire({
                        html: '<h2 class="text-white">¡Magnífico!</h2><p class="text-white">Tu correo se acaba de actualizar.<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'success',
                        iconColor: '#9f8932'
                    });
                } else {
                    Swal.fire({
                        html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">El correo que metiste ya esta asignado a otra cuenta. Intentalo de nuevo<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'error',
                        iconColor: '#9f8932'
                    });
                }
            });

        }
    });
}

export function cambiarPregunta() {

    const $boton_pregunta = document.getElementById('usuario__boton-pregunta');
    $boton_pregunta.addEventListener('click', (ev) => {
        ev.preventDefault();
        let valor1 = document.getElementById('input__pregunta').value;
        let valor2 = document.getElementById('input__respuesta').value.toLowerCase();

        if (valor1 == 0 || valor2 == '') {
            //Valores vacíos
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Algún campo está vacío, verifica la información<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (valor2.includes('drop ') || valor2.includes('delete ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Haz encontrado una palabra prohibida. Reformula tu respuesta<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else {
            //la pregunta y respuesta están bien
            Swal.fire({
                html: '<h2 class="text-white">Solo un paso más</h2><p class="text-white">Ingresa por favor tu contraseña actual.<p>',
                input: 'password',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                showCancelButton: true,
                cancelButtonColor: '#9f8932',
                cancelButtonText: 'Cancelar',
                background: 'rgba(0,0,0,0.8)',
                icon: 'question',
                iconColor: '#9f8932'
            }).then((actual) => {
                if (actual.value == 'Renfihus33') {
                    //FALTA METER LA COMPROBACIÓN DE QUE ES LA CONTRASEÑA
                    Swal.fire({
                        html: '<h2 class="text-white">¡Magnífico!</h2><p class="text-white">Tu pregunta de seguridad y tu respuesta se acaban de actualizar.<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'success',
                        iconColor: '#9f8932'
                    });
                } else {
                    Swal.fire({
                        html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">La contraseña no coincide. Intentalo de nuevo<p>',
                        showCloseButton: true,
                        confirmButtonColor: '#363859',
                        background: 'rgba(0,0,0,0.8)',
                        icon: 'error',
                        iconColor: '#9f8932'
                    });
                }
            });
        }
    });
}

export function borrarCuenta() {

    const $boton_borrar = document.getElementById('usuario__boton-borrar');

    $boton_borrar.addEventListener('click', (ev) => {
        ev.preventDefault();
        Swal.fire({
            html: '<h2 class="text-white">Solo un paso más. ¿Estas seguro?</h2><p class="text-white">Si estas seguro entonces ingresa por favor tu contraseña actual.<p>',
            input: 'password',
            showCloseButton: true,
            confirmButtonColor: '#363859',
            showCancelButton: true,
            cancelButtonColor: '#9f8932',
            cancelButtonText: 'Cancelar',
            background: 'rgba(0,0,0,0.8)',
            icon: 'question',
            iconColor: '#9f8932'
        }).then((actual) => {
            if (actual.value == 'Renfihus33') {
                //FALTA METER LA COMPROBACIÓN DE QUE ES LA CONTRASEÑA
                Swal.fire({
                    html: '<h2 class="text-white">Lumos</h2><p class="text-white">Tu cuenta se elimino :(<p>',
                    showCloseButton: true,
                    confirmButtonColor: '#363859',
                    background: 'rgba(0,0,0,0.8)',
                    icon: 'success',
                    iconColor: '#9f8932'
                });
            } else {
                Swal.fire({
                    html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">La contraseña no coincide. Intentalo de nuevo<p>',
                    showCloseButton: true,
                    confirmButtonColor: '#363859',
                    background: 'rgba(0,0,0,0.8)',
                    icon: 'error',
                    iconColor: '#9f8932'
                });
            }
        });
    });
}

//PAGINA DE INDEX
export function inicioCorreo() {
    const $btn_entrar = document.getElementById('btnEntrar');
    $btn_entrar.addEventListener('click', (ev) => {
        ev.preventDefault();
        let correo = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputContrasenia').value;    
        //Validación correo y contraseña por una expresión regular
        let cumpleEmail = expRegCorreo.test(correo);
        let cumplePass = expRegContraseña.test(password);

        if (correo == '' || password == '') {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Algún campo está vacío, verifica la información<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (password.length < 8 || password.length > 16) {
            //La contraseña pasa de los 16 caracteres
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">La contraseña no es correcta<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumplePass || !cumpleEmail || correo.includes(' ') || password.includes(' ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">tu correo o tu contraseña son incorrectos<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            Toast.fire({
                background: 'rgba(0,0,0,0.8)',
                icon: 'success',
                iconColor: '#9f8932',
                title: '<h2 class="text-white">Signed in successfully</h2>'
            });
            setTimeout(() => { window.location.href = 'inicio.html' }, 1600);
        }
    });
}

//PAGINA DE REGISTRO
export function registroUsuario() {
    let $btn_registrar = document.getElementById('botonRegistrar');
    $btn_registrar.addEventListener('click', (ev) => {
        ev.preventDefault();
        let nombre = document.getElementById('inputNombre').value;
        let familia = document.getElementById('inputFamilia').value;
        let correo = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputContraseña').value;
        let confirm = document.getElementById('inputConfirma').value;
        //para los radiobuttons son booleanos con checked 
        let gry = document.getElementById('radio1').checked;
        let huf = document.getElementById('radio2').checked;
        let rav = document.getElementById('radio3').checked;
        let sly = document.getElementById('radio4').checked;
        let pregunta = document.getElementById('inputPregunta').value;
        let respuesta = document.getElementById('inputRespuesta').value;
        //Validación por una expresión regular
        let cumpleNombre = expRegLetras.test(nombre);
        let cumpleFamilia = expRegLetras.test(familia);
        let cumpleEmail = expRegCorreo.test(correo);
        let cumplePass = expRegContraseña.test(password);

        if (nombre == '' || familia == '' || correo == '' || password == '' || confirm == '' || pregunta == 0 || respuesta == '') {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Algún campo está vacío, verifica la información<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (password !== confirm) {
            //Contraseñas diferentes
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Las contraseñas no coinciden<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (password.length < 8 || password.length > 16) {
            //La contraseña pasa de los 16 caracteres
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Las contraseñas no son de 8 a 16 caracteres<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumplePass || password.includes(' ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Usa solo letras, números, carácteres especiales y no uses espacios para la contraseña. La contraseña debe contener al menos una mayúscula, al menos una minúscula y al menos un número<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumpleEmail || correo.includes(' ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Recuerda que los correos no tienen espacio. Intentaló de nuevo<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (!cumpleNombre || !cumpleFamilia) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Para tu nombre y tu familia solo utiliza letras.<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else if (nombre.includes('drop ') || familia.includes('drop ') || respuesta.includes('drop ') || nombre.includes('delete ') || familia.includes('delete ') || respuesta.includes('delete ')) {
            Swal.fire({
                html: '<h2 class="text-white">Algo salió mal</h2><p class="text-white">Haz encontrado una palabra prohibida. Reformula tus respuesta<p>',
                showCloseButton: true,
                confirmButtonColor: '#363859',
                background: 'rgba(0,0,0,0.8)',
                icon: 'error',
                iconColor: '#9f8932'
            });
        } else {
            //Falta la validación de correo con la base de datos
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            Toast.fire({
                background: 'rgba(0,0,0,0.8)',
                icon: 'success',
                iconColor: '#9f8932',
                title: '<h2 class="text-white">El registro se realizó correctamente</h2>'
            });
            setTimeout(() => { window.location.href = 'inicio.html' }, 1600);
        }
    });
}