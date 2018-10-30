const assert = require("assert");
const lib = require("./../src/patternsLibrary.js");
const {
  createRectangleOfType,
  createTriangleOfType,
  createDiamondOfType,
  getPatternDetails
} = lib;

assert.deepEqual(getPatternDetails([ "filled", "5", "3"]), { type : "filled", dimensions : { width : 5, height :3 }});
assert.deepEqual(getPatternDetails([ "hollow", "5", "3"]), { type : "hollow", dimensions : { width : 5, height :3 }});
assert.deepEqual(getPatternDetails([ "angled", "5", "3"]), { type : "angled", dimensions : { width : 5, height :3 }});
assert.deepEqual(getPatternDetails([ "alternating", "5", "3"]), { type : "alternating", dimensions : { width : 5, height :3 }});
assert.deepEqual(getPatternDetails([ "empty", "5", "3"]), { type : "empty", dimensions : { width : 5, height :3 }});

// test for createRectangleOfType

let filledRectangle_5x5  = "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****";
assert.equal(createRectangleOfType( {type : 'filled', dimensions : { width : 5 , height : 5 }} ),filledRectangle_5x5);

let filledRectangle_1x1 = "*";
assert.deepEqual(createRectangleOfType( { type : "filled", dimensions : { width : 1 , height : 1 }}),filledRectangle_1x1);

let filledRectangle_2x2 = "**\n";
filledRectangle_2x2    += "**"
assert.deepEqual(createRectangleOfType( { type : "filled", dimensions : { width : 2 , height : 2 }}) ,filledRectangle_2x2);

let filledRectangle_20x7 = "********************\n";
  filledRectangle_20x7  += "********************\n";
  filledRectangle_20x7  += "********************\n";
  filledRectangle_20x7  += "********************\n";
  filledRectangle_20x7  += "********************\n";
  filledRectangle_20x7  += "********************\n";
 filledRectangle_20x7   += "********************";
assert.deepEqual(createRectangleOfType( { type : "filled" ,dimensions : { width : 20 , height : 7 }}) ,filledRectangle_20x7);

let filledRectangle_3x3 = "***\n";
    filledRectangle_3x3+= "***"
assert.deepEqual(createRectangleOfType( { type : "filled", dimensions : { width : 3 , height : 2 }}) ,filledRectangle_3x3);


let emptyRectangle_4x4  = "********************\n"
    emptyRectangle_4x4 += "*                  *\n";
    emptyRectangle_4x4 += "********************";
assert.deepEqual(createRectangleOfType( { type : "empty" , dimensions : { width : 20 , height : 3 }}) ,emptyRectangle_4x4);

let alternateRectangle_3x3  = "***\n";
alternateRectangle_3x3     += "---\n";
alternateRectangle_3x3     += "***";
assert.equal(createRectangleOfType( { type : "alternating" ,  dimensions : { width : 3 , height : 3 }}),alternateRectangle_3x3);

let alternateRectangle_20x7      = "********************\n";
    alternateRectangle_20x7     += "--------------------\n";
    alternateRectangle_20x7     += "********************\n";
    alternateRectangle_20x7     += "--------------------\n";
    alternateRectangle_20x7     += "********************\n";
    alternateRectangle_20x7     += "--------------------\n";
    alternateRectangle_20x7     += "********************";
assert.deepEqual(createRectangleOfType( { type : "alternating" , dimensions : { width : 20 , height : 7 }}) ,alternateRectangle_20x7);

console.log("Passed the createRectangleTest");

// test for createTriangleOfType

let triangleLeft_2  = "*\n";
triangleLeft_2     += "**";
assert.equal(createTriangleOfType( { type : "left" , dimensions : { width :  2 }} ),triangleLeft_2);

let triangleLeft_0 = "";
assert.deepEqual(createTriangleOfType( { type : "left" , dimensions : { width : 0 }} ),triangleLeft_0);

let triangleLeft_1 = "*";
assert.deepEqual(createTriangleOfType( { type : "left" , dimensions : { width : 1 }}),triangleLeft_1);

let triangleRight_1 = "*";
assert.deepEqual(createTriangleOfType( { type : "right" , dimensions : { width : 1 }}),triangleRight_1);

let triangleLeft_4 = "*\n";
triangleLeft_4    += "**\n";
triangleLeft_4    += "***\n";
triangleLeft_4    += "****";
assert.equal(createTriangleOfType( { type : "left" , dimensions : { width : 4 }} ),triangleLeft_4);

let triangleRight_2 = " *\n";
triangleRight_2    += "**";
assert.equal(createTriangleOfType( { type : "right" , dimensions : { width : 2 }} ),triangleRight_2);

let triangleRight_4 = "   *\n";
triangleRight_4    += "  **\n";
triangleRight_4    += " ***\n";
triangleRight_4    += "****";
assert.equal(createTriangleOfType( { type : "right" , dimensions : { width : 4 }} ),triangleRight_4);

console.log("Passed the createTriangleTest");

 // test for createDiamondOfType

let hollowDiamond_0 = "";
assert.deepEqual(createDiamondOfType({ type : "hollow" , dimensions : { width : 0 }} ), hollowDiamond_0);

let filledDiamond_3 = " * \n";
filledDiamond_3    += "***\n";
filledDiamond_3    += " * ";
assert.equal(createDiamondOfType( { type : "filled" , dimensions : { width : 3 }} ), filledDiamond_3);

let filledDiamond_5 = "  *  \n";
filledDiamond_5    += " *** \n";
filledDiamond_5    += "*****\n";
filledDiamond_5    += " *** \n";
filledDiamond_5    += "  *  ";
assert.equal(createDiamondOfType( { type : "filled" , dimensions : { width : 5 }} ), filledDiamond_5);

let hollowDiamond_3 = " * \n";
hollowDiamond_3    += "* *\n";
hollowDiamond_3    += " * ";
assert.equal(createDiamondOfType( { type : "hollow" , dimensions : { width : 3 }} ), hollowDiamond_3);

let hollowDiamond_5 = "  *  \n";
hollowDiamond_5    += " * * \n";
hollowDiamond_5    += "*   *\n"
hollowDiamond_5    += " * * \n";
hollowDiamond_5    += "  *  ";
assert.equal(createDiamondOfType( { type : "hollow" , dimensions : { width : 5 }} ), hollowDiamond_5);

let angledDiamond_1 = "*";
assert.deepEqual(createDiamondOfType( { type : "angularHollow", dimensions : { width : 1 }}), angledDiamond_1 );

let angledDiamond_3 = " * \n";
angledDiamond_3    += "* *\n";
angledDiamond_3    += " * ";
assert.equal(createDiamondOfType( { type : "angularHollow" , dimensions : { width : 3 }} ), angledDiamond_3);

let angledDiamond_5 = "  *  \n";
angledDiamond_5    += " / \\ \n";
angledDiamond_5    += "*   *\n";
angledDiamond_5    += " \\ / \n";
angledDiamond_5    += "  *  ";
assert.equal(createDiamondOfType( { type : "angularHollow" , dimensions : { width : 5 }} ), angledDiamond_5);

console.log("passed createDiamondTest");
