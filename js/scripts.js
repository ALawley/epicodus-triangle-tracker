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

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    if (isTriangle(a, b, c)) {
      if (isScalene(a, b, c)) {
        $('#triangle-type').text("scalene");
        $('#result').show();
      } else if (isIsosceles(a, b, c)) {
        $('#triangle-type').text("isosceles");
        $('#result').show();
      } else {
        $('#triangle-type').text("equilateral");
        $('#result').show();
      }
    } else {
      $('#triangle-type').text("not actually a triangle");
      $('#result').show();
    }

    event.preventDefault();
  });
});
