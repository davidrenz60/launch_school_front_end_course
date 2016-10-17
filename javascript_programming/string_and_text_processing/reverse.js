// Implement a function that takes a string as an argument and returns it in reverse.

function reverse(string) {
  return string.split('').reverse().join('');
}

function reverse(string) {
  result = '';

  for (var i = string.length - 1; i >= 0; i--) {
      result += string[i];
  }

  return result;
}

reverse('hello');               // returns "olleh"
reverse('The quick brown fox'); // returns "xof nworb kciuq ehT"
