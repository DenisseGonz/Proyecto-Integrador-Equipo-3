import Swal from 'sweetalert2';

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})

/* 

const $recordadora=document.querySelector('#btn__olvidar');

$recordadora.addEventListener('click',()=>{
   Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  }); 
  console.log("Hay conexión");
}); */