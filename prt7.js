// Program to read the file contents using Node.js file system


const fs = require("fs");

fs.readFile("prt7.txt", "utf-8",(err, data) => {
    if (err){
        console.log("Error reading file...", err);
        return;
    }

    console.log(`File Content : ${data}`);
});