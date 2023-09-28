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
    }, 800); // El número 800 es la duración de la animación en milisegundos

    // Cerrar la pestaña de navegación en dispositivos móviles
    $(".navbar-toggler").addClass("collapsed");
    $("#navbarNav").removeClass("show");
  });
});
