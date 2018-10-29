const assert = require("assert");
const lib = require("./../src/patternsLibrary.js");
const {
  createRectangleOfType,
  createTriangleOfType,
  createDiamondOfType,
  getPatternDetails
} = lib;

assert.deepEqual(getPatternDetails([,, "filled", "5", "3"]), { type : "filled", width : 5, height :3 });
assert.deepEqual(getPatternDetails([,, "hollow", "5", "3"]), { type : "hollow", width : 5, height :3 });
assert.deepEqual(getPatternDetails([,, "angled", "5", "3"]), { type : "angled", width : 5, height :3 });
assert.deepEqual(getPatternDetails([,, "alternating", "5", "3"]), { type : "alternating", width : 5, height :3 });
assert.deepEqual(getPatternDetails([,, "empty", "5", "3"]), { type : "empty", width : 5, height :3 });

// test for createRectangleOfType
let line1 = "**";
let rectangle1 = [line1,line1].join("\n");
assert.deepEqual(createRectangleOfType( { type : "filled", width : 2 , height : 2 }) ,rectangle1);

let line2 = "********************";
let rectangle2 = [line2,line2,line2,line2,line2,line2,line2].join("\n");
assert.deepEqual(createRectangleOfType( { type : "filled" ,width : 20 , height : 7 }) ,rectangle2);

let line3 = "***";
let rectangle3 = [line3,line3,line3,line3].join("\n");
assert.deepEqual(createRectangleOfType( { type : "filled", width : 3 , height : 4 }) ,rectangle3);


let line4 = "*                  *";
let rectangle4 = [line2,line4,line2].join("\n");
assert.deepEqual(createRectangleOfType( { type : "empty" , width : 20 , height : 3 }) ,rectangle4);

let line5 = "--------------------";
let rectangle5 = [line2,line5,line2,line5,line2,line5,line2].join("\n");
assert.deepEqual(createRectangleOfType( { type : "alternating" , width : 20 , height : 7 }) ,rectangle5);

console.log("Passed the createRectangleTest");

// test for createTriangleOfType

let triangleLeft_2  = "*\n";
triangleLeft_2     += "**";
assert.equal(createTriangleOfType( { type : "left" , width :  2 } ),triangleLeft_2);

let triangleLeft_4 = "*\n";
triangleLeft_4    += "**\n";
triangleLeft_4    += "***\n";
triangleLeft_4    += "****";
assert.equal(createTriangleOfType( { type : "left" , width : 4 } ),triangleLeft_4);

let triangleRight_2 = " *\n";
triangleRight_2    += "**";
assert.equal(createTriangleOfType( { type : "right" , width : 2 } ),triangleRight_2);

let triangleRight_4 = "   *\n";
triangleRight_4    += "  **\n";
triangleRight_4    += " ***\n";
triangleRight_4    += "****";
assert.equal(createTriangleOfType( { type : "right" , width : 4 } ),triangleRight_4);

console.log("Passed the createTriangleTest");

let filledDiamond_3 = " * \n***\n * ";
assert.equal(createDiamondOfType( { type : "filled" , width : 3 } ), filledDiamond_3);

let filledDiamond_5 = "  *  \n *** \n*****\n *** \n  *  ";
assert.equal(createDiamondOfType( { type : "filled" , width : 5 } ), filledDiamond_5);

let hollowDiamond_3 = " * \n* *\n * ";
assert.equal(createDiamondOfType( { type : "hollow" , width : 3 } ), hollowDiamond_3);

let hollowDiamond_5 = "  *  \n * * \n*   *\n * * \n  *  ";
assert.equal(createDiamondOfType( { type : "hollow" , width : 5 } ), hollowDiamond_5);

let angledDiamond_3 = " * \n* *\n * ";
assert.equal(createDiamondOfType( { type : "angularHollow" , width : 3 } ), angledDiamond_3);

let angledDiamond_5 =   "  *  \n / \\ \n*   *\n \\ / \n  *  " ;
assert.equal(createDiamondOfType( { type : "angularHollow" , width : 5 } ), angledDiamond_5);

console.log("passed createDiamondTest");
