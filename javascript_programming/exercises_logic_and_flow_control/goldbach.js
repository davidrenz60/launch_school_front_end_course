function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  var found;

  for (var i = 1; i < n / 2; i++) {
    var j = n - i;

    if (isPrime(i) && isPrime(j)) {
      found = true;
      console.log(i, j);
    }
  }

  if (!found) {
    console.log(null);
  }
}

function isPrime(num) {
  if (num <= 1 ||  (num > 2 && num % 2 === 0)) {
    return false;
  }

  for (var i = 3; i < num; i+= 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
