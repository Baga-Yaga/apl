// Program for put HTTP method using Express.js


const express = require("express");
const app = express();

// To read JSON data
app.use(express.json());

// 1. Simple PUT route
app.put("/update", (req, res) => {
    res.send("PUT request received!");
});

// 2. PUT with route parameter
app.put("/user/:id", (req, res) => {
    res.send("Updating user with ID: " + req.params.id);
});

// 3. PUT receiving JSON data
app.put("/update-json", (req, res) => {
    res.send("Received data for update: " + JSON.stringify(req.body));
});

// 4. PUT with custom status
app.put("/done", (req, res) => {
    res.status(200).send("Update successful!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
