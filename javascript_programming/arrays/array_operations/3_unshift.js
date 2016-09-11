// Write a function, unshift, that accepts two arguments: an Array and a value.
// The function should add the value to the beginning of the Array and return the new length of the array.

function unshift(array, value) {
  for (var i = array.length; i >= 0; i--) {
    array[i] = array[i -1];
  }

  array[0] = value;
  return array.length;
}
