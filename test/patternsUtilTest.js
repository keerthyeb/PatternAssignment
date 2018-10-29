const lib = require("../src/patternsUtil.js");
const assert = require("assert");
const {
  repeatCharacter,
  repeatSpacedChars,
  generateLineWithsuffix
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

assert.deepEqual(generateLineWithsuffix(2,"*","\n"), "**\n");
assert.deepEqual(generateLineWithsuffix(4,"-","*"), "----*");
assert.deepEqual(generateLineWithsuffix(5,"#","*"), "#####*");

console.log("test passed");


