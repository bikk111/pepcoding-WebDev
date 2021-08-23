console.log();

let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let command = inputArr[0];

let types = {
    media : [".mp4", ".mkv"],
    archives : [".zip", ".rar", ".7z", ".xz"],
    words : [".docx", ".doc", ".txt"],
    pdf : [".pdf"],
    excel : [".xlsx", ".xls"],
    apps : [".exe", ".pkg"]
}

switch(command) {

    case "tree" :
        treeFun(inputArr[1]);
        break;
    case "organize" :
        organizeFun(inputArr[1]);
        break;
    case "help" :
        helpFun();
        break;
    default :
        console.log("please Enter Valid Command..!");
        return;
}

function treeFun(dirPath) {
    console.log("tree command excuted...!");
    return;
}

function organizeFun(dirPath) {
    if(dirPath == undefined) {
        console.log("Please Enter Path");
        return;
    }
    else {
        let isPathValid = fs.existsSync(dirPath);
        if(isPathValid == false) {
            console.log("Please Enter Valid Path");
            return;
        }
        else {
            let orgDirPath = path.join(dirPath, "organizeFile");
            if(fs.existsSync(orgDirPath) == true) {
                console.log("the Directory is Already created....!");
                return;
            }
            else {
                fs.mkdirSync(orgDirPath);
                organizedHelper(dirPath, orgDirPath);
            }
        }
    }
}

function organizedHelper(dirPath, orgDirPath) {
    let filesName = fs.readdirSync(dirPath);
    
    for(let i = 0; i < filesName.length; i++) {
        let filePath = path.join(dirPath, filesName[i]);
        let isFile = fs.lstatSync(filePath).isFile();
        if(isFile == true) {
            let category = getCategory(filesName[i]);
            copyFileFun(filePath, orgDirPath, category);
        }
    }
}

function copyFileFun(srcFilePath, orgDirPath, category) {
    let categoryDirPath = path.join(orgDirPath, category);
    if(fs.existsSync(categoryDirPath) == false) {
        fs.mkdirSync(categoryDirPath);
    }
    let finalFileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryDirPath,finalFileName);
    fs.copyFileSync(srcFilePath,destFilePath); 
    fs.unlinkSync(srcFilePath);
}

function getCategory(fileName) {
    let extName = path.extname(fileName);
    for(let key in types) {
        let extArr = types[key];
        for(let i = 0; i < extArr.length; i++) {
            if(extName == extArr[i]) {
                return key // here key represent type of folder.
            }
        }
    }
    return "other";
}

function helpFun() {
    console.log(`
        list of All commands
            1. node hello.js tree "directory Path"
            2. node hello.js organize "directory Path"
            3. node hello.js help 
    `);
}
console.log();