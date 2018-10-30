const repeatCharacter = function(lineLength, character) {
  if(lineLength < 0){
    lineLength = 0;
  }
  let characters = new Array(lineLength).fill(character).join("");
 return characters;
}

const repeatSpacedChars = function(lineLength, firstChar, middleChar, lastChar) {
  let text = firstChar + repeatCharacter(lineLength - 2, middleChar) +  lastChar;
  if (lineLength == 1) {
    text = "*";
  }
  return text;
}

const generateLineWithSuffix = function(width,symbol,Suffix) {
  return repeatCharacter(width,symbol) + Suffix;
}

module.exports = { repeatCharacter, repeatSpacedChars, generateLineWithSuffix };
