const repeatCharacter = function(lineLength, character) {
  lineLength = Math.max(0,lineLength);
  return  new Array(lineLength).fill(character).join("");
}

const generateLine = function(lineLength, firstChar, middleChar, lastChar) {
  let text = firstChar + repeatCharacter(lineLength - 2, middleChar) +  lastChar;
  if (lineLength == 1) {
    text = "*";
  }
  return text;
}

const generateLineWithSuffix = function(width,symbol,suffix) {
  return repeatCharacter(width,symbol) + suffix;
}

module.exports = { repeatCharacter, generateLine, generateLineWithSuffix };
