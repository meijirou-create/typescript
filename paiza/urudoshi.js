"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
// const inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split(/(\r\n|\r|\n)/);
var N = parseInt(inputs[0], 10);
// const years = inputs.slice(1, N+1).map(year => parseInt(year, 10));
var years = inputs.slice(1, N + 1).map(function (year) { return parseInt(year, 10); });
///
// inputs.forEach(input =>{
//     console.log(input);
// })
// console.log("length" + inputs.length);
// console.log("inputs"+ inputs);
// console.log("N"+ N);
// console.log("years"+ years);
///
function checkUrudoshi(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
years.forEach(function (year) {
    // console.log(`${year} is ${checkUrudoshi(year)? ``: `not `}a leap year`);
    console.log("".concat(year, " is ").concat(checkUrudoshi(year) ? '' : 'not ', "a leap year"));
    // console.log('checkUrudoshi' + checkUrudoshi(year));
});
// import * as fs from "fs";
// const inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
// const N = parseInt(inputs[0], 10);
// const years = inputs.slice(1, N + 1).map(year => parseInt(year, 10));
// function isLeapYear(year: number): boolean {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true; // Leap year
//             } else {
//                 return false; // Not a leap year
//             }
//         } else {
//             return true; // Leap year
//         }
//     } else {
//         return false; // Not a leap year
//     }
// }
// years.forEach(year => {
//     console.log(`${year} is ${isLeapYear(year) ? '' : 'not '}a leap year`);
// });
