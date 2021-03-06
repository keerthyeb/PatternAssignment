const {
  generateLine,
  repeatCharacter,
  generateLineWithSuffix 
} = require("./patternsUtil");

const selectDimensionAndType = function(patternDetails){
  return { type : patternDetails[0], dimensions : { width : +patternDetails[1] , height : +patternDetails[2] } };
}
 
const upperHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let diamond = [] ;
  for (let row = 1; row <= Math.ceil(lineLength / 2); row++) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    diamond.push(spaces + generateLine(count, firstChar, middleChar, lastChar) + spaces );
  }
  return diamond;
}

const lowerHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let diamond = [] ;
  for (let row = Math.ceil(lineLength / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    diamond.push(spaces + generateLine(count, firstChar, middleChar, lastChar) + spaces);
  }
  return diamond;
}

const createFilledDiamond = function(lineLength) {
  let lengthOfLine = lineLength;
  if(lengthOfLine % 2 == 0 ){
    lengthOfLine--;
  }
  let upperHalf = upperHalfDiamond(lengthOfLine, "*", "*", "*");
  let lowerHalf = lowerHalfDiamond(lengthOfLine, "*", "*", "*");
  return upperHalf.concat(lowerHalf).join("\n");
}

const createHollowDiamond = function(lineLength) {
  let lengthOfLine = lineLength;
  if(lengthOfLine % 2 == 0){
    lengthOfLine--;
  }
  let upperHalf = upperHalfDiamond(lengthOfLine, "*", " ", "*");
  let lowerHalf = lowerHalfDiamond(lengthOfLine, "*", " ", "*");
  return upperHalf.concat(lowerHalf).join("\n");
}

const createAngledDiamond = function(lineLength) {
  let lengthOfLine = lineLength;
  if( lengthOfLine % 2 == 0){
    lengthOfLine --;
  }
  let diamond = [] ;
  for (let row = 1; row < Math.ceil(lengthOfLine / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatCharacter((lengthOfLine - count) / 2, " ");
    diamond.push(spaces + generateLine(count, "/", " ", "\\") + spaces);
  }
  diamond.push(generateLine(lengthOfLine, "*", " ", "*"));
  let lowerHalf = lowerHalfDiamond(lengthOfLine, "\\", " ", "/");
  return diamond.concat(lowerHalf).join("\n");
}

const createDiamondOfType = function({ type , dimensions }){
  let diamondChoice = {filled : createFilledDiamond , hollow : createHollowDiamond , angularHollow : createAngledDiamond}
  return diamondChoice[type](dimensions.width);
}

const createFilledRectangle = function(width,height){
  let pattern = [] ;
  for(let line = 0;line < height ; line++){
    pattern.push(repeatCharacter(width,"*"));
  }
  return pattern.join("\n"); 
}

const createEmptyRectangle = function(width,height){
  let pattern = [] ;
  pattern.push(repeatCharacter(width,"*"));
  for(let line = 0;line < height-2 ; line++){
    pattern.push( "*" + repeatCharacter(width-2," ")+ "*" );
  }
  pattern.push(repeatCharacter(width,"*"));
  return pattern.join("\n");
}

const createAlternatingRectangle = function(width,height){
  let pattern = [] ;
  for(let line = 1;line < height/2 ; line++){
    pattern.push(repeatCharacter(width,"*"));
    pattern.push(repeatCharacter(width,"-"));
  }
  if(height % 2 != 0){
    pattern.push(repeatCharacter(width,"*"));
  }
  return pattern.join("\n");
}

const createRectangleOfType = function({type,dimensions}){
  let patternChoice = 
    { filled : createFilledRectangle, empty : createEmptyRectangle , alternating : createAlternatingRectangle};
  return patternChoice[type](dimensions.width,dimensions.height);

}

const createleftTriangle = function(row){
  let pattern = [] ;
  for(let rowIndex = 1; rowIndex <= row; rowIndex++){
    pattern.push(repeatCharacter(rowIndex,"*"));
  }
  return pattern.join("\n");
}

const createrightTriangle = function(row){
  let pattern = [] ;
  for(let rowIndex = row; rowIndex > 0; rowIndex--){
   let spaces =  repeatCharacter(rowIndex-1," ");
    pattern.push(spaces + repeatCharacter(row-rowIndex+1,"*"));
  }
  return  pattern.join("\n");
}

const createTriangleOfType = function({ type , dimensions } ){
  let triangleChoice =
    {left : createleftTriangle , right : createrightTriangle}
  return triangleChoice[type](dimensions.width);

}

module.exports = { selectDimensionAndType , 
                   createRectangleOfType ,
                   createTriangleOfType ,
                   createDiamondOfType 
                 };
