// Write a function that returns a new array of the elements in odd positions of an array parameter.

function oddElementsOf(arr) {
  var result = [];

  for (var i = 1; i < arr.length; i+= 2) {
    result.push(arr[i]);
  }

  return result;
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits); // Returns [8, 16, 42]

algorithm:

// init. new result array
// loop through arr, starting at 1
//   increment by 2 up to arr.length
// push element to new array
// return new result array
