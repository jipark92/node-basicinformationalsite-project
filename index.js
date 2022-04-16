const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    if (req.url === '/') {
    fs.readFile('index.html', 'utf-8', (error,data)=>{
        res.end(data)
    })} else if(req.url ==='/about'){
        fs.readFile('about.html', 'utf-8', (error,data)=>{
            res.end(data);
        })
    } else if(req.url === '/contact'){
        fs.readFile('contact.html', 'utf-8', (error,data)=>{
            res.end(data)
        })
    } else {
        fs.readFile('404.html', 'utf-8', (error,data)=>{
            res.end(data)
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});