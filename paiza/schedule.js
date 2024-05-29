"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var numberOfA = parseInt(inputs[0]);
var Lives_A = inputs.slice(1, numberOfA + 1).map(function (live_A) { return parseInt(live_A, 10); });
var numberOfB = parseInt(inputs[numberOfA + 1]);
var Lives_B = inputs.slice(numberOfA + 2, numberOfA + numberOfB + 2).map(function (live_B) { return parseInt(live_B); });
// inputs.forEach(input =>{
//     console.log(input);
// })
// console.log("numberofA: " + numberOfA);
// console.log("numberofB: " + numberOfB);
// Lives_A.forEach(Live_A =>{
//     console.log("Live_A: " + Live_A);
// });
// Lives_B.forEach(Live_B =>{
//     console.log("Live_B: " + Live_B);
// })
function LiveSchedele(Lives_A, Lives_B) {
    var result = new Array(32).fill("x");
    ;
    var flag = "A";
    for (var i = 1; i <= 31; i++) {
        if (Lives_A.indexOf(i) !== -1 && Lives_B.indexOf(i) === -1) {
            console.log("A");
            //result[i] = "A";
        }
        else if (Lives_A.indexOf(i) === -1 && Lives_B.indexOf(i) !== -1) {
            console.log("B");
            result[i] = "B";
        }
        else if (Lives_A.indexOf(i) !== -1 && Lives_B.indexOf(i) !== -1) {
            if (flag === "A") {
                console.log("A");
                result[i] = "A";
                flag = "B";
            }
            else {
                console.log("B");
                result[i] = "B";
                flag = "A";
            }
        }
        else {
            console.log("x");
        }
    }
    // for(let i = 0; i <=31; i++){
    //     for(const Live_A of Lives_A){
    //         for(const Live_B of Lives_B){
    //             if(Live_A === i && Live_B !== i){
    //                 result[i] = "A";
    //             }
    //             else if(Live_A !== i && Live_B === i){
    //                 result[i] = "B";
    //             }
    //             else if(Live_A === i && Live_B === i){
    //                 if(flag === "A"){
    //                     result[i] = "A";
    //                     flag = "B";
    //                 }
    //                 else{
    //                     result[i] = "B";
    //                 }
    //             }
    //         }
    //     }
    // }
    return result;
}
var resultSchedules = LiveSchedele(Lives_A, Lives_B);
// resultSchedules.forEach(resultSchedule =>{
//     console.log(resultSchedule);
// })
