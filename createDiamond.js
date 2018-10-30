const lib = require("./src/patternsLibrary.js");
let {createDiamondOfType , getPatternDetails } = lib;

const main = function(){
  let pattern = createDiamondOfType(getPatternDetails(process.argv.slice(2)));
  console.log(pattern);
}
main();



