const lib = require("./src/patternsLibrary.js");
let {createDiamondOfType , getPatternDetails } = lib;

const main = function(){
  let pattern = createDiamondOfType(getPatternDetails(process.argv));
  console.log(pattern);
}
main();



