/* 
  Este es el archivo de configuración de las partículas. No se uso el JSON porque pedía 
  hostear el servidor y no me salía, así que el contenido del JSON lo coloque en el objeto
  de particles JS
  Para los valores permitidos de las propiedades consultar el github de particles.js
*/

particlesJS('particles-js',
  {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": "#99810b"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 50,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 50,
        "size": 7,
        "duration": 5,
        "opacity": 0.8,
        "speed": 0.5
      },
      "repulse": {
        "distance": 50,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
