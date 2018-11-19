const lib = require("./src/patternsLibrary.js");
let { createTriangleOfType , selectDimensionAndType } = lib;

const main = function(){
  let pattern = createTriangleOfType(selectDimensionAndType(process.argv.slice(2)));
  console.log(pattern);
}
main();


