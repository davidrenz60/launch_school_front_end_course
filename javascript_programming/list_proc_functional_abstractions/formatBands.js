// Exercise: Formatting Bands
//
// We are given the following array for some popular bands:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];
// However, we need to process this data before we can use it:
//
// the band countries are wrong: all the bands should have country as "Canada"
// the band name should have all words capitalized.
// remove the dots in band names
// Write a function that can process the band array into its proper format:

function processBands(data) {
  return data.map(function(band) {
    var capitalizedName = capitalizePhrase(band.name);
    var formattedName = removeDotsInString(capitalizedName);

    return {
      name: formattedName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function removeDotsInString(string) {
  return string.replace(',', '');
}

function capitalizePhrase(phrase) {
  return phrase.split(' ').map(function(word) {
    return capitalizeWord(word);
  }).join(' ');
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

processBands(bands);

// should return:

// [ { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
