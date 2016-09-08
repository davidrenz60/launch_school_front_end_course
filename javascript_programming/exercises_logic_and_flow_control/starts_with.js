function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (searchString[i] !== string[i]) {
      return false;
    }
  }
  return true;
}
