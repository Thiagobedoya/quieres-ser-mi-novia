document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');

    if (noBtn) {
        // Detecta si el dispositivo es táctil
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Si no es un dispositivo táctil, activa el movimiento del botón
        if (!isTouchDevice) {
            noBtn.addEventListener('mouseover', () => {
                const container = noBtn.parentElement;
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;

                // Restringe el movimiento dentro del contenedor
                const x = Math.floor(Math.random() * (containerWidth - noBtn.clientWidth));
                const y = Math.floor(Math.random() * (containerHeight - noBtn.clientHeight));

                noBtn.style.position = 'absolute';
                noBtn.style.left = `${x}px`;
                noBtn.style.top = `${y}px`;
            });
        }
    }

    if (window.location.pathname.includes('si.html')) {
            const createHeart = () => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3 y 5 segundos
                document.body.appendChild(heart);
                setTimeout(() => {
                    heart.remove();
                }, 5000); // Elimina el corazón después de la animación
            };
            setInterval(createHeart, 200); // Crea un nuevo corazón cada 200ms
        }
    });


