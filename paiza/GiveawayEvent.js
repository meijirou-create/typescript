"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split(" ");
var N = parseInt(inputs[0], 10);
var A = parseInt(inputs[1], 10);
var B = parseInt(inputs[2], 10);
//console.log(inputs);
// let results: string[] = [];
for (var i = 1; i <= N; i++) {
    if (i % A === 0 && i % B === 0) {
        console.log("AB");
    }
    else if (i % B === 0) {
        console.log("B");
    }
    else if (i % A === 0) {
        console.log("A");
    }
    else {
        console.log("N");
    }
}
