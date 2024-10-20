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
function startCountdown(targetTime, countdownId, timeId) {
    function updateCountdown() {
        const now = new Date();  // Ambil waktu sekarang
        const timeDifference = targetTime - now;  // Hitung selisih waktu

        if (timeDifference > 0) {
            const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
            
            document.getElementById(timeId).textContent = `${hours}:${minutes}:${seconds}`;
        } else {
            // Jika countdown habis, set teks ke 00:00:00
            document.getElementById(timeId).textContent = "00:00:00";
            clearInterval(countdownInterval);  // Hentikan interval jika waktu habis
        }
    }

    // Panggil updateCountdown setiap detik
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Atur waktu target untuk setiap promo
let targetTime1 = new Date(2024, 9, 20, 10, 0, 0); // 20 Oktober 2024, 10:00:00
let targetTime2 = new Date(2024, 9, 21, 12, 0, 0); // Bulan diawali dari 0-11
let targetTime3 = new Date(2024, 9, 20, 11, 30, 0); 
let targetTime4 = new Date(2024, 9, 22, 14, 0, 0); 

// Mulai countdown untuk masing-masing item promo
startCountdown(targetTime1, 'countdown1', 'time1');
startCountdown(targetTime2, 'countdown2', 'time2');
startCountdown(targetTime3, 'countdown3', 'time3');
startCountdown(targetTime4, 'countdown4', 'time4');


// Horizontal Scroll Bar
const promoContainer = document.querySelector('.promo-container');
let isDown = false;
let startX;
let scrollLeft;

// Ketika mouse ditekan di area kontainer
promoContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - promoContainer.offsetLeft;  // Posisi awal mouse
    scrollLeft = promoContainer.scrollLeft;  // Posisi awal scroll
});

// Ketika mouse dilepas
promoContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

// Ketika mouse dilepas di dalam area kontainer
promoContainer.addEventListener('mouseup', () => {
    isDown = false;
});

// Ketika mouse digerakkan saat ditekan (dragging)
promoContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // Hanya berfungsi jika mouse ditekan
    e.preventDefault();  // Cegah default behavior
    const x = e.pageX - promoContainer.offsetLeft;  // Hitung pergeseran mouse
    const walk = (x - startX);  // Seberapa jauh kontainer harus bergeser (percepat 2x)
    promoContainer.scrollLeft = scrollLeft - walk;  // Set scroll position baru
});
