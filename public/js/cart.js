// Fungsi untuk memperbarui harga total
function updateTotalPrice() {
      let totalPrice = 0;

      // Ambil semua elemen produk kebaya
      const productElements = document.querySelectorAll('.sm-product');

      // Iterasi setiap elemen produk
      productElements.forEach((productElement) => {
            // Ambil elemen jumlah, harga, dan harga total produk
            const itemCount = productElement.querySelector('.item-count');
            const priceElement = productElement.querySelector('.sm-price');

            // Ambil jumlah dan harga produk
            const count = parseInt(itemCount.innerText);
            const price = parseInt(priceElement.innerText.slice(2)); // Menghapus "Rp" dan mengonversi ke angka

            // Hitung harga total produk
            const productTotalPrice = count * price;

            // Tambahkan harga total produk ke total harga keseluruhan
            totalPrice += productTotalPrice;
      });

      // Perbarui elemen harga total
      const totalElement = document.querySelector('.bill');
      totalElement.innerText = `Rp${totalPrice}.000`;
}

// Panggil fungsi updateTotalPrice() untuk menginisialisasi tampilan awal
updateTotalPrice();

// Ambil semua elemen tombol kurang, tombol tambah, dan elemen jumlah
const decrementButtons = document.querySelectorAll('.counter-btn.decrement');
const incrementButtons = document.querySelectorAll('.counter-btn.increment');

// Iterasi setiap tombol kurang
decrementButtons.forEach((decrementButton, index) => {
      // Ambil elemen jumlah yang sesuai dengan indeks tombol kurang
      const itemCount = document.querySelectorAll('.item-count')[index];

      // Atur fungsi untuk tombol kurang
      decrementButton.addEventListener('click', () => {
            // Ambil jumlah saat ini
            let count = parseInt(itemCount.innerText);

            // Kurangi jumlah jika lebih dari 1
            if (count > 1) {
                  count--;
                  itemCount.innerText = count;
                  updateTotalPrice();
            }
      });
});

// Iterasi setiap tombol tambah
incrementButtons.forEach((incrementButton, index) => {
      // Ambil elemen jumlah yang sesuai dengan indeks tombol tambah
      const itemCount = document.querySelectorAll('.item-count')[index];

      // Atur fungsi untuk tombol tambah
      incrementButton.addEventListener('click', () => {
            // Ambil jumlah saat ini
            let count = parseInt(itemCount.innerText);

            // Tambahkan jumlah
            count++;
            itemCount.innerText = count;
            updateTotalPrice();
      });
});

// Ambil semua elemen tombol hapus
const deleteButtons = document.querySelectorAll('.sm-delete-btn');

// Iterasi setiap tombol hapus
deleteButtons.forEach((deleteButton, index) => {
      // Atur fungsi untuk tombol hapus
      deleteButton.addEventListener('click', () => {
            // Ambil elemen produk yang sesuai dengan indeks tombol hapus
            const productElement = deleteButton.closest('.sm-product');

            // Hapus elemen produk dari keranjang
            productElement.remove();

            // Perbarui total harga
            updateTotalPrice();
      });
});
