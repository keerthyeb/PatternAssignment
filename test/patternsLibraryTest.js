const assert = require("assert");
const lib = require("./../src/patternsLibrary.js");
const {createRectangleOfType,
  createTriangleOfType,
  createDiamondOfType} = lib;

// test for createRectangleOfType
let line1 = "**";
let rectangle1 = [line1,line1].join("\n");
assert.deepEqual(createRectangleOfType("filled",2,2),rectangle1);

let line2 = "********************";
let rectangle2 = [line2,line2,line2,line2,line2,line2,line2].join("\n");
assert.deepEqual(createRectangleOfType("filled",20,7),rectangle2);

let line3 = "***";
let rectangle3 = [line3,line3,line3,line3].join("\n");
assert.deepEqual(createRectangleOfType("filled",3,4),rectangle3);


let line4 = "*                  *";
let rectangle4 = [line2,line4,line2].join("\n");
assert.deepEqual(createRectangleOfType("empty",20,3),rectangle4);

let line5 = "--------------------";
let rectangle5 = [line2,line5,line2,line5,line2,line5,line2].join("\n");
assert.deepEqual(createRectangleOfType("alternating",20,7),rectangle5);

console.log("Passed the createRectangleTest");

// test for createTriangleOfType

let triangleLeft_2  = "*\n";
triangleLeft_2     += "**";
assert.equal(createTriangleOfType("left", 2),triangleLeft_2);

let triangleLeft_4 = "*\n";
triangleLeft_4    += "**\n";
triangleLeft_4    += "***\n";
triangleLeft_4    += "****";
assert.equal(createTriangleOfType("left",4),triangleLeft_4);

let triangleRight_2 = " *\n";
triangleRight_2    += "**";
assert.equal(createTriangleOfType("right",2),triangleRight_2);

let triangleRight_4 = "   *\n";
triangleRight_4    += "  **\n";
triangleRight_4    += " ***\n";
triangleRight_4    += "****";
assert.equal(createTriangleOfType("right",4),triangleRight_4);

console.log("Passed the createTriangleTest");

let filledDiamond_3 = " * \n***\n * ";
assert.equal(createDiamondOfType("filled", 3), filledDiamond_3);

let filledDiamond_5 = "  *  \n *** \n*****\n *** \n  *  ";
assert.equal(createDiamondOfType("filled", 5), filledDiamond_5);

let hollowDiamond_3 = " * \n* *\n * ";
assert.equal(createDiamondOfType("hollow", 3), hollowDiamond_3);

let hollowDiamond_5 = "  *  \n * * \n*   *\n * * \n  *  ";
assert.equal(createDiamondOfType("hollow", 5), hollowDiamond_5);

let angledDiamond_3 = " * \n* *\n * ";
assert.equal(createDiamondOfType("angularHollow", 3), angledDiamond_3);

let angledDiamond_5 =   "  *  \n / \\ \n*   *\n \\ / \n  *  " ;
assert.equal(createDiamondOfType("angularHollow", 5), angledDiamond_5);

console.log("passed createDiamondTest");
