// Write a function, slice, that accepts three arguments: an Array, a start index, and an end index.
// The function should return a new Array that contains values from the original Array,
// starting at the the first index and up to but not including the second index.
// The original Array should not be modified.

function slice(array, start, end) {
  var result = [];

  for (var i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}
