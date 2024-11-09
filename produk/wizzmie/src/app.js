document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        manja: [
            { id: 1, name: 'Mie Manja', likes: '315', img: 'mieManja.jpeg', price: 14000 },
        ],

        goyangCabe: [
            { id: 2, name: 'Mie Goyang Cabe 1', likes: '117', img: 'mieGoyang.jpeg', price: 15000 },
            { id: 3, name: 'Mie Goyang Cabe 2', likes: '153', img: 'mieGoyang.jpeg', price: 15000 },
            { id: 4, name: 'Mie Goyang Cabe 3', likes: '504', img: 'mieGoyang.jpeg', price: 15000 },
            { id: 5, name: 'Mie Goyang Cabe 4', likes: '257', img: 'mieGoyang.jpeg', price: 15000 },
        ],
        
        goyangLevel: [
            { id: 6, name: 'Mie Goyang Cabe 5', level:'(Level 1)', likes: '441', img: 'mieGoyang.jpeg', price: 16000 },
            { id: 7, name: 'Mie Goyang Cabe 10', level:'(Level 2)', likes: '274', img: 'mieGoyang.jpeg', price: 16000 },
            { id: 8, name: 'Mie Goyang Cabe 15', level:'(Level 3)', likes: '131', img: 'mieGoyang.jpeg', price: 16500 },
            { id: 9, name: 'Mie Goyang Cabe 20', level:'(Level 4)', likes: '166', img: 'mieGoyang.jpeg', price: 16500 },
            { id: 10, name: 'Mie Goyang Cabe 25', level:'(Level 5)', likes: '98', img: 'mieGoyang.jpeg', price: 17000 },
            { id: 11, name: 'Mie Goyang Cabe 30', level:'(Level 6)', likes: '51', img: 'mieGoyang.jpeg', price: 17000 },
        ],

        diskoCabe: [
            { id: 12, name: 'Mie Disko Cabe 1', likes: '432', img: 'mieDisko.jpeg', price: 14500 },
            { id: 13, name: 'Mie Disko Cabe 2', likes: '532', img: 'mieDisko.jpeg', price: 14500 },
            { id: 14, name: 'Mie Disko Cabe 3', likes: '142', img: 'mieDisko.jpeg', price: 14500 },
            { id: 15, name: 'Mie Disko Cabe 4', likes: '73', img: 'mieDisko.jpeg', price: 14500 },
            { id: 16, name: 'Mie Disko Cabe 5', likes: '515', img: 'mieDisko.jpeg', price: 15000 },
            { id: 17, name: 'Mie Disko Cabe 6', likes: '84', img: 'mieDisko.jpeg', price: 15000 },
            { id: 18, name: 'Mie Disko Cabe 7', likes: '238', img: 'mieDisko.jpeg', price: 15000 },
            { id: 19, name: 'Mie Disko Cabe 8', likes: '159', img: 'mieDisko.jpeg', price: 15000 },
            { id: 20, name: 'Mie Disko Cabe 9', likes: '63', img: 'mieDisko.jpeg', price: 15000 },
        ],
        
        diskoLevel: [
            { id: 21, name: 'Mie Disko Cabe 10', level:'(Level 1)', likes: '398', img: 'mieDisko.jpeg', price: 15000 },
            { id: 22, name: 'Mie Disko Cabe 20', level:'(Level 2)', likes: '351', img: 'mieDisko.jpeg', price: 16500 },
            { id: 23, name: 'Mie Disko Cabe 30', level:'(Level 3)', likes: '277', img: 'mieDisko.jpeg', price: 16500 },
            { id: 24, name: 'Mie Disko Cabe 40', level:'(Level 4)', likes: '241', img: 'mieDisko.jpeg', price: 17500 },
            { id: 25, name: 'Mie Disko Cabe 50', level:'(Level 5)', likes: '190', img: 'mieDisko.jpeg', price: 17500 },
        ],

        dimsum: [
            { id: 26, name: 'Pao Ayam Steam', likes: '64', img: 'paoSteam.jpeg', price: 14000 },
            { id: 27, name: 'Pao Ayam Gorang', likes: '217', img: 'paoGoreng.jpeg', price: 14000 },
            { id: 28, name: 'Ceker', likes: '67', img: 'ceker.jpeg', price: 14000 },
            { id: 29, name: 'Siomay', likes: '118', img: 'siomay.jpeg', price: 15000 },
            { id: 30, name: 'Lumpia Ayam', likes: '195', img: 'lumpiaAyam.jpeg', price: 14000 },
            { id: 31, name: 'Lumpia Udang', likes: '223', img: 'lumpiaUdang.jpeg', price: 15000 },
            { id: 32, name: 'Sushi', likes: '38', img: 'sushi.jpeg', price: 15000 },
            { id: 33, name: 'Bola Udang Steam', likes: '267', img: 'bolaUdang.jpeg', price: 15500 },
            { id: 34, name: 'Bola Udang Keju', likes: '223', img: 'bolaUdangKeju.jpeg', price: 15500 },
            { id: 35, name: 'Udang Keju', likes: '362', img: 'udangKeju.jpeg', price: 15500 },
            { id: 36, name: 'Udang Rambutan', likes: '162', img: 'udangRambutan.jpeg', price: 15500 },
        ],

        sushi: [
            { id: 37, name: 'Classic Roll', likes: '253', img: 'classicRoll.jpeg', price: 18000 },
            { id: 38, name: 'Retro Roll', likes: '315', img: 'retroRoll.jpeg', price: 18000 },
            { id: 39, name: 'Hip N Roll', likes: '431', img: 'hipNroll.jpeg', price: 18000 },
            { id: 40, name: 'Electric Roll', likes: '239', img: 'electricRoll.jpeg', price: 18000 },
            { id: 41, name: 'Rock N Roll', likes: '422', img: 'rockNroll.jpeg', price: 18000 },
            { id: 42, name: 'Chicken Katsu', likes: '148', img: 'chickenKatsu.jpeg', price: 19000 },
            { id: 43, name: 'Chicken Karage', likes: '255', img: 'chickenKarage.jpeg', price: 19000 },
            { id: 44, name: 'Spicy Chicken Wings', likes: '392', img: 'spicyChickenWings.jpeg', price: 19000 },
            { id: 45, name: 'Ebi Furai', likes: '165', img: 'ebiFurai.jpeg', price: 19000 },
        ],

        iceBar: [
            { id: 46, name: 'Ice Tea', likes: '63', img: 'iceTea.jpeg', price: 9500 },
            { id: 47, name: 'Ice Tea Jumbo', likes: '159', img: 'iceTea.jpeg', price: 13000 },
            { id: 48, name: 'Lychee Tea', likes: '63', img: 'lycheeTea.jpeg', price: 14000 },
            { id: 49, name: 'Lychee Splash', likes: '73', img: 'lycheeSplash.jpeg', price: 14000 },
            { id: 50, name: 'Lychee Splash Jumbo', likes: '515', img: 'lycheeSplash.jpeg', price: 16000 },
            { id: 51, name: 'Orange Splash', likes: '84', img: 'orangeSplash.jpeg', price: 12500 },
            { id: 52, name: 'Orange Splash Jumbo', likes: '238', img: 'orangeSplash.jpeg', price: 15000 },
            { id: 53, name: 'Ice DJ', likes: '432', img: 'iceDJ.jpeg', price: 16500 },
            { id: 54, name: 'Ice Reggae', likes: '532', img: 'iceReggae.jpeg', price: 15000 },
            { id: 55, name: 'Ice Funky', likes: '142', img: 'iceFunky.jpeg', price: 14000 },
            { id: 56, name: 'Rosen Rose', likes: '159', img: 'rosenRose.jpeg', price: 12500 },
        ],

        frappeIce: [
            { id: 57, name: 'Milk Tea', likes: '432', img: 'milkTea.jpeg', price: 13500 },
            { id: 58, name: 'Ice Kopi Susu', likes: '532', img: 'iceKopiSusu.jpeg', price: 16500 },
            { id: 59, name: 'Ice Chocolate', likes: '142', img: 'iceChocolate.jpeg', price: 16500 },
            { id: 60, name: 'Matcha Latte Ice', likes: '73', img: 'matchaLatte.jpeg', price: 17000 },
            { id: 61, name: 'Greentea Frappe', likes: '515', img: 'greenteaFrappe.jpeg', price: 17000 },
            { id: 62, name: 'Redvelvet Frappe', likes: '84', img: 'redvelvetFrappe.jpeg', price: 17000 },
            { id: 63, name: 'Taro Frappe', likes: '238', img: 'taroFrappe.jpeg', price: 17000 },
        ],

        riceBowl: [
            { id: 64, name: 'Rice Bowl smbl Matah', likes: '391', img: 'ricebowlSambalMatah.jpeg', price: 19000 },
            { id: 65, name: 'Rice Bowl Blackpepper', likes: '134', img: 'ricebowlBlackpepper.jpeg', price: 19000 },
            { id: 66, name: 'Rice Bowl Sweet N Sour', likes: '364', img: 'ricebowlSambalMatah.jpeg', price: 19000 },
            { id: 67, name: 'Rice Bowl Teriyaki', likes: '288', img: 'ricebowlBlackpepper.jpeg', price: 19000 },
        ]
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
    
    // Kirim ke wa
    window.open('http://wa.me/6281224238689?text=' + encodeURIComponent(message));

    // Reset isi form
    form.reset();
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add('disabled');

    // Kosongkan isi cart di Alpine store
    Alpine.store('cart').items = [];
    Alpine.store('cart').quantity = 0;
    Alpine.store('cart').total = 0;
});

// Format pesan WhatsApp
const formatMessage = (obj) => {
    return `*Data Customer:*
Nama :  ${obj.name}
Alamat :  ${obj.address}
Email :  ${obj.email}
No. HP :  ${obj.phone}

*Data Pesanan:*
${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.price)}) = *${rupiah(item.total)}* \n`).join('')}
*TOTAL :  ${rupiah(obj.total)}*
Terima kasih.`;
};
