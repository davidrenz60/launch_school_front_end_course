// Create an array with first names in it, like ['Steve', 'Martha', 'Pat'].
// Create a function called rollCall that will take an array of names and use a for loop to log each name in order.

var names = ['Steve', 'Martha', 'Pat'];

function rollCall(array) {
  for (var i = 0; i < array.length; i ++) {
    console.log(array[i]);
  }
}

rollCall(names);
