// Program for post HTTP method using Express.js


const express = require("express");
const app = express();

// Middleware to parse JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple POST route
app.post("/simple", (req, res) => {
    res.send("POST request received!");
});

// POST receiving JSON data
app.post("/json", (req, res) => {
    res.send(`Received JSON: ${JSON.stringify(req.body)}`);
});

// POST receiving text data
app.post("/text", (req, res) => {
    res.send(`You sent this text: ${req.body.text}`);
});

// POST receiving form data
app.post("/form", (req, res) => {
    const { name, age } = req.body;
    res.send(`Form received! Name: ${name}, Age: ${age}`);
});

// POST with custom status code
app.post("/create", (req, res) => {
    res.status(201).send("Resource created successfully!");
});

// POST reading request headers
app.post("/header", (req, res) => {
    res.send(`Your User-Agent is: ${req.headers["user-agent"]}`);
});

// POST sending JSON response (like API)
app.post("/add-product", (req, res) => {
    const product = req.body;
    res.json({
        message: "Product received successfully",
        product: product,
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
