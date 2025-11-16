// Program for demonstrating any 5 functions of process global object

console.log("Process ID :", process.pid);
console.log("Current Working Directory :", process.cwd());
console.log("Memory Usage :", process.memoryUsage());
console.log("Command line argument :",process.argv);
console.log("Node version: ", process.version);
console.log("Platform", process.platform);
console.log("CPU architecture :", process.arch);
// console.log("process exit",process.exit(0));