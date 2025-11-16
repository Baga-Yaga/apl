// Program for demonstrating the concept of callback function in Node.js



// function mainFunction(callback){
//     console.log("Hello World!");
//     callback();
// }

// function callbackFunction(){
//     console.log("Hello Guys!!");
// }

// mainFunction(callbackFunction);

function fetchData(callback){
    console.log("Fetching Data...");

    setTimeout(()=>{
        console.log("Data fetched successfully!");
        callback();

    },2000);
}

function afterFetch(){
    console.log("Now processing the fetched data...");
}

fetchData(afterFetch);