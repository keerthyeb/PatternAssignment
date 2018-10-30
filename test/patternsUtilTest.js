const lib = require("../src/patternsUtil.js");
const assert = require("assert");
const {
  repeatCharacter,
  repeatSpacedChars,
  generateLineWithSuffix
} = lib;

assert.equal(repeatSpacedChars(1, "*", "*", "*"), "*");
assert.equal(repeatSpacedChars(2, "*", "*", "*"), "**");
assert.equal(repeatSpacedChars(3, "*", "*", "*"), "***");
assert.equal(repeatSpacedChars(4, "*", "*", "*"), "****");
assert.equal(repeatSpacedChars(5, "*", "*", "*"), "*****");

assert.equal(repeatCharacter(1, "*"), "*");
assert.equal(repeatCharacter(2, "*"), "**");
assert.equal(repeatCharacter(3, "*"), "***");
assert.equal(repeatCharacter(4, "*"), "****");
assert.equal(repeatCharacter(5, "*"), "*****");

assert.deepEqual(generateLineWithSuffix(2,"*","\n"), "**\n");
assert.deepEqual(generateLineWithSuffix(4,"-","*"), "----*");
assert.deepEqual(generateLineWithSuffix(5,"#","*"), "#####*");

console.log("test passed");


