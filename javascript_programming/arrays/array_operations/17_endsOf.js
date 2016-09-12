// Write a function that accepts two arrays as arguments and returns
// an array with the first element in the first array as well as the last element in the second array.

function endsOf(beginningArr, endingArr) {
  var first = [beginningArr[0]];
  var last = [endingArr[endingArr.length -1]];
  return first.concat(last);
}

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length -1]];
}
