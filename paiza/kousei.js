"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var rules = inputs[0].split("");
var targets = inputs[1].split("");
var results = [];
for (var i = 0; i < targets.length; i++) {
    // let target : string = targets[i];
    for (var j = 0; j < rules.length; j++) {
        // let rule : string = rules[j];
        if (rules[j] === targets[i].toUpperCase()) {
            results.push(targets[i].toUpperCase());
        }
        else if (rules[j] === targets[i].toLowerCase()) {
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
