let row = "";
let symbol1 = ""
let symbol2 = ""
let counter = 0;
let size = 8;
let i = 0;
let j = 0;

// loop for all rows
for (i = 0; i < size; i += 1) { 
  
  // whether to start row with hash or space
  if (counter % 2 == 0) {
    symbol1 = "#";
    symbol2 = " ";
  } else {
    symbol1 = " ";
    symbol2 = "#";
  }
  
  // loop for individual row
  for (j = 0; j < size; j += 1) { 
    if (j % 2 == 0 ) {
      row += symbol1;
    } else {
      row += symbol2;
    }
  }
  
  // add eol, print, and reset
  row += "\n";
  console.log(row);
  row = "";
  counter += 1;
}
