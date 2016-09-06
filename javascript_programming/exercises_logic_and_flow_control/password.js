var password = 'password';
var failedGuesses = 0;

while (true) {
  var guess = prompt('What is the password:');

  if (password === guess) {
    console.log('You have successfully logged in.');
    break;
  }

  failedGuesses++;

  if (failedGuesses === 3) {
    console.log('You have been denied access.');
    break;
  }
}
