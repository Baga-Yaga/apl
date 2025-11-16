console.log("consle log");
console.error("error");
console.warn("warning");

console.table([

    {id: 1,name:"Alice", age: 22},
    {id: 2,name:"Bob",age: 21}

]);

console.time("processing");
for (let i= 0; i < 1000000; i++){

}
console.timeEnd("processing");