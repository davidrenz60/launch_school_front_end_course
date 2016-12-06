function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

$(function() {
  var $form = $('form');
  var $guess = $('#guess');
  var $p = $('p');
  var $a = $('a');

  var Game = {
  displayMessage: function(text) {
    $p.text(text);
  },

  processGuess: function(e) {
    e.preventDefault();

    if (this.gameOver) {
      return;
    }

    var message;
    var guess = +$guess.val();
    this.guesses++;

    if (guess === this.answer) {
      message = 'You win! It took you ' + this.guesses + ' guesses.';
      this.gameOver = true;
      this.unbind();
    } else if (guess < this.answer) {
      message = 'My number is higher than ' + guess + '.';
    } else {
      message = 'My number is lower than ' + guess + '.';
    }

    this.displayMessage(message);
    $guess.val('');
  },

  bind: function() {
    $form.on('submit.game', this.processGuess.bind(this));
  },

  unbind: function() {
    $form.off('.game');
  },

  init: function() {
    this.guesses = 0;
    this.answer = randomNumber();
    this.bind();
    this.displayMessage('Guess a number from 1 to 100');
    this.gameOver = false;
    return this;
  }
};

  var game = Object.create(Game).init();

  $a.on('click', function(e) {
    e.preventDefault();
      game = Object.create(Game).init();
  });
});
