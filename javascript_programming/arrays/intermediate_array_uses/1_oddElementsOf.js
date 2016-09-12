// Write a function that returns a new array of the elements in odd positions of an array parameter.

function oddElementsOf(arr) {
  var result = [];

  for (var i = 1; i < arr.length; i+= 2) {
    result.push(arr[i]);
  }

  return result;
}
