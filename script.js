const blob = document.querySelector('.blob');

// Movimiento del blob según la posición del ratón
if (blob) {
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) * 0.05;
        const moveY = (clientY - centerY) * 0.05;

        blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

//Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Verifica el estado del modo oscuro en el almacenamiento local
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon'); // Cambia a luna si el modo oscuro está activado
        }
        
        // Alterna el modo oscuro al hacer clic
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const icon = darkModeToggle.querySelector('i');

            if (body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('darkMode', 'disabled');
            }
        });