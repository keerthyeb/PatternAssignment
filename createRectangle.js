const lib = require("./src/patternsLibrary.js");
let {createRectangleOfType , getPatternDetails } = lib;

const main = function(){
  let pattern = createRectangleOfType(getPatternDetails(process.argv.slice(2)));
  console.log(pattern);
}
main();


