// Write a function that will accept two arguments,
// an array and an integer representing the position of the element to be returned by the function.
// What happens when we pass an index greater than the length of the array? What about a negative number?


// this will return undefined when index argument is out of range
function nthElementOf(arr, index) {
  return arr[index];
}

// note if a negative value is set in an array, it can be accessed
// due to the fact that arrays are objects

var digits = [4, 8, 15, 16, 23, 42];
digits[-1] = -42;

nthElementOf(digits, -1);  // -42
