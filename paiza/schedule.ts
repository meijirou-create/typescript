import * as fs from "fs";

const inputs: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const numberOfA: number = parseInt(inputs[0]);
const Lives_A: number[] = inputs.slice(1, numberOfA+1).map(live_A => parseInt(live_A, 10));
const numberOfB: number = parseInt(inputs[numberOfA + 1]);
const Lives_B: number[] = inputs.slice(numberOfA + 2, numberOfA + numberOfB + 2).map(live_B => parseInt(live_B));

// inputs.forEach(input =>{
//     console.log(input);
// })

// console.log("numberofA: " + numberOfA);
// console.log("numberofB: " + numberOfB);

// Lives_A.forEach(Live_A =>{
//     console.log("Live_A: " + Live_A);
// });

// Lives_B.forEach(Live_B =>{
//     console.log("Live_B: " + Live_B);
// })

function LiveSchedele(Lives_A: number[], Lives_B: number[]): string[]{
    let result: string[] = new Array(32).fill("x");;
    let flag: string = "A"

    for(let i=1; i<=31; i++){
        if(Lives_A.indexOf(i) !== -1 && Lives_B.indexOf(i) === -1){
            console.log("A");
            //result[i] = "A";
        }
        else if(Lives_A.indexOf(i) === -1 && Lives_B.indexOf(i) !== -1){
            console.log("B");
            result[i] = "B";
        }
        else if(Lives_A.indexOf(i) !== -1 && Lives_B.indexOf(i) !== -1){
            if(flag === "A"){
                console.log("A");
                result[i] = "A";
                flag = "B";
            }
            else{
                console.log("B");
                result[i] = "B";
                flag = "A"
            }   
        }
        else{
            console.log("x");
        }
    }


    // for(let i = 0; i <=31; i++){
    //     for(const Live_A of Lives_A){
    //         for(const Live_B of Lives_B){
    //             if(Live_A === i && Live_B !== i){
    //                 result[i] = "A";
    //             }
    //             else if(Live_A !== i && Live_B === i){
    //                 result[i] = "B";
    //             }
    //             else if(Live_A === i && Live_B === i){
    //                 if(flag === "A"){
    //                     result[i] = "A";
    //                     flag = "B";
    //                 }
    //                 else{
    //                     result[i] = "B";
    //                 }
                    
    //             }
    //         }
    //     }
    // }
    return result;
}

const resultSchedules: string[] = LiveSchedele(Lives_A, Lives_B);

// resultSchedules.forEach(resultSchedule =>{
//     console.log(resultSchedule);
// })

