import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N : number = parseInt(inputs[0], 10);
const jankens : string[] = inputs.slice(1, N+1);

// inputs.forEach(input =>{
//     console.log("input: " + input);
// })

// jankens.forEach(janken =>{
//     console.log("janken: " + janken);
// })


let winCount : number = 0;

for(const janken of jankens){
    //console.log(janken);
    if(janken === "G C"){
        winCount++;
    }
    else if(janken === "C P"){
        winCount++;
    }
    else if(janken === "P G"){
        winCount++;
        // console.log("P G");
    }
    // console.log(winCount);    
}

console.log(winCount);    



// function resultJanken(jankens: string[]): number{
//     let winCount : number = 0;
//     for(const janken of jankens){
//         if(janken === "G c"){
//             winCount++;
//         }
//         else if(janken === "C P"){
//             winCount++;
//         }
//         else if(janken === "P G"){
//             winCount++;
//         }
//     }
    
//     return winCount;
// }



// console.log(resultJanken(jankens));