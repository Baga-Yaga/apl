const fs = require('fs');

fs.readdir("./prt9", (err,files) =>{
    if (err){
        console.log("Error reading folder", err);
        return;
    }
    
    console.log("Reading folder .....");
    files.forEach(file =>{
        console.log(file);
    });

});


// recursively
const fs = require("fs");
const path = require("path");

function readFolder(folderPath) {
    fs.readdir(folderPath, { withFileTypes: true }, (err, items) => {
        if (err) {
            console.log("Error reading directory:", err);
            return;
        }

        items.forEach((item) => {
            const fullPath = path.join(folderPath, item.name);

            if (item.isFile()) {
                fs.readFile(fullPath, "utf8", (err, data) => {
                    if (err) {
                        console.log("Error reading file:", err);
                        return;
                    }
                    console.log(`\nFILE: ${fullPath}`);
                    console.log("CONTENT:");
                    console.log(data);
                });

            } else if (item.isDirectory()) {
                console.log(`\nFOLDER: ${fullPath}`);
                readFolder(fullPath);
            }
        });
    });
}

readFolder("./prt9");
