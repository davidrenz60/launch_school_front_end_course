function $(idSelector) {
  return document.getElementById(idSelector);
}

window.onload = function() {
  $('calculator').onsubmit = function(e) {
    e.preventDefault();

    var result = 0;
    var numerator = +$('numerator').value;
    var denominator = +$('denominator').value;
    var operator = $('operator').value;

    if (operator === '+') {
      result = numerator + denominator;
    } else if (operator === '-') {
      result = numerator - denominator;
    } else if (operator === '*') {
      result = numerator * denominator;
    } else if (operator === '/') {
      result = numerator / denominator;
    }

    $('result').innerHTML = result;
  };
};
