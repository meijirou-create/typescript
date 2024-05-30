import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const[numberOfSlime, firstLevel] = inputs[0].split(" ").map(Number);
const targetLevels: number[] = inputs[1].split(" ").map(Number);

// console.log("slime :" + numberOfSlime);
// console.log("level: " + firstLevel);
// targetLevels.forEach(targetlevel =>{
//     console.log(targetlevel);
// })
// console.log(Math.min(...targetLevel));

targetLevels.sort((a,b) => b-a);

// targetLevels.forEach(targetlevel =>{
//     console.log(targetlevel);
// });

let tmpLevel: number = firstLevel;
let count: number = 0;
const maxLevel: number = targetLevels[0];
let i: number = 0;
let noChangeCount = 0;

while(1){
    
    if(tmpLevel > maxLevel){
        break;
    }
    if(targetLevels.length === 1){
        break;
    }
    if(noChangeCount > targetLevels.length){
        break;
    }
    
    if(tmpLevel >= targetLevels[i]){
        tmpLevel = tmpLevel + targetLevels[i];
        count++;
        targetLevels.splice(i, 1);
        noChangeCount = 0;
        
    }

    // console.log("i: " + i);
    // console.log("tmp: " + tmpLevel);
    // console.log("target: " + targetLevels[i]);
    // console.log("count: " + count);
    // targetLevels.forEach(targetLevel =>{
    //     console.log("targetLevel: " + targetLevel);
    // })

    i++;
    noChangeCount++;

    if(i >= targetLevels.length){
        i=0;
    }

    // console.log("i: " + i);
    // console.log("tmp: " + tmpLevel);
    // console.log("target: " + targetLevels[i]);
    // console.log("count: " + count);
    // targetLevels.forEach(targetLevel =>{
    //     console.log("targetLevel: " + targetLevel);
    // })
    
}

if(tmpLevel < maxLevel){
    console.log(-1);
}
else{
    console.log(count);
}

// import * as fs from "fs";

// const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// const [numberOfSlime, firstLevel] = inputs[0].split(" ").map(Number);
// const targetLevels: number[] = inputs[1].split(" ").map(Number);

// targetLevels.sort((a, b) => a - b); 

// let currentLevel: number = firstLevel;
// let count: number = 0;

// while (targetLevels.length > 0) {
    
//     let found = false;
//     for (let i = 0; i < targetLevels.length; i++) {
//         if (targetLevels[i] <= currentLevel) {
//             currentLevel += targetLevels[i];
//             targetLevels.splice(i, 1);
//             count++;
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         break;
//     }
// }

// if (currentLevel <= Math.max(...targetLevels, currentLevel)) {
//     console.log(-1);
// } else {
//     console.log(count);
// }