var $letters = $('#spaces');
var $guesses = $('#guesses');
var $apples = $('#apples');
var $message = $('#message');
var $replay = $('#replay');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  };
}();

function notALetter(code) {
  var a = 97;
  var z = 122;

  return (code < a || code > z);
}

var Game = {
  guesses: 6,
  displayMessage: function(text) {
    $message.text(text);
  },

  createBlanks: function() {
    var spaces = new Array(this.word.length + 1).join('<span></span>');
    $letters.find('span').remove();
    $letters.append(spaces);
    this.$spaces = $('#spaces span');
  },

  toggleReplayLink: function(which) {
    $replay.toggle(which);
  },

  duplicateGuess: function(letter) {
    var duplicate = $.inArray(letter, this.guessedLetters) >= 0;

    if (!duplicate) {
      this.guessedLetters.push(letter);
    }

    return duplicate;
  },

  setClass: function() {
    $apples.removeClass().addClass('guess_' + this.incorrect);
  },

  setGameStatus: function(status) {
    $(document.body).removeClass();

    if (status) {
      $(document.body).addClass(status);
    }
  },

  emptyGuesses: function() {
    $guesses.find('span').remove();
  },

  renderGuess: function(letter) {
    $('<span/>', {
      text: letter
    }).appendTo($guesses);
  },

  renderIncorrectGuess: function(letter) {
    this.incorrect++;
    this.renderGuess(letter);
    this.setClass();
  },

  fillBlanksFor: function(letter) {
    this.word.forEach(function(char, index) {
      if (letter === char) {
        this.$spaces.eq(index).text(letter);
        this.correctSpaces += 1;
      }
    }, this);
  },

   win: function() {
    this.unbind();
    this.setGameStatus('win');
    this.toggleReplayLink(true);
    this.displayMessage('You guessed the word. You win!');
  },

  lose: function() {
    this.unbind();
    this.setGameStatus('lose');
    this.toggleReplayLink(true);
    this.displayMessage('You ran out of guesses. You lose!');
  },

   processKey: function(e) {
    var letter = String.fromCharCode(e.which);

    if (notALetter(e.which) || this.duplicateGuess(e.which)) {
      return;
    }

    if ($.inArray(letter, this.word) >= 0) {
      this.fillBlanksFor(letter);
      if (this.correctSpaces === this.word.length) {
        this.win();

      }
    } else {
      this.renderIncorrectGuess(letter);
    }

    if (this.incorrect === this.guesses) {
      this.lose();
    }
  },

  bind: function() {
    $(document).on('keypress.game', this.processKey.bind(this));
  },

  unbind: function() {
    $(document).off('.game');
  },

  beginGame: function() {
    this.bind();
    this.setClass();
    this.toggleReplayLink(false);
    this.setGameStatus();
    this.createBlanks();
    this.emptyGuesses();
    this.displayMessage('');
  },

  init: function() {
    this.word = randomWord();

    if(!this.word) {
      this.displayMessage('Sorry, there are no more words left!');
      this.toggleReplayLink(false);
      return this;
    } else {
      this.word = this.word.split('');
      this.incorrect = 0;
      this.correctSpaces = 0;
      this.guessedLetters = [];
    }

    this.beginGame();
    return this;
  },
};

var game = Object.create(Game).init();

$replay.on('click', function(e) {
  e.preventDefault();
  game = Object.create(Game).init();
});
