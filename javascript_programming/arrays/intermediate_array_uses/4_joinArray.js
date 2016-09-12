// Write a function that accepts an array and a string.
// The function should return a string of the array elements
// joined together with the string used to join the elements together.
// An array ["a", "b", "c] and a string "+" should return "a+b+c".
// If no joining string is passed, use an empty string.

function joinArray(arr, joiner) {
  return arr.join(joiner || '');
}
