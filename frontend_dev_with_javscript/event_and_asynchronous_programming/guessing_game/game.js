function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener('DOMContentLoaded', function() {
  var answer;
  var guesses;
  var input = document.querySelector('input');
  var form = document.querySelector('form');
  var p = document.querySelector('p');
  var link = document.querySelector('a');


  function newGame() {
    answer = randomNumber();
    guesses = 0;
    p.textContent = "Guess a number from 1 to 100";
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var guess = parseInt(input.value, 10);
    var message;
    guesses++;

    if (guess === answer) {
      message = "You're right! It took you " + guesses + " guesses.";
    } else if (guess > answer) {
      message = 'The number is lower than ' + guess;
    } else if (guess < answer) {
      message = 'The number is greater  than ' + guess;
    }

    p.textContent = message;
  });

  link.addEventListener('click', function(e) {
    e.preventDefault();
    newGame();
  });

  newGame();
});