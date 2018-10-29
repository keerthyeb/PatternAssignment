const lib = require("./src/patternsLibrary.js");
let {createDiamondOfType} = lib;

let diamondType = process.argv[2];
let row = +process.argv[3];

let pattern = createDiamondOfType(diamondType,row);
console.log(pattern);


