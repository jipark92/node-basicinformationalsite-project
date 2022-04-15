const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
    res.write('Hello Nodessss')
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log('404 page',error)
    } else {
        console.log("server is listening" + port)
    }
})