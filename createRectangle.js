const lib = require("./src/patternsLibrary.js");
let {createRectangleOfType} = lib;

let rectangleType = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

let pattern = createRectangleOfType(rectangleType,width,height);
console.log(pattern);


