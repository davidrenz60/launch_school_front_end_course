function printMultiples(num) {
  for (var i = 100; i >= 0; i--) {
    if (i % num === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

function printMultiples(num) {
  var multiple = Math.floor(100 / num) * num;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= num;
  }
}

function printMultiples(num) {
  for(var multiple = Math.floor(100 / num) * num; multiple > 0; multiple -= num) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}
