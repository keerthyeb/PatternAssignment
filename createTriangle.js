const lib = require("./src/patternsLibrary.js");
let {createTriangleOfType} = lib;

let triangleType = process.argv[2];
let row = +process.argv[3];

let pattern = createTriangleOfType(triangleType,row);
console.log(pattern);


