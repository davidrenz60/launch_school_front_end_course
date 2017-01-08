// 140 characters limit, when limit is reached, change text to red

document.addEventListener('DOMContentLoaded', function(e) {
  var CHARLIMIT = 140;
  var textarea = document.querySelector('textarea');
  var counter = document.querySelector('.counter');
  var button = document.querySelector('button');

  function updateWordCount() {
    var wordCount = textarea.textLength;
    var remaining = CHARLIMIT - wordCount;
    var message = remaining + " characters remaining";
    var invalid = remaining < 0;

    counter.textContent = message;

    button.disabled = invalid;
    textarea.classList.toggle('invalid', invalid);
  }

  textarea.addEventListener('keyup', updateWordCount);

  updateWordCount();
});
