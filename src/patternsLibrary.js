const {
  repeatSpacedChars,
  repeatCharacter,
  generateLineWithSuffix 
} = require("./patternsUtil");

const getPatternDetails = function(patternDetails){
  return { type : patternDetails[0], dimensions : { width : patternDetails[1] , height : patternDetails[2] } };
}
 
const upperHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let diamond = "";
  for (let row = 1; row <= Math.ceil(lineLength / 2); row++) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    diamond += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return diamond;
}

const lowerHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let diamond = "";
  for (let row = Math.ceil(lineLength / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    diamond += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return diamond;
}

const createFilledDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let diamond = "";
  diamond += upperHalfDiamond(lineLength, "*", "*", "*");
  diamond += lowerHalfDiamond(lineLength, "*", "*", "*");
  return diamond.substr(0, diamond.length-1);
}

const createHollowDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let diamond = "";
  diamond += upperHalfDiamond(lineLength, "*", " ", "*");
  diamond += lowerHalfDiamond(lineLength, "*", " ", "*");
  return diamond.substr(0, diamond.length-1);
}

const createAngledDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let diamond = "";
  for (let row = 1; row < Math.ceil(lineLength / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatCharacter((lineLength - count) / 2, " ");
    diamond += spaces + repeatSpacedChars(count, "/", " ", "\\") + spaces + "\n";
  }
  diamond += repeatSpacedChars(lineLength, "*", " ", "*") + "\n";
  diamond += lowerHalfDiamond(lineLength, "\\", " ", "/");
  return diamond.substr(0,diamond.length-1);
}

const createDiamondOfType = function({ type , dimensions }){
  let diamondChoice = {filled : createFilledDiamond , hollow : createHollowDiamond , angularHollow : createAngledDiamond}
  return diamondChoice[type](dimensions.width);
}

const createFilledRectangle = function(width,height){
  let pattern ="";
  for(let line = 0;line < height ; line++){
    pattern += generateLineWithSuffix(width,"*","\n");
  }
  return pattern.substr(0,pattern.length-1); 
}

const createEmptyRectangle = function(width,height){
  let pattern ="";
  pattern += repeatCharacter(width,"*")+"\n";
  for(let line = 0;line < height-2 ; line++){
    pattern += "*" + generateLineWithSuffix(width-2," ","*\n");
  }
  return pattern += repeatCharacter(width,"*");
}

const createAlternatingRectangle = function(width,height){
  let pattern ="";
  for(let line = 1;line < height/2 ; line++){
    pattern += generateLineWithSuffix(width,"*","\n");
    pattern += generateLineWithSuffix(width,"-","\n");
  }
  if(height % 2 != 0){
    pattern += repeatCharacter(width,"*");
  }
  return pattern;
}

const createRectangleOfType = function({type,dimensions}){
  let patternChoice = 
    { filled : createFilledRectangle, empty : createEmptyRectangle , alternating : createAlternatingRectangle};
  return patternChoice[type](dimensions.width,dimensions.height);

}

const createleftTriangle = function(row){
  let pattern ="";
  for(let rowIndex = 1; rowIndex <= row; rowIndex++){
    pattern += repeatCharacter(rowIndex,"*")+"\n";
  }
  return pattern.substr(0,pattern.length-1);
}

const createrightTriangle = function(row){
  let pattern ="";
  for(let rowIndex = row; rowIndex > 0; rowIndex--){
    pattern += repeatCharacter(rowIndex-1," ");
    pattern += repeatCharacter(row-rowIndex+1,"*")+"\n";
  }
  return  pattern.substr(0,pattern.length-1);
}

const createTriangleOfType = function({ type , dimensions } ){
  let triangleChoice =
    {left : createleftTriangle , right : createrightTriangle}
  return triangleChoice[type](dimensions.width);

}

module.exports = { getPatternDetails , 
                   createRectangleOfType ,
                   createTriangleOfType ,
                   createDiamondOfType 
                 };
