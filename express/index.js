// manggil express
// panggil module
const express = require('express')
const port = 3000
const app = express()


// endpoint atau alamat '/' -> localhost:port/
app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/products', function(req, res){
    res.send('respon endpot products')
})


// server listen - running
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
