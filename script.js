// RECIBIR EMAILS (Con EmailJs):
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_xr8h2tz';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    }
  );
});

// Para cerrar la pestaña de búsqueda en dispositivo móvil
$(document).ready(function() {
  $(".navbar-nav a.nav-link").on("click", function() {
    var target = $(this).attr("href");

    // Desplazarse a la sección correspondiente con animación
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 500); // El número 800 es la duración de la animación en milisegundos

    // Cerrar la pestaña de navegación en dispositivos móviles
    $(".navbar-toggler").addClass("collapsed");
    $("#navbarNav").removeClass("show");
  });
});

// Agrega una animación al hacer clic en los elementos de la barra de navegación
$(document).ready(function() {
  $('.nav-link').click(function() {
    $(this).addClass('animate__animated animate__bounce'); // Agrega una animación al hacer clic
    setTimeout(function() {
      $('.nav-link').removeClass('animate__animated animate__bounce'); // Elimina la animación después de un tiempo
    }, 1000); // Cambia esto según la duración de tu animación
  });
});

// Obtén todos los botones con la clase btn-bounce
const bounceButtons = document.querySelectorAll('.btn-bounce');

// Agrega un event listener para cada botón
bounceButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remueve la clase btn-bounce
    button.classList.remove('btn-bounce');

    // Agrega la clase btn-bounce después de un pequeño retraso
    setTimeout(function() {
      button.classList.add('btn-bounce');
    }, 10);
  });
});

// Selecciona el enlace de "Contacto" en la barra de navegación
const contactoLink = document.querySelector('a[href="#contact"]');

// Selecciona el elemento <h3> en la sección de contacto
const contactHeading = document.getElementById('contact-heading');

// Agrega un evento de clic al enlace de "Contacto" para iniciar la animación
contactoLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Variable para contar las repeticiones de la animación
  let animationCount = 0;

  // Función para iniciar la animación de rebote
  function startBounceAnimation() {
    if (animationCount < 6) {
      anime({
        targets: contactHeading,
        translateY: [
          { value: -10, duration: 100, easing: 'easeInOutSine' },
          { value: 10, duration: 100, easing: 'easeInOutSine' },
          { value: 0, duration: 100, easing: 'easeInOutSine' }
        ],
        complete: function() {
          animationCount++;

          // Si se completaron las 6 repeticiones, detener la animación
          if (animationCount >= 6) {
            isAnimating = false;
          } else {
            // Iniciar la siguiente repetición
            startBounceAnimation();
          }
        }
      });
    }
  }

  // Iniciar la primera repetición
  startBounceAnimation();
});

// Agrega un evento de clic al enlace "Sobre Mí" en la barra de navegación
const sobreMiLink = document.querySelector('a.sobre-mi-link');

sobreMiLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Selecciona los elementos dentro de la sección "Sobre Mí" a los que deseas aplicar el efecto de rebote
  const sobreMiElements = document.querySelectorAll('.animate__animated');

  // Elimina la clase de animación actual de los elementos
  sobreMiElements.forEach((element) => {
    element.classList.remove('animate__animated', 'animate__bounce');
  });

  // Agrega la clase de animación nuevamente para reiniciarla después de un breve retraso
  setTimeout(function() {
    sobreMiElements.forEach((element) => {
      element.classList.add('animate__animated', 'animate__bounce');
    });
  }, 45); // Puedes ajustar el tiempo según tu preferencia
});

// Agregar un evento de clic al enlace de "Inicio" para volver a la cabecera
const inicioLink = document.getElementById('inicio-link');

inicioLink.addEventListener('click', function(event) {
  event.preventDefault();

  // Selecciona la cabecera por su clase CSS
  const cabecera = document.querySelector('header');

  // Elimina la clase de animación actual
  cabecera.classList.remove('animate__animated', 'animate__bounceInLeft');

  // Agrega la clase de animación nuevamente para reiniciarla
  setTimeout(function() {
    cabecera.classList.add('animate__animated', 'animate__bounceInLeft');
  }, 10); // Puedes ajustar el tiempo según tu preferencia

  // Desplaza la página a la cabecera
  const headerOffset = cabecera.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: headerOffset,
    behavior: 'smooth' // Agrega un desplazamiento suave (se puede mofificar)
  });
});







  
  
  








