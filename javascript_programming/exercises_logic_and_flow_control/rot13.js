function rot13(string) {
  var result = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (isUpperCase(charCode)) {
      charCode = ((charCode - 52) % 26) + 65;
    }

    if (isLowerCase(charCode)) {
      charCode = ((charCode - 84) % 26) + 97;
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

function isUpperCase(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function isLowerCase(charCode) {
  return (charCode >= 97 && charCode <= 122);
}
