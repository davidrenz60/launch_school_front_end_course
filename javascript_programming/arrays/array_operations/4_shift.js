// Write a function, shift, that accepts one argument: an Array.
// The function should remove the first value from the beginning of the Array and return it.

function shift(array) {
  var first = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length -= 1;
  return first;
}
