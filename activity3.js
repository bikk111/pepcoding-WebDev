console.log();

let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);

let currDirPath = process.cwd();

let mainDirName = inputArr[0];
let mainDirPath = path.join(currDirPath, mainDirName);

let currDirExists = fs.existsSync(mainDirPath);

if(currDirExists == true) {
    console.log("the Directory is Already Exists");
    console.log();
    return;
}
else {
    
    fs.mkdirSync(mainDirPath);
    let foldersInMainDirectory = inputArr.slice(1);

    for(let i = 0; i < foldersInMainDirectory.length; i++) {
        let folderName = foldersInMainDirectory[i];
        let folderPath = path.join(mainDirPath,folderName);
        fs.mkdirSync(folderPath);

        for(let j = 1; j <= 5; j++) {
            let folPath = path.join(folderPath, "module_" + j);
            fs.mkdirSync(folPath);
            let filePath = path.join(folPath, "content.md");
            fs.writeFileSync(filePath, "hello World...!");
        }
    }
}

console.log();