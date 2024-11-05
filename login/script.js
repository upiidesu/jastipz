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

const daftarBtn = document.querySelector('.btn.daftar');
const masukBtn = document.querySelector('.btn.masuk');
const loaderDaftar = daftarBtn.querySelector('.loader');
const loaderMasuk = masukBtn.querySelector('.loader');

// Fungsi untuk menampilkan loader dan mengalihkan ke halaman lain pada masuk
masukBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loaderMasuk.classList.add('active'); 
    
    setTimeout(() => {
        loaderMasuk.classList.remove('active');
        loginForm.reset();
        window.location.href = "../index.html";
    }, 1000);
});

const notif = document.querySelector('.notif');
// Fungsi untuk menambahkan kelas active dengan delay pada daftar
daftarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loaderDaftar.classList.add('active');
    
    setTimeout(() => {
        loaderDaftar.classList.remove('active');
        notif.classList.add('active');
        signupForm.reset();
        
        // Menghilangkan class active pada notif
        setTimeout(() => {
            notif.classList.remove('active');
        }, 5000);
    }, 1000);
});

const notifBtn = document.querySelector('.notif-btn');
notifBtn.addEventListener('click', (e) => {
    notif.classList.remove('active');
});

// Kosongkan Form
const signupForm = document.querySelector('#signupForm');
const loginForm = document.querySelector('#loginForm');