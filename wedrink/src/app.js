document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        suit: [
            { id: 1, name: 'Mi Suit', likes: '89', img: 'suit.jpeg', price: 15000 },
        ],

        gacoan04: [
            { id: 1, name: 'Mi Gacoan Lv 0', likes: '101', img: 'gacoan.jpeg', price: 15000 },
            { id: 2, name: 'Mi Gacoan Lv 1', likes: '1,9RB', img: 'gacoan.jpeg', price: 15000 },
            { id: 3, name: 'Mi Gacoan Lv 2', likes: '504', img: 'gacoan.jpeg', price: 15000 },
            { id: 4, name: 'Mi Gacoan Lv 3', likes: '257', img: 'gacoan.jpeg', price: 15000 },
            { id: 5, name: 'Mi Gacoan Lv 4', likes: '137', img: 'gacoan.jpeg', price: 15000 },
        ],

        gacoan68: [
            { id: 1, name: 'Mi Gacoan Lv 6', likes: '124', img: 'gacoan.jpeg', price: 16000 },
            { id: 2, name: 'Mi Gacoan Lv 7', likes: '57', img: 'gacoan.jpeg', price: 16000 },
            { id: 3, name: 'Mi Gacoan Lv 8', likes: '14', img: 'gacoan.jpeg', price: 16000 },
        ],

        hompimpa04: [
            { id: 1, name: 'Mi Hompimpa Lv 0', likes: '45', img: 'hompimpa.jpeg', price: 15000 },
            { id: 2, name: 'Mi Hompimpa Lv 1', likes: '559', img: 'hompimpa.jpeg', price: 15000 },
            { id: 3, name: 'Mi Hompimpa Lv 2', likes: '75', img: 'hompimpa.jpeg', price: 15000 },
            { id: 4, name: 'Mi Hompimpa Lv 3', likes: '147', img: 'hompimpa.jpeg', price: 15000 },
            { id: 5, name: 'Mi Hompimpa Lv 4', likes: '93', img: 'hompimpa.jpeg', price: 15000 },
        ],

        hompimpa68: [
            { id: 1, name: 'Mi Hompimpa Lv 6', likes: '49', img: 'hompimpa.jpeg', price: 16000 },
            { id: 2, name: 'Mi Hompimpa Lv 7', likes: '36', img: 'hompimpa.jpeg', price: 16000 },
            { id: 3, name: 'Mi Hompimpa Lv 8', likes: '20', img: 'hompimpa.jpeg', price: 16000 },
        ],

        dimsum: [
            { id: 1, name: 'Pangsit Goreng', likes: '291', img: 'pangsit-goreng.jpeg', price: 13000 },
            { id: 2, name: 'Lumpia Udang', likes: '659', img: 'lumpia-udang.jpeg', price: 13000 },
            { id: 3, name: 'Udang Keju', likes: '1,7RB', img: 'udang-keju.jpeg', price: 13000 },
            { id: 4, name: 'Udang Rambutan', likes: '871', img: 'udang-rambutan.jpeg', price: 13000 },
            { id: 5, name: 'Siomay Ayam', likes: '735', img: 'siomay-ayam.jpeg', price: 13000 },
        ],

        esBuah: [
            { id: 1, name: 'Es Petak Umpet', likes: '35', img: 'petak-umpet.jpeg', price: 13000 },
            { id: 2, name: 'Es Sluku Bathok', likes: '69', img: 'sluku-bathok.jpeg', price: 13000 },
            { id: 3, name: 'Es Teklek', likes: '64', img: 'teklek.jpeg', price: 13000 },
            { id: 4, name: 'Es Gobak Sodor', likes: '217', img: 'gobak-sodor.jpeg', price: 13000 },
        ],

        beverages: [
            { id: 1, name: 'Es Teh', likes: '195', img: 'teh.jpeg', price: 13000 },
            { id: 2, name: 'Orange', likes: '67', img: 'orange.jpeg', price: 13000 },
            { id: 3, name: 'Lemon Tea', likes: '118', img: 'lemon-tea.jpeg', price: 13000 },
            { id: 4, name: 'Teh Tarik', likes: '23', img: 'teh-tarik.jpeg', price: 13000 },
            { id: 5, name: 'Chocoan Ice', likes: '38', img: 'chocoan-ice.jpeg', price: 13000 },
            { id: 6, name: 'Vanilla Latte', likes: '26', img: 'vanilla-latte.jpeg', price: 13000 },
            { id: 7, name: 'Thai Tea', likes: '223', img: 'thai-tea-ori.jpeg', price: 13000 },
            { id: 8, name: 'Green Thai Tea', likes: '162', img: 'green-thai-tea.jpeg', price: 13000 },
        ],
    }));
});
