// Write a function to return the last n elements as a new array.
// if length is longer than array length, return whole array

function lastNOf(arr, length) {
  var index = arr.length - length;
  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}
