console.log();

let command = process.argv.slice(2)[0];

switch(command) {

    case "one" :
        console.log("hello World...!");
        break;
    case "two" :
        console.log("may God Bless you");
        break;
    case "three" :
        console.log("hi hello");
        break;
    default : 
        console.log("good bye...!");
        break;
}

console.log();