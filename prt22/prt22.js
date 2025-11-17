// Program for get HTTP method using Express.js

const express = require("express");
const path = require("path");
const app = express();

// Simple GET route
app.get("/", (req, res) => {
    res.send("Welcome to the GET method demo!");
});

// sending plain text
app.get("/text", (req, res) => {
    res.send("This is a plain text response.");
});

// sending JSON
app.get("/json", (req, res) => {
    res.json({ message: "This is a JSON response", status: "success" });
});

// using query parameters
app.get("/search", (req, res) => {
    res.send(`You searched for: ${req.query.item}`);
});

//  using route parameters
app.get("/user/:id", (req, res) => {
    res.send(`User ID is: ${req.params.id}`);
});

// returning an array/list
app.get("/products", (req, res) => {
    const items = ["Laptop", "Phone", "Tablet"];
    res.json(items);
});

// sending an HTML file
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
