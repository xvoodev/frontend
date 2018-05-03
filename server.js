'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url == '/style.css')
    {
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css);
    }
    else
    {
        const text = fs.readFileSync('index.html', 'utf8');
        response.end(text);
    }
});
console.log(process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('Server is running..');