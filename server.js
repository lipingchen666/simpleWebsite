const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/tasks') {
        filePath = path.join(__dirname, 'index.html');
    }

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/overview') {
        filePath = path.join(__dirname, 'overview.html');
    }

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/documents') {
        filePath = path.join(__dirname, 'documents.html');
    }

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/tasks/27iCDMN9tWARhPPMf') {
        filePath = path.join(__dirname, 'tasksSpecific.html');
    }

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/tasks/FEwEygDD7NDJD59x5') {
        filePath = path.join(__dirname, 'personalInfo.html');
    }

    if (req.url === '/orders/RLnFFgXcgk3mY6Le3/tasks/H9C5MgYWefYjyJ8dD') {
        filePath = path.join(__dirname, 'selectVesting.html');
    }

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
