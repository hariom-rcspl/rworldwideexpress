const headerNav = document.getElementById("header-nav")
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        headerNav.classList.add('scrolled');
    } else {
        headerNav.classList.remove('scrolled');
    }
});