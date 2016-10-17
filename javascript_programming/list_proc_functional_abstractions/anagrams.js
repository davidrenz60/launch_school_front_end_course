// Exercise: Anagrams
//
// Write a Function that, when called with a word and a list of possible anagrams,
// selects the correct sublist that contains the anagrams of the word.
//
// For example, given the word "listen" and a list of candidates like
// "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets".

function anagram(word, list) {
  return list.filter(function(candidate) {
    return isAnagram(word, candidate);
  });
}

function isAnagram(source, target) {
  var arrangedSource = source.split('').sort().join('');
  var arrangedTarget = target.split('').sort().join('');

  return arrangedSource === arrangedTarget;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']); // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);  // [ "enlist", "inlets" ]
