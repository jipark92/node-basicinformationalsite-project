const http = require('http');
const fs = require('fs');
const express =require('express')
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    fs.readFile('index.html', 'utf-8', (error,data)=>{
    res.send(data)
    })
})

app.get('/about', (req,res) => {
    fs.readFile('about.html', 'utf-8', (error,data)=>{
    res.send(data)
    })
})

app.get('/contact', (req,res) => {
    fs.readFile('contact.html', 'utf-8', (error,data)=>{
    res.send(data)
    })
})

app.use((req, res)=> {
    fs.readFile('404.html', 'utf-8', (error,data)=>{
        res.send(data, 404);
    })
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//regular version
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html;charset=utf8');
//     if (req.url === '/') {
//     fs.readFile('index.html', 'utf-8', (error,data)=>{
//         res.end(data)
//     })} else if(req.url ==='/about'){
//         fs.readFile('about.html', 'utf-8', (error,data)=>{
//             res.end(data);
//         })
//     } else if(req.url === '/contact'){
//         fs.readFile('contact.html', 'utf-8', (error,data)=>{
//             res.end(data)
//         })
//     } else {
//         fs.readFile('404.html', 'utf-8', (error,data)=>{
//             res.end(data)
//         })
//     }
// });