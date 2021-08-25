var express = require('express');
var router = express.Router();


// data
// andai andai dari database
let restaurants = [
   {id: 1, nama_resto: "Kopi Janji Jiwa - Abdul Halim mmmmmmm", harga_ongkir: 7000, jarak: 1.5, rating: 4.9, voucher: ["voucher1", "voucher2"]},
   {id: 2, nama_resto: "Dapoer Kebab - Majalengka Kulon", harga_ongkir: 5000, jarak: 1.5, rating: 4.7, voucher: ["voucher1", "voucher2"]}
]

let restaurantss = []

/* GET users listing. */
router.get('/restoterdekat', function(req, res, next) {
  // res.send('respond with a resource');
  // res.json(restaurants)
  // res.json({
  //   'status': 200,
  //   'message': 'Berhasil Ambil data restoran terdekat',
  //   'data' : restaurants
  // })

  // res.status(500).json({
  //     'status': 500,
  //     'message': 'Berhasil Ambil data restoran terdekat',
  //     'data' : restaurants
  //   })

  // jika restaurant terdekat ada balikkan list restaurant

  // jika tidak ada balikkan pesan error, code 404

  if(restaurants.length == 0) {
    res.status(404).json({
      'status': 404,
      'message' : 'Tidak ada restoran ditemukan',
      'data' : restaurants
    })
  } else {
     res.status(200).json({
      'status': 200,
      'message': 'Berhasil Ambil data restoran terdekat',
      'data' : restaurants
    })
  }
});


let databestseller = [
  {
    id: 1, 
    nama_menu: "lari manis 1",  
    isi_menu: "2 Milo macchiato - 2 hazelnut mocha", 
    harga_awal: 90000, 
    harga_diskon: 72000
  },
  {
    id: 2, 
    nama_menu: "lari manis 2",  
    isi_menu: "3 Milo macchiato - 5 hazelnut mocha", 
    harga_awal: 200000, 
    harga_diskon: 120000
  },
  {
    id: 3,
    nama_menu: "lari manis 2",  
    isi_menu: "3 Milo macchiato - 5 hazelnut mocha", 
    harga_awal: 200000, 
    harga_diskon: 120000
  }
]

router.get('/menubestseller', function(req, res, next) {
    res.json(databestseller)
})

router.put('/hargabestseller/:id', function(req, res, next) {
    
    let angka = 10
    console.log(typeof req.params.id)
    console.log(typeof angka)
    data = []
    index = null
    // kita harus cari tau dulu produk mana diupdate

    for(let i = 0; i < databestseller.length; i++) {
        if(databestseller[i].id === parseInt(req.params.id)) {
          data = databestseller[i]
          index = i
        }
    }

   if(data.length == 0) {
    res.json({
      'status' : 404,
      'message' : "Produk Tidak Ditemukan"
    })

    // databestseller.push(req.body)
   }


   // // ketika sudah tau produk di update, rubah datanya
   console.log(req.body)
   console.log(req.params)
   console.log(req.query)


   databestseller[index] = {
     id: parseInt(req.params.id),
     nama_menu: req.body.nama_menu, 
     isi_menu: req.body.isi_menu,
     harga_awal: req.body.harga_awal,
     harga_diskon: req.body.harga_diskon
   }


   res.json({
    'status' : 200,
    'message' : "Produk Berhasil Dirubah",
    'data': databestseller[index]
  })


   

    // url
    // bawa data, mana yang dirubah
    // bawa data id

    // bawa data, 
    // body
    // nama_menu // pecel lele
    // isi_menu / [lele, nasi]
    // harga_awal 100000
    // harga_diskon 5000



})

module.exports = router;
