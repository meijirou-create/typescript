"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
var hit = parseInt(inputs[0]);
var N = parseInt(inputs[1], 10);
var targets = inputs.slice(2, N + 2).map(function (target) { return parseInt(target, 10); });
// inputs.forEach(input =>{
//     console.log("input: " + input);
// });
// console.log("hit: " + hit);
// console.log("N: " + N);
// targets.forEach(target => {
//     console.log("target: " + target);
// });
var adjacentNumbers = [hit - 1, hit + 1];
var winningLast4 = hit % 10000;
var winningLast3 = hit % 1000;
var results = [];
targets.forEach(function (target) {
    if (target === hit) {
        results.push("first");
    }
    else if (adjacentNumbers.includes(target) && (hit !== 100000 && hit !== 199999)) {
        results.push("adjacent");
    }
    else if (target % 10000 === winningLast4 && target !== hit) {
        results.push("second");
    }
    else if (target % 1000 === winningLast3 && target % 10000 !== winningLast4) {
        results.push("third");
    }
    else {
        results.push("blank");
    }
});
results.forEach(function (result) {
    console.log(result);
});
