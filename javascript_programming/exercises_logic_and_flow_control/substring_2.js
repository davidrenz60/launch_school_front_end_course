function substring(string, start, end) {
  var result = '';
  var temp;

  if (end === undefined) {
    end = string.length;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (var i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}
