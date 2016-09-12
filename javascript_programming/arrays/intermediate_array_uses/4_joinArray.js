// Write a function that accepts an array and a string.
// The function should return a string of the array elements
// joined together with the string used to join the elements together.
// An array ["a", "b", "c] and a string "+" should return "a+b+c".
// If no joining string is passed, use an empty string.

function joinArray(arr, joiner) {
  return arr.join(joiner || '');
}

joinArray(['a', 'b', 'c'], '+'); // Returns "a+b+c"
joinArray([1, 4, 1, 5, 9, 2, 7]); // Returns "1415927"

algorithm:
create an empty result var ''

if separator = undefined, set it to '';
iterate through array,
i = 0 to arr.length

  if i > 0, add the separator

  add the arr[i] elements

  return result
