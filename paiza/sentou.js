"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var tmp = inputs[0].split(" ");
var N = parseInt(tmp[0]);
var firstLevel = parseInt(tmp[1]);
var enemies = inputs.slice(1, N + 1).map(function (input) { return parseInt(input); });
function battle(firstLevel, enemies) {
    var tmpLevel = firstLevel;
    for (var _i = 0, enemies_1 = enemies; _i < enemies_1.length; _i++) {
        var enemy = enemies_1[_i];
        if (tmpLevel > enemy) {
            tmpLevel = Math.floor(tmpLevel + enemy / 2);
        }
        else if (tmpLevel < enemy) {
            tmpLevel = Math.floor(tmpLevel / 2);
        }
        else {
            tmpLevel = tmpLevel;
        }
    }
    return tmpLevel;
}
var resultLevel = battle(firstLevel, enemies);
console.log(resultLevel);
// console.log("N: " + N);
// console.log("firstLevel: " + firstLevel);
// enemies.forEach(enemy =>{
//     console.log(enemy);
// })
