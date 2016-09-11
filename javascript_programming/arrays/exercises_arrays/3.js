// Make an array of the numbers 1 through 5 in order.
// Then create a function that will return a new array with the values in reverse order.

var numbers = [1, 2, 3, 4, 5];

function reverse(array) {
  var result = [];
  var index = 0;

  for (var i = numbers.length -1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

console.log(reverse(numbers));
