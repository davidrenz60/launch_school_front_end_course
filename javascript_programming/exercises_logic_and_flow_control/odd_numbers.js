function printOddNumbers(num) {
  for (var i = 1; i <= num; i ++) {
    if (i % 2 === 1) {
        console.log(i)
    }
  }
}

function printOddNumbers(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

function printOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i)
  }
}
