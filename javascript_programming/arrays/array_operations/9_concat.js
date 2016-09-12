// Write a function, concat, that accepts two arguments: both Arrays.
// The function should return a new Array containing the values from each of the passed Arrays.
//
// You can use functions that were answers to previous exercises to complete this one.

function concat(array1, array2) {
  var result = [];

  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i]);
  }

  for (var i = 0; i < array2.length; i++) {
    result.push(array2[i]);
  }

  return result;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]
