//Efecto en el subtitulo "acerca de Nosotros"
window.onload = function() {
  var titulo = document.getElementById('titulo');
  titulo.style.transition = 'transform 1s ease-in-out';
  titulo.style.transform = 'translateX(50px)';
};
//efecto en los parrafos que estan en "Acerca de Nosotros"
window.onload = function() {
  var parrafos = document.querySelectorAll('.parrafo-container');
  
  parrafos.forEach(function(parrafo) {
      parrafo.style.transition = 'transform 0.6s ease-in-out';
  });

  parrafos.forEach(function(parrafo) {
      parrafo.addEventListener('mouseenter', function() {
          parrafo.style.transform = 'scale(1.05)';
      });

      parrafo.addEventListener('mouseleave', function() {
          parrafo.style.transform = 'scale(1)';
      });
  }); 
};

//Swal
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "!Gracias¡ Te suscribiste correctamente",
      showConfirmButton: false,
      timer: 3000
    });
    document.getElementById('email').value = '';
  });
  
  
  document.getElementById('mostrarTerminos').addEventListener('click', function(event) {
    event.preventDefault(); 
    Swal.fire({
      title: 'Términos y Condiciones',
      html: '<p class="scroll-element">Al utilizar este servicio, aceptas cumplir con los términos y condiciones establecidos. Este servicio se proporciona tal cual y no nos hacemos responsables de ningún daño directo, indirecto, incidental, especial, emergente o punitivo, incluidos, entre otros, daños personales, lucro cesante, interrupción del negocio, pérdida de programas o datos en tu equipo, u otros daños similares, ya sea que se notifiquen o sepan de la posibilidad de tales daños, resultantes del uso o la imposibilidad de utilizar este servicio. Nos reservamos el derecho de modificar, suspender o terminar el servicio en cualquier momento sin previo aviso.</p>',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#DEB887",
    });
  });

// Map config start

let bounds = L.latLngBounds([
    [12.437303, -81.9289],
    [-4.2272, -66.8698],
  ]);
  
  let map = L.map("map", {
    center: [4.710989, -74.072092],
    zoom: 10,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
  bounds: bounds
}).addTo(map);
  
  let lugares = [
    { nombre: "Plaza de Bolívar", coordenadas: [4.5981, -74.0758] },
    { nombre: "Zona T", coordenadas: [4.6686, -74.0549] },
    ,
    { nombre: "Norte", coordenadas: [4.710989, -74.072092] },
  ];
  
  lugares.forEach(function (lugar) {
    let marker = L.marker(lugar.coordenadas).addTo(map);
    marker.bindPopup("<b>" + lugar.nombre + "</b>");
  });