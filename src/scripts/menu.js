document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.internal-links').classList.toggle('expanded');
    document.querySelector('.hamburger').classList.toggle('active');
});