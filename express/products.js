// Products - CRUD

// getAllproducts
// getDetailProduct
// addProducts
// deleteProducts
// updateProducts

// manggil express
// panggil module
const express = require('express')
const { reset } = require('nodemon')
const port = 3000
const app = express()
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

let products = [
    {"id": 1, "name": "Kaos Hitam", "harga": 10000},
    {"id": 2, "name": "Kaos Hitam belang", "harga": 15000}
]

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

const auth = function (req, res, next) {
    console.log(req.query.login)
    console.log(typeof req.query.login)
    if(req.query.login == 'true'){
        next()
    } else {
        res.status(401).json({
            "status": "error",
            "message": "Anda tidak punya otorisasi"
        })
    }
}

app.use(myLogger)
// app.use(auth)

// getAllproducts
app.get('/products', (req, res) => {
    res.json(products)
})


// getDetailProduct
app.get('/products/:id', (req, res) => {
    console.log(req.params.id)
    let id = req.params.id
    // filter
    for(let i = 0; i < products.length; i++){
        // cek yang id nya sama dengan req
        if(products[i].id == id){
            res.send(products[i])
        } 
    }

    res.json({
            "message" : "Produk yang di cari tidak ada"
    })
})

app.post('/products', (req, res) => {
    console.log(req.body)
    // tambahin produk ke data
    
    if(!req.body.id || !req.body.nama || !req.body.harga ){
        res.status(400).json({
            "status": "error",
            "message": "Mohon Lengkapi data product"
        })
    } else {
        products.push(req.body)
        res.status(201).json({
            "status": 'success',
            "message": "berhasil menambahkan produk",
            "data" : req.body,
        })
    }

   
})







// app.get('*', (req, res, next) => {
    
  
//     res.status(404).json({
//         "status": "error",
//         "message": "Endpoint / route not found"
//     })
// })

// app.post('*', (req, res, next) => {
    
  
//     res.status(404).json({
//         "status": "error",
//         "message": "Endpoint / route not found"
//     })
// })

app.use((req, res, next ) => {
    res.json({
        "status": "error",
        "message": "Endpoint / route not found"
    })
})


// Error Handling // Dump dari Request



// server listen - running
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
