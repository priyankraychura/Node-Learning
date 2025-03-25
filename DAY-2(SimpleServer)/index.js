const { log } = require('console');
const http = require('http');
const port = 1008;

const portHandler = (req, res) => {
    res.write("<h1>Hello NodeJS</h1>");
    res.end();
}

const server = http.createServer(portHandler);

server.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server is running on: http://localhost:${port}`);
    }
})