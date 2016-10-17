// build an implementation of Array.prototype.every()

function myOwnEvery(array, func) {
  var result = true;
  array.forEach(function(element) {
    if (!func(element)) {
      result = false;
      return;
    }
  });

  return result;
}

function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(!array[i])) {
      return false;
    }
  }

  return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc', 1], isAString);       // true
