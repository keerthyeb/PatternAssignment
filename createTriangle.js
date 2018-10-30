const lib = require("./src/patternsLibrary.js");
let { createTriangleOfType , patternDimensionAndType } = lib;

const main = function(){
  let pattern = createTriangleOfType(patternDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();


