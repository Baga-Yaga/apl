// fs.readFile() → Read file

// fs.writeFile() → Write new file

// fs.appendFile() → Append to a file

// fs.mkdir() → Create folder

// fs.unlink() → Delete file

const fs = require("fs");

const content1 = "Today is Sunday!!";
const content2 = "Tomorrow is MOnday!!";

fs.writeFile("prt10.txt", content1, (err)=>{
    if (err) throw err;
    console.log("File created sucessfully....!")


    fs.readFile("prt10.txt","utf-8", (err, data)=>{
        if (err) throw err;
        console.log(`Content within the files :${data}`);
    

        fs.appendFile("prt10.txt", `\n${content2}`, (err)=>{
            if (err) throw err;
            console.log("data apapended...");
        
        
            fs.mkdir("newfolder", {recursive : true} ,(err)=>{
                if (err) throw err;
                console.log("Folder creates successfully....");
            

                fs.rename("prt10.txt", "pract10.txt", (err)=>{
                    if (err) throw err;
                    console.log("Folder renamed");
                

                    fs.unlink("pract10.txt",(err)=>{
                        if (err) throw err;
                        console.log("File deleted sucessfully..."); 
                

                        fs.rmdir("newfolder",(err)=>{
                            if (err) throw err;
                            console.log("Folder removed...!");
                        });

                    });
                });
            });
        });
    
    });

    
});
