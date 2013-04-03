var currentInput = [];

var currentOutputLine = "";

function print() {
  for (var c=0;c<arguments.length;c++) {
    if (c > 0) {
      currentOutputLine += " ";
    }
    if (typeof(arguments[c]) == "object") {
      if (Arrays.isArray(arguments[c])) {
        for (var d=0;d<arguments[c].length;d++) {
          if (d > 0) {
            currentOutputLine += " ";
          }
          currentOutputLine += arguments[c][d];
        }
      } else {
        currentOutputLine += arguments[c];
      }
    } else {
      currentOutputLine += arguments[c];
    }
  }
}

function println() {
  print.apply(null, arguments);
  currentOutputLine += "\n";
}


function getOutputLine() {
  return currentOutputLine;
}

function resetOutputLine() {
  currentOutputLine = '';
}











function readLine() {
  return currentInput.shift();
}

function readInt() {
  return parseInt(readLine());
}

function readStrings() {
  return readLine().split(' ');
  var returnValue = [];
  for (var c=0;c<parts.length;c++) {
    returnValue.push(parseInt(parts[c]));
  }
  
  return returnValue;
}

function readInts() {
  var parts = readStrings();
  var returnValue = [];
  for (var c=0;c<parts.length;c++) {
    returnValue.push(parseInt(parts[c]));
  }
  
  return returnValue;
}

function readFloats() {
  var parts = readStrings();
  var returnValue = [];
  for (var c=0;c<parts.length;c++) {
    returnValue.push(parseFloat(parts[c]));
  }
  
  return returnValue;
}

function smartRead(firstIsCount) {
  var parts = readStrings();
  
  var total = parts.length;
  
  if (typeof firstIsCount == "undefined") {
    var firstNumber = parseInt(parts[0]);
    if ((total > 1) && 
        (!isNaN(firstNumber))&&
        ((total - 1)%firstNumber == 0)
        ) {
      isFirstCount = true;
    }
  }
  if (isFirstCount) {
    total = parseInt(parts.shift());
  }
  var perGroup = Math.floor(parts.length / total);
  for (var c=0;c<total;c++) {
    var resultPart;
    if (perGroup > 1) {
      resultPart = [];
    }
    for (var d=0;d<perGroup;d++) {
      var newPart = parts[c*perGroup+d];
      if (newPart.indexOf('.') > -1) {
        if (!isNaN(parseFloat(newPart))) {
          newPart = parseFloat(newPart);
        }
      } else {
        if (!isNaN(parseInt(newPart))) {
          newPart = parseInt(newPart);
        }
      }
      if (perGroup > 1) {
        resultPart.push(newPart);
      } else {
        parts[c*perGroup+d] = newPart;
      }
    }
    if (perGroup > 1) {
      parts[c] = resultPart;
    }
  }
  
  parts.length = total;

  return parts;
}

