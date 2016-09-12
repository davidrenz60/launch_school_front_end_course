// Write a function, join, that accepts two arguments: an Array and a String.
// The function should convert each value in the Array into a String,
// and join those values together using the second argument as a separator.

function join(array, string) {
  var result = '';

  for (var i = 0; i < array.length - 1; i++) {
    result += array[i].toString() + string;
  }

  result += array[array.length - 1];
  return result;
}
