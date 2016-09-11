// Write a function that will take an array and return a string of all of the values in the same order as they are in the array.
// To do this, use a for loop to add each value to the end of a variable that starts off as an empty string, or ''.

function arrayToString(array) {
  var result = '';

  for (var i = 0; i < array.length; i++) {
    result += String(array[i]);
  }

  return result;
}

arr = [1, 2, 'a', 'b'];
arrayToString(arr);
