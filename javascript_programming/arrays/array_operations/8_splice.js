// Write a function, splice, that accepts three arguments:
// an Array, a start index, and a number of values to remove.
// The function should remove values from the original Array,
// starting at the the first index and removing the specified number.
// The method should return the removed values in a new Array.

function splice(array, start, count) {
  var result = [];

  for (var i = start; i < array.length; i++) {
    if (i < start + count) {
      result.push(array[i]);
    }

    array[i] = array[i + count];
  }

  array.length = array.length - count;
  return result;
}
