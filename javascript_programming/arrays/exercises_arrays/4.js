// Create a function that will find the first instance of a value from within an array and returns the position of the value.

function findIndex(value, array) {
  var index = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

var letters = ['a', 'b', 'c', 'd'];

findIndex('b', letters); // 1
findIndex('e', letters); // -1
