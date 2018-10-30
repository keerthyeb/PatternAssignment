const lib = require("../src/patternsUtil.js");
const assert = require("assert");
const {
  repeatCharacter,
  generateLine,
  generateLineWithSuffix
} = lib;

assert.equal(generateLine(1, "*", "*", "*"), "*");
assert.equal(generateLine(2, "*", "*", "*"), "**");
assert.equal(generateLine(3, "*", "*", "*"), "***");
assert.equal(generateLine(4, "*", "*", "*"), "****");
assert.equal(generateLine(5, "*", "*", "*"), "*****");

assert.equal(repeatCharacter(1, "*"), "*");
assert.equal(repeatCharacter(2, "*"), "**");
assert.equal(repeatCharacter(3, "*"), "***");
assert.equal(repeatCharacter(4, "*"), "****");
assert.equal(repeatCharacter(5, "*"), "*****");

assert.deepEqual(generateLineWithSuffix(2,"*","\n"), "**\n");
assert.deepEqual(generateLineWithSuffix(4,"-","*"), "----*");
assert.deepEqual(generateLineWithSuffix(5,"#","*"), "#####*");

console.log("test passed");


