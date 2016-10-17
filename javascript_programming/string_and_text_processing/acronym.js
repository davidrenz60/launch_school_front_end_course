// Acronym
//
// Write a function to generate acronyms based on a given string.
// For example, for "Portable Network Graphics", the program should return "PNG".
// Count compound words (words connected with a dash) as separate words.

function acronym(string) {
  wordArray = string.split(/[ -]/);

  return wordArray.map(function(word) {
    return word[0].toUpperCase;
  }).join('');
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"
