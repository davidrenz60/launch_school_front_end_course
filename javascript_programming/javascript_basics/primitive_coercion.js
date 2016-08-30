// 1.
var x = '13';
var y = '9';

console.log(+x + y);

// 2.
console.log(x * y) // this will log 117, since * is not defined for strings
  // x will be coerced into a number

// 3.
var npa = 212,
var nxx = 555,
var num = 1212;

npa = npa + "",
nxx = nxx + "",
num = num += "";

console.log(npa + nxx + num);

// 4.
var npa = 212,
var nxx = 555,
var num = 1212;

console.log(String(npa) + String(nxx) + String(num));

// 5.

var bool = true;
var arr = [1, 2, 3];

console.log(bool.toString()); // "true"
console.log(arr.toString()); // "1, 2, 3"
