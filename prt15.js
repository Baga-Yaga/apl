// Program for demonstrating any 5 functions of Net utility module


const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected.");

    // 4. Receive data
    socket.on("data", (data) => {
        console.log("Client says:", data.toString());
    });

    // 3. Send data to client
    socket.write("Hello from TCP server!");

    socket.on("end", () => {
        console.log("Client disconnected.");
    });
});

// 2. Start server
server.listen(5000, () => {
    console.log("Server running on port 5000");
});
