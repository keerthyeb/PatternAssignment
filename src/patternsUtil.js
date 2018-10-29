const repeatSpacedChars = function(lineLength, firstChar, middleChar, lastChar) {
  let text = firstChar;
  for (let start = 1; start <= lineLength - 2; start++) {
    text += middleChar;
  }
  text += lastChar;
  if (lineLength == 1) {
    text = "*";
  }
  return text;
}

const repeatCharacter = function(lineLength, character) {
  let text = "";
  for (let start = 1; start <= lineLength; start++) {
    text += character;
  }
  return text;
}

const generateLineWithsuffix = function(width,symbol,suffix) {
  return repeatCharacter(width,symbol) + suffix;
}

module.exports = { repeatCharacter, repeatSpacedChars, generateLineWithsuffix };
