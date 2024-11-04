document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        fruitTea: [
            { id: 1, name: 'Six Grapes Fruit Tea', likes: '116', img: 'six-grapes.jpeg', price: 22000 },
            { id: 2, name: 'Squeezed Lemonade', likes: '264', img: 'squeezed-lemonade.jpeg', price: 13000 },
            { id: 3, name: 'Passion Fruit Pearl Tea', likes: '56', img: 'passion-fruit.jpeg', price: 24000 },
            { id: 4, name: 'Blueberry Seed Tea', likes: '32', img: 'blueberry-seed.jpeg', price: 20000 },
            { id: 5, name: 'Manggo Smoothies', likes: '88', img: 'mango-smoothies.jpeg', price: 26000 },
            { id: 6, name: 'Grape Lemon Tea', likes: '217', img: 'grape-lemon-tea.jpeg', price: 13000 },
        ],

        sundae: [
            { id: 7, name: 'Super Jelly Sundae', likes: '195', img: 'jelly-sundae.jpeg', price: 17500 },
            { id: 8, name: 'Strawberry Sundae', likes: '319', img: 'strawberry-sundae.jpeg', price: 17500 },
            { id: 10, name: 'Blueberry Sundae', likes: '140', img: 'blueberry-sundae.jpeg', price: 17500 },
            { id: 11, name: 'Chocolate Sundae', likes: '27', img: 'chocolate-oreo-sundae.jpeg', price: 17500 },
            { id: 12, name: 'Matcha Sundae', likes: '64', img: 'matcha-sundae.jpeg', price: 17500 },
            { id: 13, name: 'Brown Pearl Sundae', likes: '292', img: 'brown-sugar-sundae.jpeg', price: 17500 },
            { id: 14, name: 'Peach Sundae', likes: '58', img: 'sundae.jpeg', price: 17500 },
        ],
        
        milkShake: [
            { id: 15, name: 'Boba Milkshake', likes: '24', img: 'milkshake.jpeg', price: 17500 },
            { id: 16, name: 'Strawberry Milkshake', likes: '52', img: 'milkshake.jpeg', price: 17500 },
            { id: 17, name: 'Raspberry Milkshake', likes: '71', img: 'milkshake.jpeg', price: 17500 },
            { id: 18, name: 'Red Matcha Milkshake', likes: '43', img: 'milkshake.jpeg', price: 17500 },
            { id: 19, name: 'Moca Milkshake', likes: '82', img: 'milkshake.jpeg', price: 17500 },
        ],

        coffee: [
            { id: 20, name: 'Coffee Latte', likes: '68', img: 'coffe-latte.jpeg', price: 14300 },
            { id: 21, name: 'Iced Americano Coffee', likes: '63', img: 'iced-americano.jpeg', price: 14300 },
            { id: 22, name: 'Cappucino', likes: '39', img: 'coffe-latte.jpeg', price: 14300 },
        ],
        
        milkTea: [
            { id: 23, name: 'Original Milk Tea', likes: '735', img: 'milktea.jpeg', price: 13000 },
            { id: 24, name: 'Coconut Jelly Milktea', likes: '35', img: 'milktea.jpeg', price: 13000 },
            { id: 25, name: 'Coconut Jelly Large', likes: '69', img: 'milktea.jpeg', price: 10000 },
            { id: 26, name: 'Brown Sugar Medium', likes: '64', img: 'milktea.jpeg', price: 10000 },
            { id: 27, name: 'Brown Sugar Large', likes: '217', img: 'milktea.jpeg', price: 13000 },
            { id: 28, name: 'Milktea 2 Topping M', likes: '195', img: 'milktea.jpeg', price: 7000 },
            { id: 29, name: 'Milktea 2 Topping L', likes: '67', img: 'milktea.jpeg', price: 9000 },
            { id: 30, name: 'Milktea 3 Topping', likes: '118', img: 'milktea.jpeg', price: 11000 },
            { id: 31, name: 'Jelly Milktea', likes: '23', img: 'milktea.jpeg', price: 11000 },
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
