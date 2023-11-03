// Nama: Fandy Fathurrohman
// Absen: 6
// Kelas: X RPL 1

// Cara memunculkan Text Input Atau Output Pada JS/Javascript, Kalo di C++ Using Namespace Std;, tapi Versi JS/Javscript pakai readline
const readline = require('readline');

const rl = readline.createInterface({
    // Process diketik huruf kecil "process" Agar tidak Error saat dijalankan
    input: process.stdin,
    output: process.stdout
});
console.log("Kalkulator Perkalian Sederhana by FandyFr");
console.log(""); // Kosong Biar Ada Jarak
rl.question("Masukan Angka Pertama: ", function(angka1) {
    // Agar masuk ke Pertanyaan Kedua Seperti If di kasih Curly Bracket {}

    rl.question("Masukan Angka Kedua: ", function(angka2) {
        angka1 = parseFloat(angka1);
        angka2 = parseFloat(angka2);

        // Jika Anda Memasukan Angka Yg Valid/Benar
        if(!isNaN(angka1) && !isNaN(angka2)) {
            // Jika Input Angka dan tidak adalah Char atau Symbol
            var hasil = angka1 * angka2;
            console.log("Hasil Perkalian: " + hasil);
        } else {
            // Jika Input Memakai Char Atau Symbol
            console.log("Harap masukan angka yang Benar/Valid, Dilarang Pakai Char atau Symbol !!!");
        }
        // Kalo di C++ pakai Return 0; atau getch(); , Kalo disini untuk menutup pertanyaan tadi dia mempakai rl.close();
        rl.close();
    })
})