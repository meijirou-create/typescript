import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const rules: string[] = inputs[0].split("");
const targets : string[] = inputs[1].split("");

let results : string[] = [];

for(let i=0; i< targets.length; i++){
    // let target : string = targets[i];
    for(let j=0; j<rules.length; j++){
        // let rule : string = rules[j];
        if(rules[j] === targets[i].toUpperCase()){
            results.push(targets[i].toUpperCase());
        }
        else if(rules[j] === targets[i].toLowerCase()){
            results.push(targets[i].toLowerCase());
        }
    }
}

console.log(results.join(""));

// results.forEach(result =>{
//     console.log(result);
// })

    


// inputs.forEach(input =>{
//      console.log(input);
// })

// rule.forEach((char, index) => {
//     console.log(`rule ${index + 1}: ${char}`);
// });

// target.forEach((char, index) => {
//     console.log(`target ${index + 1}: ${char}`);
// });