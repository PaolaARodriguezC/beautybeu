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