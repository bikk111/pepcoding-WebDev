console.log();

let inputArr = process.argv.slice(2);

let max = inputArr[0];

for(let i = 1; i < inputArr.length; i++) {
    if(inputArr[i] > max) {
        max = inputArr[i];
    }
}

console.log("max in an array : ", max);

console.log();