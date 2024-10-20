const promoContainer = document.querySelector('.promo-container');
let isDown = false;
let startX;
let scrollLeft;
let isAtEdge = false;
let movementBeyondEdge = 0;
let lastMoveX = 0;
let velocity = 0;
let requestId;

// Fungsi untuk mengecek ukuran kontainer saat jendela diresize
function updateContainerSize() {
    const containerWidth = promoContainer.offsetWidth;
    const contentWidth = promoContainer.scrollWidth;

    // Jika konten lebih lebar dari kontainer, memungkinkan scrolling
    if (contentWidth > containerWidth) {
        promoContainer.style.overflowX = 'scroll'; // Izinkan scroll
    } else {
        promoContainer.style.overflowX = 'hidden'; // Sembunyikan scroll
    }
}

// Panggil fungsi di awal untuk memeriksa ukuran
updateContainerSize();

// Ketika ukuran jendela diubah, periksa lagi
window.addEventListener('resize', updateContainerSize);

// Fungsi umum untuk memulai drag
function startDragging(e) {
    isDown = true;
    startX = (e.pageX || e.touches[0].pageX) - promoContainer.offsetLeft;
    scrollLeft = promoContainer.scrollLeft;
    promoContainer.classList.add('active');
    isAtEdge = false;
    movementBeyondEdge = 0;
    lastMoveX = e.pageX || e.touches[0].pageX;
    velocity = 0;
    cancelAnimationFrame(requestId);
}

// Fungsi umum untuk proses dragging
function dragging(e) {
    if (!isDown) return;
    e.preventDefault();

    const x = (e.pageX || e.touches[0].pageX) - promoContainer.offsetLeft;
    const walk = (x - startX);
    const maxScrollLeft = promoContainer.scrollWidth - promoContainer.clientWidth;

    velocity = (e.pageX || e.touches[0].pageX) - lastMoveX;
    lastMoveX = e.pageX || e.touches[0].pageX;

    // Deteksi jika berada di batas kiri
    if (promoContainer.scrollLeft <= 0 && walk > 0) {
        isAtEdge = true;
        movementBeyondEdge = walk * 0.2;
        promoContainer.style.transform = `translateX(${movementBeyondEdge}px)`;
    }
    // Deteksi jika berada di batas kanan (pastikan toleransi kecil untuk inertia)
    else if (promoContainer.scrollLeft >= maxScrollLeft && walk < 0) {
        isAtEdge = true;
        movementBeyondEdge = walk * 0.2;
        promoContainer.style.transform = `translateX(${movementBeyondEdge}px)`;
    }
    // Normal scrolling jika di antara batas
    else {
        promoContainer.scrollLeft = scrollLeft - walk;
        promoContainer.style.transform = 'translateX(0px)';
        isAtEdge = false;
    }
}

// Fungsi untuk inertia
function inertia() {
    if (Math.abs(velocity) > 0.5) {
        promoContainer.scrollLeft -= velocity;
        velocity *= 0.95;

        // Cegah overshooting melebihi batas kanan atau kiri
        const maxScrollLeft = promoContainer.scrollWidth - promoContainer.clientWidth;
        if (promoContainer.scrollLeft <= 0 || promoContainer.scrollLeft >= maxScrollLeft) {
            velocity = 0;  // Berhenti di ujung konten
        }

        requestId = requestAnimationFrame(inertia);
    }
}

// Fungsi untuk berhenti dragging
function stopDragging() {
    if (isAtEdge) {
        promoContainer.style.transition = 'transform 0.3s ease';
        promoContainer.style.transform = 'translateX(0px)';
    } else {
        requestId = requestAnimationFrame(inertia);
    }
    isDown = false;
    setTimeout(() => {
        promoContainer.style.transition = '';
    }, 300);
}

// Mouse events
promoContainer.addEventListener('mousedown', startDragging);
promoContainer.addEventListener('mousemove', dragging);
promoContainer.addEventListener('mouseleave', stopDragging);
promoContainer.addEventListener('mouseup', stopDragging);

// Touch events (for mobile)
promoContainer.addEventListener('touchstart', startDragging);
promoContainer.addEventListener('touchmove', dragging);
promoContainer.addEventListener('touchend', stopDragging);
