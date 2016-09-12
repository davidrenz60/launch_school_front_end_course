// Using the array sort method,
// create a function that accepts an array of numbers
// and returns a new array of the numbers sorted in descending order.

function sortDescending(arr) {
  var newArray = arr.slice();
   return newArray.sort(function(a,b) {
     return b - a;
  });
}
