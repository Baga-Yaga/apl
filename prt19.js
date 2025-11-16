// Program for creating a module for arithmetic operations and use it in another program using Node.js

// app.js

const math = require("./prt_19");

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.sub(10, 5));
console.log("Multiplication:", math.mul(10, 5));
console.log("Division:", math.div(10, 5));
