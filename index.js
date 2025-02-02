const btn = document.getElementById("check");
const header = document.getElementById("header");

btn.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 890px)").matches) {
    // Solo aplica los cambios si la ventana tiene un ancho máximo de 890 píxeles
    if (header.style.height === "100vh") {
      header.style.height = "40px";
    } else {
      header.style.height = "100vh";
    }
  }
  // Si la ventana es más ancha que 890 píxeles, no hagas nada
});
// Verifica el estado de la ventana cuando cambia de tamaño
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 890px)").matches) {
    // Restaura la altura original si la ventana es más ancha que 890 píxeles
    header.style.height = "40px";
  }
});

window.addEventListener("scroll", () => {
  // Verifica la posición actual del scroll
  var scrollPosition = window.scrollY;

  // Cambia el color de fondo basándote en la posición del scroll
  if (scrollPosition > 100) {
    header.style.backgroundColor = "rgba(48, 36, 36, 0.863)";
  } else {
    header.style.backgroundColor = "";
  }
  
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Verifica que el reCAPTCHA esté resuelto
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert('Por favor, completa el reCAPTCHA.');
    return;
  }

  // Envía el formulario usando Fetch API
  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Mensaje enviado correctamente');
      this.reset(); // Limpia los campos del formulario
    } else {
      alert('Error al enviar el mensaje');
    }
  })
  .catch(error => {
    alert('Error al enviar el mensaje');
  });
});