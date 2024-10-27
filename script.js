const blob = document.querySelector('.blob');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) * 0.05;
    const moveY = (clientY - centerY) * 0.05;

    blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
