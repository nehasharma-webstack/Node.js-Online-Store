const fs = require("fs");

function reqHandler(req, res) {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", 'text/html');
        res.write("<html>");
        res.write("<head><title>Form</title></head>");
        res.write("<body><form action='/msg' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/msg" && req.method === "POST") {
        // res.write("Inside if block");
        const body = [];
        req.on("data", (chunks) => {
            // registering an event
            body.push(chunks);
            console.log(body);
        });
        return req.on("end", () => {
            // event loop
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // res.write("Inside ParsedBody");
            // console.log(parsedBody);
            // parsedBody.toString();

            // fs.writeFileSync("text.txt", message);          // synchronous

            fs.writeFile("text.txt", message, () => {       // asynchronous
                console.log("File Written");
                res.statusCode = 302;   // 3xx - redirection status codes
                res.setHeader("Location", "/");
                // res.write("Message sent");
                return res.end();
            });
            console.log("After file write");
        });
    }
    res.write("After if statement");
    res.end();
}

// module.exports = {
//     handler: reqHandler,
//     someMsg: "Welcome to module system of node",
// };

module.exports.handler = reqHandler;
module.exports.someMsg = "Welcome to module system of node";
module.exports.age = "23";

// ToDo:- Export age of a person and print it on a console