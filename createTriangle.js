const lib = require("./src/patternsLibrary.js");
let { createTriangleOfType , getPatternDetails } = lib;

const main = function(){
  let pattern = createTriangleOfType(getPatternDetails(process.argv));
  console.log(pattern);
}
main();


