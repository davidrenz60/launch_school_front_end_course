// build an implementation of Array.prototype.reduce()

function myReduce(array, func, initial) {
  var result, index;
  if (initial) {
    result = initial;
    index = 0;
  } else {
    result = array[0];
    index = 1;
  }

  array.slice(index).forEach(function(element) {
    result = func(result, element);
  });

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1
