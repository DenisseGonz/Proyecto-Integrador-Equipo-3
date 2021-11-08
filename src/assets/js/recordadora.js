import Swal from 'sweetalert2';
export function recordadora() {

const $recordar=document.querySelector('#btn__olvidar');

$recordar.addEventListener('click',()=>{
   Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  }); 
  console.log("Hay conexión");
});

}