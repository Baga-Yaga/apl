// Program for demonstrating any 5 functions of request object in Express.js

const express = require("express");
const app = express();

app.get("/user/:id", (req, res)=>{
    
    console.log("http method :",req.method);
    console.log("URL :",req.url);
    console.log("Path :",req.path);
    console.log("Query params :", req.params);
    console.log("Route params :", req.params);

    res.send("object demonstration complete");

});

app.listen(3000, () =>{
    console.log("Server runnig on port 3000");
});