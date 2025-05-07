
const toggleButton = document.getElementById('darkModeToggle');


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.body.style.transition = 'background-color 0.5s, color 0.5s';

