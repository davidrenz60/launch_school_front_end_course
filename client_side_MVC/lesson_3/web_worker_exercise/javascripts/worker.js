function largestProduct(digitString, length) {
  var largest = 0;
  var currentProduct;
  var lastIndex = digitString.length - length;
  var substr;

  if (lastIndex <= 0) {
    return 0;
  }

  for (var i = 0; i <= lastIndex; i++) {
    substr = digitString.substr(i, length);

    if (/0/.test(substr)) {
      continue;
    }

    currentProduct = product(substr);

    if (currentProduct > largest) {
      largest = currentProduct;
    }
  }

  return largest;
}

function product(str) {
  return str.split('').reduce(function(a, b) {
    return +a * +b;
  });
}

onmessage = function(e) {
  var result = largestProduct(e.data[0], e.data[1]);
  postMessage(result);
};