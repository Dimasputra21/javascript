// var message = "Hello Coding";
// let msg1 = "KudaTerbang";
// const msg2 = "sapibetina";
// Fungsi var, let, dan const sama yakni untuk mendefinisikan suatu bentuk untuk mempersingkat

// console.log(message)
// console.log(msg1)
// console.log(msg2)


var papa = "hello papa";
let papa1 = "hello mama";
// Untuk var dan let nilai bisa dirubah ditengah-tengah dengan cara merubah nilai variabel yang dideskripsi menjadi
// nilai variabel yg lain seperti contoh 'papa1 = "hello...."' tetapi perubahan variabel tidak bisa ditumpuk

// Namun untuk perbedaan var dan let adalah jika dituliskan "var" atau "let" lagi pada penulisan selanjutnya, maka untuk
// var akan mengganti nilai terbaru, sedangkan untuk let nilai pengganti tidak terbaca tetapi tidak error(kecuali masih
// dalam satu wilayah maka nilai let terbaru bisa dibaca),
// contohnya adalah pada contoh fungsi if dibawah

const papa2 = "hello kakak";
// Sedangkan untuk const tidak bisa dirubah, jika berusaha mengubah const maka akan terjadi error
// papa1 = "hello motherfather"

if (true) {
    var papa = 1;
    let papa1 = 2;
    console.log("token", papa1)
}

console.log(papa1)
console.log(papa)