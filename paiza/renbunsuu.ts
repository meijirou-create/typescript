import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N : number = parseInt(inputs[0], 10);
const targets : number[] = inputs.slice(1, N+1).map(target =>parseInt(target,10));

// console.log("N: " + N);

// targets.forEach(target =>{
//     console.log(target);
// });

function calculate(targets: number[]) : [number, number]{
    let bunshi : number= 1;
    let bunbo : number= 0;

    for(let i = targets.length -1; i>=0; i--){
        let temp : number = bunshi;
        bunshi = targets[i] * bunshi + bunbo;
        bunbo = temp;
    }

    return [bunshi, bunbo];
}

const [bunshi, bunbo] : [number, number] = calculate(targets);
console.log(bunshi, bunbo);