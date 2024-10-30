document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        suit: [
            { id: 1, name: 'Mi Suit', likes: '89', img: 'suit.jpeg', price: 15000 },
        ],

        gacoan04: [
            { id: 2, name: 'Mi Gacoan Lv 0', likes: '101', img: 'gacoan.jpeg', price: 15000 },
            { id: 3, name: 'Mi Gacoan Lv 1', likes: '1,9RB', img: 'gacoan.jpeg', price: 15000 },
            { id: 4, name: 'Mi Gacoan Lv 2', likes: '504', img: 'gacoan.jpeg', price: 15000 },
            { id: 5, name: 'Mi Gacoan Lv 3', likes: '257', img: 'gacoan.jpeg', price: 15000 },
            { id: 6, name: 'Mi Gacoan Lv 4', likes: '137', img: 'gacoan.jpeg', price: 15000 },
        ],

        gacoan68: [
            { id: 7, name: 'Mi Gacoan Lv 6', likes: '124', img: 'gacoan.jpeg', price: 16000 },
            { id: 8, name: 'Mi Gacoan Lv 7', likes: '57', img: 'gacoan.jpeg', price: 16000 },
            { id: 10, name: 'Mi Gacoan Lv 8', likes: '14', img: 'gacoan.jpeg', price: 16000 },
        ],

        hompimpa04: [
            { id: 11, name: 'Mi Hompimpa Lv 0', likes: '45', img: 'hompimpa.jpeg', price: 15000 },
            { id: 12, name: 'Mi Hompimpa Lv 1', likes: '559', img: 'hompimpa.jpeg', price: 15000 },
            { id: 13, name: 'Mi Hompimpa Lv 2', likes: '75', img: 'hompimpa.jpeg', price: 15000 },
            { id: 14, name: 'Mi Hompimpa Lv 3', likes: '147', img: 'hompimpa.jpeg', price: 15000 },
            { id: 15, name: 'Mi Hompimpa Lv 4', likes: '93', img: 'hompimpa.jpeg', price: 15000 },
        ],

        hompimpa68: [
            { id: 16, name: 'Mi Hompimpa Lv 6', likes: '49', img: 'hompimpa.jpeg', price: 16000 },
            { id: 17, name: 'Mi Hompimpa Lv 7', likes: '36', img: 'hompimpa.jpeg', price: 16000 },
            { id: 18, name: 'Mi Hompimpa Lv 8', likes: '20', img: 'hompimpa.jpeg', price: 16000 },
        ],

        dimsum: [
            { id: 19, name: 'Pangsit Goreng', likes: '291', img: 'pangsit-goreng.jpeg', price: 14000 },
            { id: 20, name: 'Lumpia Udang', likes: '659', img: 'lumpia-udang.jpeg', price: 13000 },
            { id: 21, name: 'Udang Keju', likes: '1,7RB', img: 'udang-keju.jpeg', price: 13000 },
            { id: 22, name: 'Udang Rambutan', likes: '871', img: 'udang-rambutan.jpeg', price: 13000 },
            { id: 23, name: 'Siomay Ayam', likes: '735', img: 'siomay-ayam.jpeg', price: 13000 },
        ],

        esBuah: [
            { id: 24, name: 'Es Petak Umpet', likes: '35', img: 'petak-umpet.jpeg', price: 13000 },
            { id: 25, name: 'Es Sluku Bathok', likes: '69', img: 'sluku-bathok.jpeg', price: 10000 },
            { id: 26, name: 'Es Teklek', likes: '64', img: 'teklek.jpeg', price: 10000 },
            { id: 27, name: 'Es Gobak Sodor', likes: '217', img: 'gobak-sodor.jpeg', price: 13000 },
        ],

        beverages: [
            { id: 28, name: 'Es Teh', likes: '195', img: 'teh.jpeg', price: 7000 },
            { id: 29, name: 'Orange', likes: '67', img: 'orange.jpeg', price: 9000 },
            { id: 30, name: 'Lemon Tea', likes: '118', img: 'lemon-tea.jpeg', price: 11000 },
            { id: 31, name: 'Teh Tarik', likes: '23', img: 'teh-tarik.jpeg', price: 11000 },
            { id: 32, name: 'Chocoan Ice', likes: '38', img: 'chocoan-ice.jpeg', price: 12000 },
            { id: 33, name: 'Vanilla Latte', likes: '26', img: 'vanilla-latte.jpeg', price: 12000 },
            { id: 34, name: 'Thai Tea', likes: '223', img: 'thai-tea-ori.jpeg', price: 12000 },
            { id: 35, name: 'Green Thai Tea', likes: '162', img: 'green-thai-tea.jpeg', price: 12000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // Cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika belum ada / cart nya masih kosong
            if(!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price }); // array di pecah dulu, lalu tambahkan quantitiy ITEM YG SAMA dan harga
                this.quantity++;
                this.total += newItem.price;
            } else {
                // Jika barang sudah ada di cart, cek apakah barang beda atau sama di cart
                this.items = this.items.map((item) => {
                    // Jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item; // Maka akan menjadi barang baru di cart
                    } else {
                        // Jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },

        remove(id) {
            // Ambil item yang mau di remove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);

            // Jika item lebih dari 1
            if(cartItem.quantity > 1) {
                // Telusuri 1 1
                this.item = this.items.map((item) => {
                    // Jika bukan barang yang di klik = Skip
                    if (item.id !== id) {
                        return item; 
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                // Jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});


// Konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}

// Jika data masih kosong, belum bisa checkout
const checkoutBtn = document.querySelector('.checkoutBtn');
checkoutBtn.disabled = true;

const form = document.querySelector('#checkoutForm');
form.addEventListener('keyup', function() {
    for (let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0) {
            checkoutBtn.classList.remove('disabled');
            checkoutBtn.classList.add('disabled');
        } else {
            return false;
        }
    }
    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove('disabled');
});

// Kirim data ketika tombol checkout di klik
checkoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    
    window.open('http://wa.me/6281916393062?text=' + encodeURIComponent(message));
    form.reset();
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add('disabled');
});

// Format pesan WhatsApp
const formatMessage = (obj) => {
    return `*Data Customer:*
Nama :  ${obj.name}
Email :  ${obj.email}
No. HP :  ${obj.phone}

*Data Pesanan:*
${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.price)}) = *${rupiah(item.total)}* \n`).join('')}
*TOTAL :  ${rupiah(obj.total)}*
Terima kasih.`;
};
