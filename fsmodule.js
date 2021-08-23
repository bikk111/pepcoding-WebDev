console.log();

// fs Module for file : 

let fs = require("fs");

// read the content of file...!

let readData = fs.readFileSync("f1.txt");
console.log("content : " + readData);

// append the contet of file ...!

let appendData = "this is appended text...!";
fs.appendFileSync("f1.txt" , appendData);
let newlyReadedData = fs.readFileSync("f1.txt");
console.log("updated test : " + newlyReadedData);

// write the content in file or create file

let writeData = "this file is mainly use to check the unlinckSync() function";
fs.writeFileSync("f2.txt", writeData);

// delete the file

fs.unlinkSync("f2.txt");

console.log();