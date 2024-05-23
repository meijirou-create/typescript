"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
var N = parseInt(inputs[0], 10);
var jankens = inputs.slice(1, N + 1);
// inputs.forEach(input =>{
//     console.log("input: " + input);
// })
// jankens.forEach(janken =>{
//     console.log("janken: " + janken);
// })
var winCount = 0;
for (var _i = 0, jankens_1 = jankens; _i < jankens_1.length; _i++) {
    var janken = jankens_1[_i];
    //console.log(janken);
    if (janken === "G C") {
        winCount++;
    }
    else if (janken === "C P") {
        winCount++;
    }
    else if (janken === "P G") {
        winCount++;
        // console.log("P G");
    }
    // console.log(winCount);    
}
console.log(winCount);
// function resultJanken(jankens: string[]): number{
//     let winCount : number = 0;
//     for(const janken of jankens){
//         if(janken === "G c"){
//             winCount++;
//         }
//         else if(janken === "C P"){
//             winCount++;
//         }
//         else if(janken === "P G"){
//             winCount++;
//         }
//     }
//     return winCount;
// }
// console.log(resultJanken(jankens));
