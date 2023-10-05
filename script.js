// RECIBIR EMAILS (Con EmailJs): 
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_xr8h2tz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
//para cerrar la pestaña de busqueda en dispositivo movil
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
document.addEventListener('DOMContentLoaded', function() {
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
});


