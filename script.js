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

// Countdown
let targetTime =  new Date(2024, 9, 19, 10, 0, 0); // 19 Oktober 2024, 10:00:00
// Bulan dimualai dari 0-11

function updateCountdown() {
    const now = new Date();  // Ambil waktu sekarang
    const timeDifference = targetTime - now;  // Hitung selisih waktu

    if (timeDifference > 0) {
        const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
        
        document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    } else {
        // Jika countdown habis, set teks ke 00:00:00
        document.getElementById('time').textContent = "00:00:00";
        clearInterval(countdownInterval);  // Hentikan interval jika waktu habis
    }
}

// Panggil updateCountdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);
