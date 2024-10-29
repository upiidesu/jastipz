const navbarNav = document.querySelector('.navbar-nav');
const overlay = document.querySelector('.overlay');
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

// Saat icon keranjang di klik
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};
// Klik diluar shopping cart
const cart = document.querySelector('#cart');
document.addEventListener('click', function(e) {
    if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// Notif Animation
document.addEventListener('DOMContentLoaded', function() {
    const plusElements = document.querySelectorAll('.plus');
    const notifAnimation = document.querySelector('.notif-animation');
    const notif = document.querySelector('.notif');

    plusElements.forEach(plus => {
        plus.addEventListener('click', function(e) {
            // Reset posisi awal dan visibilitas animasi
            notifAnimation.style.transition = 'none';
            notifAnimation.style.bottom = '-2rem';
            notifAnimation.style.opacity = '0';

            // Paksa reflow untuk memulai ulang animasi
            notifAnimation.offsetHeight;

            // Mulai animasi
            notifAnimation.style.transition = 'bottom 0.3s ease, opacity 0.3s ease';
            notifAnimation.style.bottom = '-0.1rem';
            notifAnimation.style.opacity = '1';

            // Sembunyikan animasi setelah selesai
            setTimeout(() => {
                notif.style.opacity = '1';
                
                // Reset elemen setelah delay sesuai durasi animasi
                setTimeout(() => {
                    notifAnimation.style.transition = 'none';
                    notifAnimation.style.bottom = '-2rem';
                    notifAnimation.style.opacity = '0';
                }, 25);
            }, 225);
        });
    });
});

