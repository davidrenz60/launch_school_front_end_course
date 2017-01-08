// refer to https://en.wikipedia.org/wiki/Polar_bear

// find how many words are in each h2 on the page

var headings = document.querySelectorAll('h2');
var headingsArray = Array.prototype.slice.call(headings);
var wordCounts = headingsArray.map(function(node) {
  return node.textContent.split(' ').length;
});

console.log(wordCounts);

// use 3 different DOM methods to retrieve a reference to the DOM object
// that represents the table of contents div

document.querySelectorAll('#toc');
document.getElementsById('toc');
document.getElementsByClassName('toc')[0];
document.querySelectorAll('.toc')[0];

// color every other link on the page green
var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i+= 2) {
  links[i].style.color = 'green';
}

// retrieve text of every thumbnail caption on the page
var captions = document.querySelectorAll('.thumbcaption');
var captionsArray = Array.prototype.slice.call(captions);

captionsArray.map(function(node) {
  return node.textContent.trim();
});

// return an object of the taxonomic ranks based on the given table
var keys = ['Domain', 'Kingdom', 'Phylum', 'Class', 'Order', 'Family',
            'Genus', 'Species'];

var ranks = {};

var tds = document.querySelectorAll('.infobox td');
for (var i = 0; i < tds.length; i++) {
  var cell = tds[i];

  keys.forEach(function(key) {
    if (cell.textContent.indexOf(key) !== -1) {
      var value = tds[i + 1].textContent;
      ranks[key] = value;
    }
  });
}


