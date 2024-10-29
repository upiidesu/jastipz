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
