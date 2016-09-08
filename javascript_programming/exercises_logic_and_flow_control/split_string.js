function splitString(string, delimiter) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(result);
      result = '';
    } else {
      result += string[i];
    }
  }

   if (result) {
     console.log(result);
   }
}
