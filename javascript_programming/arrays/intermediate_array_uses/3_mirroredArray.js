// Write a function that returns a new array
// that contains a combination of
// the existing array elements as-is and the array elements in reverse order.

function mirroredArray(arr) {
  var reversedArray = arr.slice().reverse();
  return arr.concat(reversedArray);
}
