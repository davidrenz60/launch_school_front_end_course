// 1.

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(2, 5, 9));

// 2.

function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

// 3.

function average(values) {
  var total = 0;
  for (var i = 0, length = values.length; i < length; i++) {
    total += values[i];
  }
  return total / length;
}

// 4.

function sum(values) {
  var total = 0;
  for (var i = 0, length = values.length; i < length; i++) {
    total += values[i];
  }
  return total;
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([10, 15, 45, 30, 80]));

// 5.

var temperatures = [75, 80, 88, 92, 70];
console.log(average(temperatures));
