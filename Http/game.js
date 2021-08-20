// ini apa ? 
// kita panggil module yang sudah ada di node js
// module itu apa ?
// kumpulan javascript function 
// bantuan module / lib
const http  = require('http')
const fs = require('fs')
const ejs = require('ejs');
const port = 3000
var templateString = fs.readFileSync('./404.ejs', 'utf-8');


// init - inisiasi - persiapan si server
const server = http.createServer(function(req, resp){
         console.log(ejs)
        resp.writeHead(200, {"Content-Type": "text/html"})
        fs.readFile("./gam.html", null, (error, data) => {
            console.log(data)
            if(error){
                console.log(templateString)
                resp.write(templateString)
            } else {
                resp.write(data)
            }
            resp.end()
        })     
})

// listen server - jalanin server
server.listen(port)
console.log('Server runnin on port ' + port)

