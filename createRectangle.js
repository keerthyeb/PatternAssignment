const lib = require("./src/patternsLibrary.js");
let {createRectangleOfType , selectDimensionAndType } = lib;

const main = function(){
  let pattern = createRectangleOfType(selectDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();


