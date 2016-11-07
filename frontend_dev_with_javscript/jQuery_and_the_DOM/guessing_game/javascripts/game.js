$(function() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var guesses = 0;

  $('form').submit(function(e) {
    e.preventDefault();

    var message;
    var guess = +$('#guess').val();
    guesses++;

    if (guess === answer) {
      message = 'You win! It took you ' + guesses + ' guesses.';
    } else if (guess < answer) {
      message = 'My number is higher than ' + guess + '.';
    } else {
      message = 'My number is lower than ' + guess + '.';
    }

    $('p').text(message);
  });

  $('a').click(function(e) {
    e.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    $('p').text('Guess a number from 1 to 100');
  });
});
