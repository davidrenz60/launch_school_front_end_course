// Write a function that takes an array
// and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // Returns [1, 2, 4, 3, 5]
