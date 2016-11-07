$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);

    var result = 0;
    var numerator = +$form.find('#numerator').val();
    var denominator = +$form.find('#denominator').val();
    var operator = $form.find('#operator').val();

    if (operator === '+') {
      result = numerator + denominator;
    } else if (operator === '-') {
      result = numerator - denominator;
    } else if (operator === '*') {
      result = numerator * denominator;
    } else if (operator === '/') {
      result = numerator / denominator;
    }

    $('h1').text(result);
  });
});
