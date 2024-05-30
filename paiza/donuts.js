"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
var _a = inputs[0].split(" ").map(Number), H = _a[0], W = _a[1];
var board = [];
for (var i = 1; i <= H; i++) {
    board.push(inputs[i]);
}
var pattern = [
    "###",
    "#.#",
    "###"
];
var count = 0;
for (var i = 0; i <= H - 3; i++) {
    for (var j = 0; j <= W - 3; j++) {
        var match = true;
        for (var pi = 0; pi < 3; pi++) {
            for (var pj = 0; pj < 3; pj++) {
                if (board[i + pi][j + pj] !== pattern[pi][pj]) {
                    match = false;
                    break;
                }
            }
            if (!match)
                break;
        }
        if (match)
            count++;
    }
}
// console.log("H: ", H);
// console.log("W: ", W);
// board.forEach(board =>{
//     console.log(board);
// })
console.log(count);
