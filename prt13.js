// Program for demonstrating any 5 functions of OS utility module


const os = require("os");

console.log("Platform :",os.platform());
console.log("Architecture", os.arch());
console.log("CPU Info :",os.cpus());
console.log("Total Memory :",os.totalmem(), "bytes");
console.log("Free Memory :", os.freemem(), "bytes");
console.log("Hostname :",os.hostname());