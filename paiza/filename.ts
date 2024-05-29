import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf-8").trim();

//console.log(input.indexOf("--"));

// if(input.indexOf("--") === -1){

// }

console.log(input.replace(/-+/g, '-'));

