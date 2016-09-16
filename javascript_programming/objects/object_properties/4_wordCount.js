// Write a function, wordCount, that takes a single String as an argument.
// The function should return an Object containing the count of how many times each word appears in the provided String.
// The Object's keys should be the words, and the value of each key should be how many ocurrances of that word there were.

function wordCount(str) {
  var count = {};
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    if (count[words[i]]) {
      count[words[i]]++;
    } else {
      count[words[i]] = 1;
    }
  }
  return count;
}

// given solution
function wordCount(text) {
  var count = {};
  var words = text.split(' ');
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}

wordCount('box car cat bag box');    // { box: 2, car: 1, cat: 1, bag: 1 }
