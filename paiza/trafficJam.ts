import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const tmp: string[] = inputs[0].split(" ");
const N: number = parseInt(tmp[0]);
const jam: number = parseInt(tmp[1]);

const cars: number[] = inputs.slice(1, N).map(car => parseInt(car, 10));

// console.log("N:" + N);
// console.log("jam: " + jam);

// cars.forEach(car =>{
//     console.log(car);
// })

function jamlength(jam: number, cars: number[]): number{
    let tmpJam = 0;
    for(const car of cars){
        if(car <= jam){
            tmpJam = tmpJam + car ;
        }
    }
    return tmpJam;
}

const sumOfJam: number = jamlength(jam, cars);

console.log(sumOfJam);