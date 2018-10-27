let choice = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];
let pattern = "";

const generateLine = function(width,symbol){
  let eachLine = ""
  for(let widthIndex = 0 ; widthIndex <width ; widthIndex++){
    eachLine += symbol;
  }
  return eachLine;
}

const generateLineWithsuffix = function(width,symbol,suffix) {
  return generateLine(width,symbol) + suffix;
}

if(choice == "filled"){
  for(let line = 0;line < height ; line++){
    pattern += generateLineWithsuffix(width,"*","\n");
  }
  pattern += "\n";
}

if(choice == "empty"){
  pattern += generateLine(width,"*")+"\n";
  for(let line = 0;line < height-2 ; line++){
    pattern += "*" + generateLineWithsuffix(width-2," ","*\n");
  }
  pattern += generateLine(width,"*");
}

if(choice == "alternating"){
  for(let line = 1;line < height/2 ; line++){
    pattern += generateLineWithsuffix(width,"*","\n");
    pattern += generateLineWithsuffix(width,"-","\n");
  }
  if(height % 2 != 0){
    pattern += generateLine(width,"*");
  }
}
console.log(pattern);
