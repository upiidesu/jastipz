const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const masuk = document.getElementById('masuk');
const daftar = document.getElementById('daftar');

daftar.addEventListener('click', () => {
    container.classList.add("active");
});

masuk.addEventListener('click', () => {
    container.classList.remove("active");
});