console.log();

// fs module for Directory

let fs = require("fs");

// create folder
fs.mkdirSync("myFolder"); // command to create folder

// delete folder
fs.rmdirSync("myFolder"); // command to delete folder

// command to check path exixts or not
let path = "C:\\Users\\Muddasir Alam\\Desktop\\gitDir\\f1.txt";
let ans = fs.existsSync(path);
console.log("path : ", ans);

// path belongs to directory or file

let statsObj = fs.lstatSync("C:\\Users\\Muddasir Alam\\Desktop\\gitDir\\f1.txt");

if(statsObj.isDirectory()) {
    console.log("path belongs to Directory");
} else {
    console.log("path belongs to file");
}

// command to read the content of Directory;

let content = fs.readdirSync("WebDev");

for(let i = 0; i < content.length; i++) {
    console.log("Directory name : ",content[i]);
}

console.log();