function repeat(string, times) {
  var result = '';

  if (isNaN(times) || times < 0) {
    return undefined;
  }

  for (var i = 1; i <= times; i++) {
    result += string;
  }

  return result;
}
