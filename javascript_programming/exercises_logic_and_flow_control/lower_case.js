function toLowerCase(string) {
  var result = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }

    result += String.fromCharCode(charCode);
  }
  return result;
}
