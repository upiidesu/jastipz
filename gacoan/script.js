const navbarNav = document.querySelector('.navbar-nav');
const overlay = document.querySelector('.overlay')
// Saat hamburger menu di klik, muncul sidebar
document.querySelector('#hamburger').onclick = (e) => {
    navbarNav.classList.toggle('active');
    overlay.classList.toggle('active');
    e.preventDefault();
};
// Klik diluar sidebar untuk menghilangkannya
const hamburger = document.querySelector('#hamburger');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        overlay.classList.remove('active');
    }
});
