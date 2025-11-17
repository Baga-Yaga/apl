// Program for demonstrating the concept of Express.js router


const express = require("express");
const app = express();

// Import router
const myRouter = require("./router");

// Use router with a base path
app.use("/api", myRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
