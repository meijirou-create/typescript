import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const tmp: string[] = inputs[0].split(" ");
const N: number = parseInt(tmp[0]);
const firstLevel: number = parseInt(tmp[1]);

const enemies: number[] = inputs.slice(1, N+1).map(input => parseInt(input));

function battle(firstLevel: number, enemies: number[]): number{
    let tmpLevel = firstLevel;
    for(const enemy of enemies){
        if(tmpLevel > enemy){
            tmpLevel = Math.floor(tmpLevel + enemy / 2);
        }
        else if(tmpLevel < enemy){
            tmpLevel = Math.floor(tmpLevel / 2);
        }
        else{
            tmpLevel = tmpLevel;
        }
    }
    return tmpLevel;
}

const resultLevel: number = battle(firstLevel, enemies);
console.log(resultLevel);

// console.log("N: " + N);
// console.log("firstLevel: " + firstLevel);

// enemies.forEach(enemy =>{
//     console.log(enemy);
// })