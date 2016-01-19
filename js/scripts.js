var isTriangle = function(a, b, c) {
  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    return true;
  } else {
    return false;
  }
}

var isScalene = function(a, b, c) {
  if ((a !== b) && (a !== c) && (b !== c)) {
    return true;
  } else {
    return false;
  }
}

var isIsosceles = function(a, b, c) {
  if ((a !== b) && (a !== c) && (b !== c)) {
    return false;
  } else if (a === b && b === c) {
    return false;
  } else {
    return true;
  }
}

var isEquilateral = function(a, b, c) {
  if (a === b && b === c) {
    return true;
  } else {
    return false;
  }
}
