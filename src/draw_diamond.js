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

const main = function(){
  let shape = process.argv[2];
  let lineLength = +process.argv[3];
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;

  if (shape == "filled") {
    console.log(createFilledDiamond(lineLength));
  } else if (shape == "hollow") {
    console.log(createHollowDiamond(lineLength));
  } else {
    console.log(createAngledDiamond(lineLength));
  }
}

main();
