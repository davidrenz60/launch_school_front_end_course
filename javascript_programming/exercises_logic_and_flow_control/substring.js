// my solution
function substr(string, start, length) {
  var result = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = start; i < start + length; i++) {
    if (i >= string.length) {
      break;
    }
    result += string[i];
  }

  return result;
}

//given solution
function substr(string, start, length) {
  var result = '';
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;
    if (string[index] === undefined) {
      break;
    }
    result += string[index];
  }

  return result;
}
