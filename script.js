const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('is-active');
});