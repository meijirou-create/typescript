import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const hit : number = parseInt(inputs[0]);
const N : number = parseInt(inputs[1], 10);

const targets : number[] = inputs.slice(2, N+2).map(target =>parseInt(target, 10));


// inputs.forEach(input =>{
//     console.log("input: " + input);
// });

// console.log("hit: " + hit);
// console.log("N: " + N);

// targets.forEach(target => {
//     console.log("target: " + target);
// });

const adjacentNumbers = [hit - 1, hit + 1];
const winningLast4 = hit % 10000;
const winningLast3 = hit % 1000;

const results : string[] = [];

targets.forEach(target => {
    if (target === hit) {
        results.push("first");
    } else if (adjacentNumbers.includes(target) && (hit !== 100000 && hit !== 199999)) {
        results.push("adjacent");
    } else if (target % 10000 === winningLast4 && target !== hit) {
        results.push("second");
    } else if (target % 1000 === winningLast3 && target % 10000 !== winningLast4) {
        results.push("third");
    } else {
        results.push("blank");
    }
});

results.forEach(result =>{
    console.log(result);
})
