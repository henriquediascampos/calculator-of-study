const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    let type = 'html';
    if (req.url.indexOf('.html') > -1) {
        type = 'html'
    } else if (req.url.indexOf('.css') > -1) {
        type = 'css'
    } else if (req.url.indexOf('.js') > -1) {
        type = 'javascript'
    }

    // fs.createReadStream(`src/${req.url || 'index.html'}`).pipe(res);
    const url = req.url && req.url !== '/' ? req.url : '/calculadora.html';
    console.log('url: ', url);
    console.log('type: ',type);

    res.writeHead(200, { 'content-type': `text/${type}` });
    fs.createReadStream(`./src${url}`).pipe(res);
});


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});