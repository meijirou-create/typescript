import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const N : number = parseInt(inputs[0], 10);
const targets : string[] = inputs.slice(1 , N+1);

const results : string[] = [];


for(let i=0; i<targets.length; i++){
    const index : number = results.indexOf(targets[i]);
    // console.log("i: " + i);
    // console.log("index: " + index);
    if (index !== -1){
        results.splice(index,1);
    }
    results.unshift(targets[i]);
}

results.forEach(result =>{
    console.log(result);    
})