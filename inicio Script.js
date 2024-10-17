const pass = document.getElementById('pass'),
      icon = document.getElementById('togglePassword');

icon.addEventListener('click', () => {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove('bxs-hide');
    icon.classList.add('bxs-show'); // Cambia el ícono para mostrar la contraseña
  } else {
    pass.type = "password";
    icon.classList.remove('bxs-show');
    icon.classList.add('bxs-hide'); // Cambia el ícono para ocultar la contraseña
  }
});
