// Write a function that accepts an array of arrays and
// returns a new array containing the sums of each of the sub arrays.

function matrixSums(arr) {
  var sums = [];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }

    sums.push(sum);
  }

  return sums;
}
