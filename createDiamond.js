const lib = require("./src/patternsLibrary.js");
let {createDiamondOfType , selectDimensionAndType } = lib;

const main = function(){
  let pattern = createDiamondOfType(selectDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();



