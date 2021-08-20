// ini apa ? 
// kita panggil module yang sudah ada di node js
// module itu apa ?
// kumpulan javascript function 
// bantuan module / lib
const http  = require('http')
const fs = require('fs')
const ejs = require('ejs');
const port = 3001
const user = [
    {
        "username": "ricky",
        "email": "ricky@ricky.com"
    }, 
    {
        "username": "ricky1",
        "email": "ricky1@ricky.com"
    },
    {
        "username": "ricky2",
        "email": "ricky2@ricky.com"
    }
]


const products = [
    {
        "name": "kaos",
        "harga": 40000
    }, 
    {
        "name": "kaos",
        "harga": 40000
    }, 
    {
        "name": "kaos",
        "harga": 40000
    }, 
]


// init - inisiasi - persiapan si server
const server = http.createServer(function(req, resp){
        // resp.writeHead(200, {"Content-Type": "application/json"})
        // resp.end(JSON.stringify(user))
        console.log(req)

       
        if(req.url === '/products') {
             // routing product
            resp.writeHead(200, {"Content-Type": "application/json"})
            // resp.end(JSON.stringify(products))
        } else if(req.url === '/users'){
            // routing ke user
             resp.writeHead(200, {"Content-Type": "application/json"})
            // resp.end(JSON.stringify(user))
        }

       

})

// listen server - jalanin server
server.listen(port)
console.log('Server runnin on port ' + port)

