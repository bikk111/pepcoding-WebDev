console.log();

let path = require("path");
let fs = require("fs");

let currDirPath = process.cwd();

let dirName = "destDir";
let destDirPath = path.join(currDirPath, dirName);

let destFileName = "f1.txt";
let destFilePath = path.join(destDirPath, destFileName);

fs.mkdirSync(destDirPath);
fs.writeFileSync(destFilePath, "hello world...!");


console.log();