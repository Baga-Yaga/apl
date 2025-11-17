// Program for demonstrating the use of app.use() in Express.js


const express = require("express");
const app = express();

// 1. Simple middleware using app.use()
app.use((req, res, next) => {
    console.log("Middleware called!");
    console.log("Time:", new Date().toLocaleTimeString());
    console.log("Request URL:", req.url);
    next(); // move to next route
});

// 2. Simple route
app.get("/", (req, res) => {
    res.send("Welcome! app.use() middleware has been applied.");
});

// 3. Another route to show middleware runs for every request
app.get("/about", (req, res) => {
    res.send("This is the ABOUT page.");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
