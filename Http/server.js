// ini apa ? 
// kita panggil module yang sudah ada di node js
// module itu apa ?
// kumpulan javascript function 
// bantuan module / lib
const http  = require('http')
const port = 3000

// init - inisiasi - persiapan si server
const server = http.createServer(function(req, resp){
    resp.end('ini adalah sebuah response')
})

// listen server - jalanin server
server.listen(port)
console.log('Server runnin on port ' + port)

