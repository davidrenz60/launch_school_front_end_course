
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');
  var cursorInterval;
  var content = document.querySelector('.content');

  textField.addEventListener('click', function(e) {
    e.stopPropagation();

    textField.classList.add('focused');

    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', function() {
    clearInterval(cursorInterval);
    textField.classList.remove('focused', 'cursor');
  });

  document.addEventListener('keyup', function(e) {
    if (textField.classList.contains('focused')) {
      if (e.which === 8) {
      content.textContent = content.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
      content.textContent += e.key;
      }
    }
  });
});