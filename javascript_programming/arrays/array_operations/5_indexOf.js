// Write a function, indexOf, that accepts two arguments: an Array and a value.
// The function should return the first index in the Array where the value is found, or -1 if the value is not found.

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  
  return -1;
}
