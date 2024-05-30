"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
// const size: string[] = inputs[0].split(" ");
// const sizeY: number = parseInt(size[0]);
// const sizeX: number = parseInt(size[1]);
var _a = inputs[0].split(" ").map(Number), H = _a[0], W = _a[1];
var board = [];
var _b = inputs[H + 1].split(" ").map(Number), Y = _b[0], X = _b[1];
for (var i = 1; i <= H; i++) {
    board.push(inputs[i].split(''));
}
if (board[Y][X] === ".") {
    board[Y][X] = "#";
}
else {
    board[Y][X] = ".";
}
for (var i = 0; i < H; i++) {
    console.log(board[i].join(''));
}
// const firstBoard: string[] = inputs.slice(1, sizeY+1);
// const target: string[] = inputs[sizeY+1].split(" ");
// const targetY: number = parseInt(target[0]);
// const targetX: number = parseInt(target[1]);
// console.log("H: " + H);
// console.log("W: " + W);
// console.log("X: " + X);
// console.log("X: " + Y);
// board.forEach(board =>{
//     console.log(board);
// })
// function createBoard(sizeY: number, sizeX: number, firstBoard: string[]): string[][]{
//     const board: string[][] = [];
//     for(let i=0; i < sizeX; i++){
//         for(let j=0; j < sizeY; j++){
//             board[i][j] = 
//         }
//     }
// }
