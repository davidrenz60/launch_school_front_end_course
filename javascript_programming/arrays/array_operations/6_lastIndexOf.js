// Write a function, lastIndexOf, that accepts two arguments: an Array and a value.
// The function should return the last index in the Array where the value is found, or -1 if the value is not found.

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}
