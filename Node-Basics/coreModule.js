// Core Modules - fs, os, path, query string, buffer, stream, zlib

// OS Module
// const os = require("os");
// console.log(os.cpus());
// console.log(os.totalmem() - os.freemem());


// Path Module
// const path = require("path");
// const result = path.basename("/Sem 7/Node/coreModule.js");
// const result = path.dirname("/Sem 7/Node/coreModule.js");
// const result = path.extname("/Sem 7/Node/coreModule.js");
// const result = path.format({
//     root: '/',
//     dir: '/Sem 7/Node',
//     base: 'coreModule.js',
//     ext: '.js',
//     name: 'coreModule'
// });
// const result = path.isAbsolute("/Sem 7/Node/coreModule.js");
// const result = path.join("/Sem 7/Node/coreModule.js");
// const result = path.parse("/Sem 7/Node/coreModule.js");
// const result = path.normalize("/./../node//demo.php");
// console.log(result);


// Query String
// const queryString = require("querystring");
// const result = queryString.parse("name=Mayank&age=22");
// const result = queryString.stringify({ name: 'Mayank', age: '22' });
// console.log(result);


// Stream - Readable stream and writable stream
// Duplex - Read and write both
// Transform
// Events associated - 

const fs = require("fs");
const body = [];
const rs = fs.createReadStream("text.txt");
rs.setEncoding("utf-8");
rs.on('data', (chunks) => {
    body.push(chunks);
});
rs.on('end', () => {
    // const parsedBody = Buffer.concat(body).toString();
    console.log(body);
});

const ws = fs.createWriteStream("example.txt");
ws.write("Welcome, Mayank Soni", "utf-8");
ws.on('finish', () => {
    console.log("Content written");
});
console.log("end");


// ToDo:- Read data from "input.txt" and write it into "output.txt"
// using pipe
// rs.pipe(ws);


// ZLIB Module

// Creating zip file
// const zlib = require("zlib");
// const gzip = zlib.createGzip();
// const fs = require("fs");
// const rs = fs.createReadStream("example.txt");
// const ws = fs.createWriteStream("example.txt.gz");
// rs.pipe(gzip).pipe(ws);

//Creating normal file
// const zlib = require("zlib");
// const gunzip = zlib.createUnzip();
// const fs = require("fs");
// const rs = fs.createReadStream("example.txt.gz");
// const ws = fs.createWriteStream("output.txt");
// rs.pipe(gunzip).pipe(ws);


// Buffer Module
var buff1 = Buffer.alloc(10);
buff1 = "MayankSoni";
console.log(buff1);