// Program for demonstrating any 5 functions of OS utility module


const http = require("http");

const server = http.createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type" : "text/html" }); 
    res.write(`
        <html>
            <body>
                <h1>Hello its amar naik!!</h1>
            </body>
        </html>
        `
    );
    res.end()
});

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000...")
});