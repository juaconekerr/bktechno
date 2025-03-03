// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validación básica
  if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
  }

  // Validación de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
  }

  // Aquí puedes agregar código para enviar el formulario a un servidor
  // o para mostrar un mensaje de confirmación.

  // Ejemplo: Mostrar mensaje de confirmación
  document.getElementById('mensaje-confirmacion').style.display = 'block';

  // Limpiar el formulario
  document.getElementById('contact-form').reset();
});

// Animación de desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animación de logos de marcas al hacer hover
document.querySelectorAll('.marcas-grid img').forEach(img => {
  img.addEventListener('mouseover', function() {
      this.style.filter = 'grayscale(0%)';
  });

  img.addEventListener('mouseout', function() {
      this.style.filter = 'grayscale(100%)';
  });
});
window.addEventListener('scroll', function() {
  var header = document.getElementById('miHeader');
  if (window.scrollY > 60) { // Ajusta el valor 100 según sea necesario
      header.classList.add('header-oculto');
  } else {
      header.classList.remove('header-oculto');
  }
});
