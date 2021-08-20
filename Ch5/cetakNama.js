// program ini akan mencetak nama "Ricky"

console.log('Ricky Ariansyah Achmad')

// index.js
// Ini akan mengimport module bernama `fs`
// var fs = require('fs');


// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const fungsiPajak = require('./hitungPajak')

console.log(fungsiPajak(100000))





// buat sebuah local module 
// untuk menghitung total nilai dalam sebuah array

// [1, 2, 3, 4, 5] hasil totalnya adalah 15

// function ini dibuat local module
function totalnilaiarray(array)){
    // logika hitung total array
}

console.log(totalarray([1, 2, 3, 4, 5])) // -> hasilnya 15