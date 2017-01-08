// Write a JavaScript Function that returns the DOM elements that represent the paragraph
// tags in the following HTML:

// <html>
//   <h1>On The River</h1>
//   <p>The sun is low</p>
//   <p>The waters flow</p>
// </html>

function findAllParagraphs() {
  var result = [];

  document.body.childNodes.forEach(function(node) {
    if (node instanceof HTMLParagraphElement) {
      result.push(node);
    }
  });

  return result;
}

findAllParagraphs();

// Given the following HTML, write a JavaScript Function
// that adds the CSS class "article-text" to every paragraph element:

// <html>
//   <div id="page1">
//     <div class="intro">
//       <p>The sun is low,</p>
//     </div>
//     <p>The waters flow,</p>
//   </div>
//   <div id="page2">
//     <div class="intro">
//       <p>My boat is dancing to and fro.</p>
//     </div>
//     <p>The eve is still,</p>
//   </div>
//   <div id="page3">
//     <div class="intro">
//       <p>Yet from the hill</p>
//     </div>
//     <p>The killdeer echoes loud and shrill.</p>
//   </div>
// </html>

function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add("article-text");
  }

  node.childNodes.forEach(function(child) {
    addClassToParagraphs(child);
  });
}

addClassToParagraphs(document.body);

//  rewrite the above function

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

function getElementsByTag(tag) {
  var result = []

  walk(document, function(node) {
    if (node.nodeName.toLowerCase() === tag) {
      result.push(tag);
    }
  });

  return result;
}

var paragraphs = getElementsByTag("p");
paragraphs.forEach(function(node) {
  node.classList.add("article-text");
});


//rewrite using built in getElementsByTagName function

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add("article-text");
}

// rewrite to change p's only included in <div class="intro">
var intros = document.getElementsByClassName("intro");
for (var i = 0; i < intros.length; i++) {
  var paragraphs = intros[i].getElementsByTagName("p");
  for (var j = 0; j < intros.length; i++) {
    paragraphs[j].classList.add("article-text");
  }
}

// rewrite using querySelector

var paragraphs = document.querySelectorAll('.intro p');
for (var i = 0; i < intros.length; i++) {
  paragraphs[i].classList.add("article-text");
}