function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

// change h1 color to red and font size to 48px
var heading = document.firstChild.childNodes[1].firstChild;
heading.style.color = 'red';
heading.style.fontSize = '48px';


// count p elements on the page
// var count = 0;
// walk(document, function(node) {
//   if (node.nodeName === "P") {
//     count ++;
//   }
// });

// console.log(count);


// retrieve the first word from each paragraph on the page
// var words = [];

// walk(document, function(node) {
//   if (node.nodeName === "P") {
//     var firstWord = node.textContent.trim().split(' ')[0];
//     words.push(firstWord);
//   }
// });

// console.log(words);


// add class of stanze to each p element, except the first one
// var first = true;
// walk(document, function(node) {
//   if (node.nodeName === "P") {
//     if (first) {
//       first = false;
//     } else {
//       node.className = "stanza";
//     }
//   }
// });


// use https://en.wikipedia.org/wiki/Polar_bear for following exercises

// determine how many images are on the page and how many are png format
// var images = [];
// walk(document, function(node) {
//   if (node.nodeName === "IMG") {
//     images.push(node);
//   }
// });

// var count = images.length;
// var pngs = images.filter(function(node) {
//   return node.getAttribute('src').match(/png$/);
// }).length;

// console.log(count);
// console.log(pngs);

// change all links to be red
// walk(document, function(node) {
//   if (node.nodeName === "A") {
//     node.style.color = 'red';
//   }
// });
