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
