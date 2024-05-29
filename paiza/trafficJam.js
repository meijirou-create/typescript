"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var tmp = inputs[0].split(" ");
var N = parseInt(tmp[0]);
var jam = parseInt(tmp[1]);
var cars = inputs.slice(1, N).map(function (car) { return parseInt(car, 10); });
// console.log("N:" + N);
// console.log("jam: " + jam);
// cars.forEach(car =>{
//     console.log(car);
// })
function jamlength(jam, cars) {
    var tmpJam = 0;
    for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
        var car = cars_1[_i];
        if (car <= jam) {
            tmpJam = tmpJam + car;
        }
    }
    return tmpJam;
}
var sumOfJam = jamlength(jam, cars);
console.log(sumOfJam);
