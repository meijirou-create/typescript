import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [H,W] = inputs[0].split(" ").map(Number);
const board: string[] = [];

for(let i=1; i<=H; i++){
    board.push(inputs[i]);
}

const pattern = [
    "###",
    "#.#",
    "###"
];

let count: number = 0;

for (let i = 0; i <= H-3; i++) {
    for (let j = 0; j <= W-3; j++) {
        let match = true;
        for (let pi = 0; pi < 3; pi++) {
            for (let pj = 0; pj < 3; pj++) {
                if (board[i + pi][j + pj] !== pattern[pi][pj]) {
                    match = false;
                    break;
                }
            }
            if (!match) break;
        }
        if (match) count++;
    }
}

// console.log("H: ", H);
// console.log("W: ", W);
// board.forEach(board =>{
//     console.log(board);
// })

console.log(count);