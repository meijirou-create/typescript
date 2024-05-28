import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");

const N: number = parseInt(inputs[0], 10);
const A: number = parseInt(inputs[1], 10);
const B: number = parseInt(inputs[2], 10);

//console.log(inputs);

// let results: string[] = [];

for(let i=1; i<= N; i++){
    if(i % A === 0 && i % B === 0){
        console.log("AB");
    }
    else if(i % B === 0){
        console.log("B");
    }
    else if(i % A === 0){
        console.log("A");
    }
    else {
        console.log("N");
    }
}