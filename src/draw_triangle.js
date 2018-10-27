let choice = process.argv[2];
let row = process.argv[3];
let pattern = "";

const generateSymbols = function(column,symbol){
  let line ="";
  for(columnIndex = 0; columnIndex < column ; columnIndex++){
    line += symbol;
  }
  return line;
}

if(choice == "left"){
  for(let rowIndex = 1; rowIndex <= row; rowIndex++){
    pattern += generateSymbols(rowIndex,"*")+"\n";
  }
}

if(choice == "right"){
  for(let rowIndex = row; rowIndex > 0; rowIndex--){
    pattern += generateSymbols(rowIndex-1," ");
    pattern += generateSymbols(row-rowIndex+1,"*")+"\n";
  }
}

console.log(pattern);
