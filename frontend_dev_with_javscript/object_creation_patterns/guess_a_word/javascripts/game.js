var $letters = $('#spaces');
var $guesses = $('#guesses');
var $apples = $('#apples');
var $message = $('#message');
var $reset = $('#reset');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  };
}();

function Game() {
  this.word = randomWord();
  this.incorrect = 0;
  this.correctSpaces = 0;
  this.guessedLetters = [];
  if (!this.word) {
    this.displayMessage('Sorry, there are no more words left!');
  }
  this.word = this.word.split('');
  this.init();
}

Game.prototype = {
  displayMessage: function(text) {
    $message.text(text);
  },

  createBlanks: function() {
    var spaces = new Array(this.word.length + 1).join('<span></span>');
    $letters.find('span').remove();
    $letters.append(spaces);
    this.$spaces = $('#spaces span');
  },

  addGuessed: function(letter) {
    this.guessedLetters.push(letter);
    $guesses.append('<span>' + letter + '</span>');
  },

  guessed: function(guess) {
    return this.guessedLetters.indexOf(guess) >= 0;
  },

  displayMatches: function(guess) {
    this.word.forEach(function(letter, index) {
      if (guess === letter) {
        this.$spaces.eq(index).text(letter);
        this.correctSpaces += 1;
      }
    }, this);
  },

  checkGuesses: function(guess) {
    if (this.word.indexOf(guess) === -1) {
      this.incorrect += 1;
      $apples.addClass('guess_' + this.incorrect);
    }
  },

  checkWin: function() {
    if (this.correctSpaces === this.word.length) {
      this.unbind();
      this.displayMessage('You guessed the word. You win!');
      $reset.show();
    }
  },

  checkLoss: function() {
    if (this.incorrect >= 6) {
      this.unbind();
      this.displayMessage('You ran out of letters. You lose');
      $reset.show();
    }
  },

  processKey: function(e) {
    var charCode = e.which;
    var guess = String.fromCharCode(charCode);

    if (charCode < 97 || charCode > 122 || this.guessed(guess)) {
      return;
    }

    this.addGuessed(guess);
    this.displayMatches(guess);
    this.checkGuesses(guess);
    this.checkWin();
    this.checkLoss();

  },

  unbind: function() {
    $(document).off('keypress');
  },

  init: function() {
    this.createBlanks();
    $reset.hide();
    $guesses.find('span').remove();
    this.displayMessage("");
    $(document).on('keypress', this.processKey.bind(this));
    $apples.removeClass();

  },
};

$(function() {
  new Game();

  $('p').on('click', 'a', function() {
    new Game();
  });
});

