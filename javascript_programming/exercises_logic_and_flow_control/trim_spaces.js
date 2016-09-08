function trimLeft(string) {
  var result = '';
  var copy = false;

  for (var i = 0; i < string.length; i++) {

    if (string[i] !== ' ') {
      copy = true;
    }

    if (copy) {
      result += string[i];
    }
  }
  return result;
}

function trimRight(string) {
  var result = '';
  var copy = false;

  for (var i = string.length - 1; i >= 0; i--) {

    if (string[i] !== ' ') {
      copy = true;
    }

    if (copy) {
      result = string[i] + result;
    }
  }
  return result;
}

function trim(string) {
  return trimLeft(trimRight(string));
}
