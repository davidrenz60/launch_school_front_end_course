function indexOf(firstString, secondString) {
  var length = firstString.length - secondString.length;

  for (var i = 0; i <= length; i++) {
    var matches = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matches++;
      } else {
        break;
      }

    }
    if (matches === secondString.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var length = firstString.length - secondString.length;

  for (var i = length; i >= 0; i--) {
    var matches = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matches++;
      } else {
        break;
      }
    }

    if (matches === secondString.length) {
      return i;
    }
  }

  return -1;
}
