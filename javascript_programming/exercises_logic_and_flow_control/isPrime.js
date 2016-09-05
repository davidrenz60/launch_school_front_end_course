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
