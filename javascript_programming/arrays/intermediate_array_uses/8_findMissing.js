// Write a function that takes a sorted array of integers as an argument,
// and returns an array that includes all of the missing integers (in order)
// between the first and last elements of the argument.

function missing(arr) {
  var result = [];
  var first = arr[0];
  var last = arr[arr.length - 1];

  for (var i = first; i < last; i++) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  }

  return result;
}
