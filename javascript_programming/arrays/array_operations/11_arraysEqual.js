// Write a function, arraysEqual, that takes two Arrays as arguments.
// The function should return true if the Arrays contain the same values, and false if they do not.

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
