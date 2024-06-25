document.addEventListener('DOMContentLoaded', function () {
    // Tu código de inicialización de Bootstrap u otras bibliotecas aquí, si las tienes
});

// Desplazamiento suave y cierre del menú en dispositivos móviles
$(document).ready(function () {
    $(".navbar-nav a.nav-link").on("click", function () {
        var target = $(this).attr("href");

        // Desplazamiento a la sección correspondiente con animación
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 500); // Duración de la animación en milisegundos

        // Cerrar la pestaña de navegación en dispositivos móviles
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarNav").removeClass("show");
    });
});

// Animación al hacer clic en los elementos de la barra de navegación
$(document).ready(function () {
    $('.nav-link').click(function () {
        $(this).addClass('animate__animated animate__bounce'); // Agrega animación al hacer clic
        setTimeout(function () {
            $('.nav-link').removeClass('animate__animated animate__bounce'); // Elimina la animación después de un tiempo
        }, 1000); // Ajusta el tiempo según la duración de tu animación
    });
});

// Animación de botones con clase 'btn-bounce'
const bounceButtons = document.querySelectorAll('.btn-bounce');

bounceButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.classList.remove('animate__animated', 'animate__bounce');

        // Forzar el reflow para reiniciar la animación
        void button.offsetWidth;

        button.classList.add('animate__animated', 'animate__bounce');
    });
});

// Animación al hacer clic en el enlace "Contacto" en la barra de navegación
const contactoLink = document.querySelector('a[href="#contact"]');

contactoLink.addEventListener('click', function (event) {
    event.preventDefault();

    let animationCount = 0;

    function startBounceAnimation() {
        if (animationCount < 6) {
            anime({
                targets: '#contact-heading',
                translateY: [
                    { value: -10, duration: 100, easing: 'easeInOutSine' },
                    { value: 10, duration: 100, easing: 'easeInOutSine' },
                    { value: 0, duration: 100, easing: 'easeInOutSine' }
                ],
                complete: function () {
                    animationCount++;

                    if (animationCount < 6) {
                        startBounceAnimation();
                    }
                }
            });
        }
    }

    startBounceAnimation();
});

// Animación al hacer clic en el enlace "Sobre Mí" en la barra de navegación
const sobreMiLink = document.querySelector('a.sobre-mi-link');

sobreMiLink.addEventListener('click', function (event) {
    event.preventDefault();

    const sobreMiElements = document.querySelectorAll('.animate__animated');

    sobreMiElements.forEach(function (element) {
        element.classList.remove('animate__animated', 'animate__bounce');
    });

    setTimeout(function () {
        sobreMiElements.forEach(function (element) {
            element.classList.add('animate__animated', 'animate__bounce');
        });
    }, 45); // Ajusta el tiempo según tu preferencia
});

// Animación al hacer clic en el enlace "Inicio" para volver a la cabecera
const inicioLink = document.getElementById('inicio-link');

inicioLink.addEventListener('click', function (event) {
    event.preventDefault();

    const header = document.querySelector('header');

    header.classList.remove('animate__animated', 'animate__bounceInLeft');

    setTimeout(function () {
        header.classList.add('animate__animated', 'animate__bounceInLeft');
    }, 10); // Ajusta el tiempo según tu preferencia

    const headerOffset = header.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: headerOffset,
        behavior: 'smooth'
    });
});

