// Write a function that accepts two arrays
// and returns a new array whose even positions are from
// the first array and odd positions are from the second array.
// Assume both arrays are equal length.

function combinedArray(even, odd) {
  var result = [];
  var length = even.length + odd.length;

  for (var i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
}
