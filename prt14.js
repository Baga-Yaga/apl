// Program for demonstrating any 5 functions of Path utility module


const path = require("path");

const filePath = "/prt9/demo/demo1.txt";

console.log("1. Join:", path.join("folder", "subfolder", "file.txt"));

console.log("2. Basename:", path.basename(filePath));

console.log("3. Dirname:", path.dirname(filePath));

console.log("4. Extension:", path.extname(filePath));

console.log("5. Resolve:", path.resolve("folder/file.txt"));

console.log("Parse:", path.parse(filePath));

console.log("Format:", path.format({
    dir: "/home/user/projects",
    name: "newfile",
    ext: ".txt"
}));
