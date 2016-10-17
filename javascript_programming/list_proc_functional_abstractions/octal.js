// Exercise: Octal
//
// Write a Function, octalToDecimal, that implements octal to decimal conversion.
// When invoked with a String that contains a representation of an octal number,
// the Function should return a decimal version of that value as a Number.
// Implement the conversion yourself. Do not use something else to perform the conversion for you.
//
// Decimal, the numbering system we're most familiar with, is a base-10 system.
//
// A number 233 in base 10 notation can be understood as a linear combination of powers of 10:
//
// The rightmost digit gets multiplied by 100 = 1
// The next number gets multiplied by 101 = 10
// ...
// The nth number gets multiplied by 10n-1.
// All these values are summed.
// Here is an example:
//
//   233                       // decimal
// = 2*10^2 + 3*10^1 + 3*10^0
// = 2*100  + 3*10   + 3*1
// Octal, is similar, but uses powers of 8 rather than powers of 10 (and is called a base-8 system as a result):
//
//   233                       // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                       // decimal

function octalToDecimal(string) {
  return string.split('').reverse().map(function(digit, index) {
    return Number(digit) * Math.pow(8, index);
  }).reduce(function(sum, num) {
    return sum + num;
  });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
