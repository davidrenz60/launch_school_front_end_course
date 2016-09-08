function gcd(num1, num2) {
  var lowest = (num1 <= num2) ? num1 : num2;
  for (var i = lowest; i > 0; i-- ) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

function gcd(num1, num2) {
  var lowest = (num1 <= num2) ? num1 : num2;
  var highest = (num1 <= num2) ? num2 : num1;

  while(lowest !== 0) {
    var remainder = highest % lowest;
    highest = lowest;
    lowest = remainder;
  }
  return highest;
}

function gcd_group(array) {
  var divisor = array[0];
  for(var i = 1; i < array.length; i++) {
    divisor = gcd(divisor, array[i]);
  }
  return divisor;
}
