console.log();

let path = require("path");
let fs = require("fs");

let inputArr = process.argv.slice(2);

let currDirPath = process.cwd();

let mainDirName = inputArr[0];
let mainDirPath = path.join(currDirPath, mainDirName);

let isDirectoryPresent = fs.existsSync(mainDirPath);

if(isDirectoryPresent == true) {
    console.log("the Directory is already present...!");
    return;
} else {
    fs.mkdirSync(mainDirPath);
    let foldersInMainDirectory = inputArr.slice(1);

    for(let i = 0; i < foldersInMainDirectory.length; i++) {

        let folderName = foldersInMainDirectory[i];
        let folderPath = path.join(mainDirPath, folderName);
        fs.mkdirSync(folderPath);

        for(let j = 1; j <= 5; j++) {
            let internalFolderPath = path.join(folderPath, "module_" + j);
            fs.mkdirSync(internalFolderPath);

            let internalFilePath = path.join(internalFolderPath, "content.txt");
            fs.writeFileSync(internalFilePath, "hello world...!");
        }
    }
}

console.log();