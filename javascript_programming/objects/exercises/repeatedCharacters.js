// Implement a function that takes a string as an argument and returns an object containing the count of repeated characters.

// Note that the repeatedCharacters function is not just about counting the numbers of times a character repeats.
// It counts and returns only the characters that have a count of 2 or more. Also, it ignores cases when counting characters.

function repeatedCharacters(string) {
  string = string.toLowerCase();
  var charCount = {};

  for (var i = 0; i < string.length; i++) {
    if (!charCount[string[i]]) {
      charCount[string[i]] = 0;
    }

    charCount[string[i]] += 1;
  }

  for (var key in charCount) {
    if (charCount[key] < 2)
      delete charCount[key];
  }

  return charCount;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
