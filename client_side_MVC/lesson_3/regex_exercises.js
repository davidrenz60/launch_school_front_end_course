// 1
// Using a regular expression, replace the first instance of "123" with "ABC" in the string "123, easy as 123" using the digit flag.

var str = "123, easy as 123";
console.log(str.replace(/\d+/, 'ABC'));

// 2
// Create a function that takes a string as an argument and returns a boolean
// indicating whether or not the string starts with an uppercase letter.

function startsWithUppercase(str) {
  return /^[A-Z]/.test(str);
}

console.log(startsWithUppercase('Apple')); // true
console.log(startsWithUppercase('apple')); // false

// 3
// Create a function that removes any space characters at the beginning and end of a string.

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

console.log(trim('  Hello  '));

// 4
// Using the string match method and the resulting array length,
// return the number of dollar sign characters ($) in the string "$ plus $$ equals $$$".

var msg = "$ plus $$ equals $$$"
console.log(msg.match(/\$/g).length); // 6

// 5
// Create a function that will check each of these strings and return a boolean
// indicating there is at least one 5 to 7 letter word in it. For our purposes,
// a word's letter count does not include numeric digits.

var passing_sentence = "The characters that specify repetition always follow the pattern to which they are being applied.";
var failing_sentence = "I am the 1337est";

function HasfiveToSevenLetterWord(str) {
  return /[A-Z]{5,7}/i.test(str);
}

console.log(HasfiveToSevenLetterWord(passing_sentence));
console.log(HasfiveToSevenLetterWord(failing_sentence));

// 6
// Given these two variables, turn query into a global regular expression
// and use it to test the source. Be sure to set any applicable flags to ensure the
// query finds a match.

var query = "Hen";
var source = "She'll be coming 'round the mountain when she comes";

var regex = new RegExp(query, 'i');
console.log(regex.test(source));

// 7
// Given the string "H%*e(ll)o" create a regular expression to pass in to the
// string's match method that will return an array of only the letters from the string.
// Then join the letters together to form a word.

var str = "H%*e(ll)o";
console.log(str.match(/\w/g).join(''));

// 8
// Using a back reference, create a regular expression that will check whether or not a string
// has a pair of single or double quotes.

function validQuotes(str) {
  var regexp = /(['"])[^'"]+\1/;
  return regexp.test(str);
}

console.log(validQuotes("'test single quotes'"));
console.log(validQuotes("\"test double quotes\""));
console.log(validQuotes("'mismatched quotes\""));

// 9
// Create a phone number regular expression that will test true for the string
// "(222) 555-1212" and false for "(222) 555-1212x150" and "1-(222) 555-1212"

function validPhoneNumber(str) {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(str);
}

console.log(validPhoneNumber("(222) 555-1212"));
console.log(validPhoneNumber("(222) 555-1212x150"));
console.log(validPhoneNumber("1-(222) 555-1212"));

// 10
// Create a new phone number regular expression that will test true for all three of the
// previously mentioned phone number strings.

function extendedValidPhoneNumber(str) {
  return /^\d?-?\(\d{3}\) \d{3}-\d{4}x?\d*$/.test(str);
}

console.log(extendedValidPhoneNumber("(222) 555-1212"));
console.log(extendedValidPhoneNumber("(222) 555-1212x150"));
console.log(extendedValidPhoneNumber("1-(222) 555-1212"));