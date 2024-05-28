"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var N = parseInt(inputs[0], 10);
var targets = inputs.slice(1, N + 1).map(function (target) { return parseInt(target, 10); });
// console.log("N: " + N);
// targets.forEach(target =>{
//     console.log(target);
// });
function calculate(targets) {
    var bunshi = 1;
    var bunbo = 0;
    for (var i = targets.length - 1; i >= 0; i--) {
        var temp = bunshi;
        bunshi = targets[i] * bunshi + bunbo;
        bunbo = temp;
    }
    return [bunshi, bunbo];
}
var _a = calculate(targets), bunshi = _a[0], bunbo = _a[1];
console.log(bunshi, bunbo);
