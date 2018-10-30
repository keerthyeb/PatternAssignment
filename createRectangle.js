const lib = require("./src/patternsLibrary.js");
let {createRectangleOfType , patternDimensionAndType } = lib;

const main = function(){
  let pattern = createRectangleOfType(patternDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();


