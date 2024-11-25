$(document).ready(function() {
    // Navegación
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        
        // Actualizar menú activo
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        // Mostrar sección correspondiente
        $('.section').removeClass('active');
        $(targetId).addClass('active');

        // Cerrar menú móvil al hacer clic
        $('.navbar-collapse').collapse('hide');
    });

    // Manejo del formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        new sweetAlert("Enviado con éxito", "success", "success")
    });

    // Manejo del formulario de suscripción
    $('#subscribeForm').on('submit', function(e) {
        e.preventDefault();
        new sweetAlert("Suscripción exitosa", "success", "success")
    });

    // Animación suave al scroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
    });
});

