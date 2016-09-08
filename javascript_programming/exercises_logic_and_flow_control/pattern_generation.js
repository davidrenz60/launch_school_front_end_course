// numbers 1-9 only
function generatePattern(n) {
  var string;

  for (var i = 1; i <= n; i++) {
    string = '';

    for (var j = i; j <= i; j++) {
      string += j;
    }

    for (var k = i; k <= n; k++) {
      string += '*';
    }
    console.log(string);
  }
}

// accounts for multiple digit numbers
function generatePattern(n) {
  var lastLine = '';
  var length;
  var stars;

  for (var x = 1; x <= n; x++) {
    lastLine += String(x);
  }

  for (var i = 1; i <= n; i++) {
    string = '';

    for (var j = 1; j <= i; j++) {
      string += j;
    }

    stars = lastLine.length - string.length;

    for (var k = 1; k <= stars; k++) {
      string += '*';
    }

    console.log(string);
  }
}
