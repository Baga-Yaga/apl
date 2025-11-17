// Program for demonstrating any 5 functions of response object in Express.js

const express = require("express");
const path = require("path");
const app = express();

app.get("/demo", (req, res) =>{
    // res.send("This is a simple text message");

    res.json({message :"This is me amar!", status : "OK"});

    // res.status(201).send("Created");

    // res.sendFile(path.join(__dirname, "index.html"));

    // res.set("X-Custom-Header", "MyExpressApp");

});

app.listen(3000, () =>{
    console.log("Server runnning at 3000");
});
