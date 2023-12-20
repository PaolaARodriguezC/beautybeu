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
        parrafo.style.transition = 'transform 0.3s ease-in-out';
    });

    parrafos.forEach(function(parrafo) {
        parrafo.addEventListener('mouseover', function() {
            parrafo.style.transform = 'scale(05.02)';
        });

        parrafo.addEventListener('mouseout', function() {
            parrafo.style.transform = 'scale(1)';
        });
    });
};

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
  
  let Stadia_AlidadeSmoothDark = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 0,
      maxZoom: 20,
      ext: "png",
      bounds: bounds,
    }
  ).addTo(map);
  
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