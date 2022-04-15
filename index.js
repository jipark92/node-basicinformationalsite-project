const http = require('http')
const fs = require('fs') 
const url = require('url')

const port = 3000

const homeUrl = 'http://localhost:3000/'
const aboutUrl = 'http://localhost:3000/about.html'

console.log(aboutUrl)

const server = http.createServer((req,res)=>{

    if(req.url.pathname === '/about'){
        fs.readFile('/home/norfkorean/node-basicinformationalsite-project/about.html', 'utf8' , (err,data)=>{
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } 
    // else if(aboutUrl){
    //     fs.readFile('/home/norfkorean/node-basicinformationalsite-project/about.html', 'utf8' , (err,data)=>{
    //         res.statusCode = 200
    //         res.setHeader('Content-Type', 'text/html')
    //         res.end(data)
    //     })
    // }
    
})

server.listen(port, () =>{
    console.log(`server running at ${port}!!`)
})