const lib = require("./src/patternsLibrary.js");
let { createTriangleOfType , getPatternDetails } = lib;

const main = function(){
  let pattern = createTriangleOfType(getPatternDetails(process.argv.slice(2)));
  console.log(pattern);
}
main();


