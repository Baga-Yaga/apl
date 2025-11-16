// Program for writing data to the stream using Node.js


const fs = require("fs");

// Create writable stream
const writeStream = fs.createWriteStream("output.txt");

// Write chunks of data
writeStream.write("This is line 1.\n");
writeStream.write("This is line 2.\n");
writeStream.write("This is written using a write stream in Node.js.\n");

// End the stream
writeStream.end();

// Event: finish
writeStream.on("finish", () => {
    console.log("Finished writing to output.txt");
});

// Event: error
writeStream.on("error", (err) => {
    console.log("Error:", err);
});
