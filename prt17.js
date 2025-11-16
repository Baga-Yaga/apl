// Program for reading data from stream using Node.js


const fs = require("fs");

// Create readable stream
const readStream = fs.createReadStream("sample.txt", "utf8");

// Event: data (chunk received)
readStream.on("data", (chunk) => {
    console.log("Received chunk:");
    console.log(chunk);
});

// Event: end (no more data)
readStream.on("end", () => {
    console.log("Finished reading the file.");
});

// Event: error
readStream.on("error", (err) => {
    console.log("Error:", err);
});
