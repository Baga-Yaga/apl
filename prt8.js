// Program to write the contents to the file using Node.js file system


const fs = require('fs');
const readline = require('readline');

const content = "This is practical 8!!";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the content u want to write in file :", (input) => {
    fs.writeFile("prt8.txt", input, (err) => {
        if (err) {
            console.log("Error writing file :", err);
            return;
        }
        console.log("File written successfully");
        rl.close();
    });
});

// if u want to append content

// rl.question("Enter the content u want to write in file :", (input) => {
//     fs.appendFile("prt8.txt", input + "\n", (err) => {
//         if (err) {
//             console.log("Error writing file :", err);
//             return;
//         }
//         console.log("File written successfully");
//         rl.close();
//     });
// });

