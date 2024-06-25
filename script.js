const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  // Recolectar datos del formulario
  const formData = new FormData(form);
  const fromName = formData.get('from_name');
  const email = formData.get('email_id');
  const message = formData.get('message');

  // Enviar el mensaje usando EmailJS
  emailjs.send('service_your_service_id', 'template_your_template_id', {
    from_name: fromName,
    email: email,
    message: message
  })
    .then(function (response) {
      console.log('Email enviado correctamente', response.status, response.text);
      alert('¡Tu mensaje ha sido enviado correctamente!');
      form.reset(); // Limpiar el formulario después del envío
    }, function (error) {
      console.log('Error al enviar el email', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
});







  
  
  








