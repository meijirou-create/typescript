"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf-8").trim();
//console.log(input.indexOf("--"));
// if(input.indexOf("--") === -1){
// }
console.log(input.replace(/-+/g, '-'));
