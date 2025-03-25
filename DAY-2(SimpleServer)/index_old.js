const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(4000, "localhost", () => {
    console.log("Server is running on http://localhost:4000");
    
})