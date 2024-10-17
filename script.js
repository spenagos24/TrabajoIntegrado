document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.barra-lateral');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    // Función para mostrar/ocultar el menú
    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuBtn.classList.toggle('hidden');
    }

    // Abrir menú al hacer clic en el botón del menú
    menuBtn.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en la X
    closeBtn.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic fuera del menú (overlay)
    overlay.addEventListener('click', toggleMenu);
});
