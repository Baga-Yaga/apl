const net = require("net");

// 1. Create a TCP server
const server = net.createServer((socket) => {
    console.log("Client connected.");

    // 6. Show client IP address
    console.log("Client IP:", socket.remoteAddress);

    // 3. Send message to client
    socket.write("Hello from TCP server!\n");

    // 4. Receive data from client
    socket.on("data", (data) => {
        console.log("Client says:", data.toString());
    });

    // 5. When client disconnects
    socket.on("end", () => {
        console.log("Client disconnected.");
    });
});

// 2. Start server on port 5000
server.listen(5000, () => {
    console.log("Server running on port 5000");
});

// 7. Handle server errors
server.on("error", (err) => {
    console.error("Server error:", err);
});
