const lib = require("./src/patternsLibrary.js");
let {createDiamondOfType , patternDimensionAndType } = lib;

const main = function(){
  let pattern = createDiamondOfType(patternDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();



