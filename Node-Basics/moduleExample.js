// File System

const fs = require("fs");
const http = require("http");
http.createServer((req, res) => {
    fs.writeFileSync("example.txt", "Hello");
}).listen(3000);