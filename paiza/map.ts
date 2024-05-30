import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

// const size: string[] = inputs[0].split(" ");
// const sizeY: number = parseInt(size[0]);
// const sizeX: number = parseInt(size[1]);

const [H,W] = inputs[0].split(" ").map(Number);
const board: string[][] = [];
const [Y,X] = inputs[H+1].split(" ").map(Number);

for(let i=1; i<=H; i++){
    board.push(inputs[i].split(''));
}

if(board[Y][X] === "."){
    board[Y][X] = "*";
}
else{
    board[Y][X] = ".";
}

for (let i = 0; i < H; i++) {
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









