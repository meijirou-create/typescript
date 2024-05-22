"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var N = parseInt(inputs[0], 10);
var targets = inputs.slice(1, N + 1);
// const results : string[] = Array(N).fill("non-use");
var results = [];
// inputs.forEach(input=>{
//     console.log(input);
// });
// console.log("N" +N);
// targets.forEach(target=>{
//     console.log(target);
// });
// const tmp : string[] = [];
// tmp[0] = targets[0];
// for(let i=0; i<targets.length; i++){
// }
for (var i = 0; i < targets.length; i++) {
    var index = results.indexOf(targets[i]);
    // console.log("i: " + i);
    // console.log("index: " + index);
    if (index !== -1) {
        results.splice(index, 1);
    }
    results.unshift(targets[i]);
}
// for(let i=0; i<targets.length; i++){
//     for(let j=0; j<results.length; j++){
//         if(targets[i] === results[j]){
//             results.unshift(results[j]);
//         }
//         else{
//             results.push(targets[i]);
//         }
//     }
// }
// console.log(results.join(""));
results.forEach(function (result) {
    console.log(result);
});
