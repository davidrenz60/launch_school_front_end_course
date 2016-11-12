$(function() {
  var months = {
    January: 'garnet',
    February: 'amethyst',
    March: 'aquamarine or bloodstone',
    April: 'diamond',
    May: 'emerald',
    June: 'pearl, moonstone, or alexandrite',
    July: 'ruby',
    August: 'peridot',
    September: 'sapphire',
    October: 'opal or tourmaline',
    November: 'topaz or citrine',
    December: 'turquoise, zircon, or tanzanite',
  };

  $('nav a').on('mouseenter', function() {
    $(this).next('ul').addClass('visible');
  });

  $('nav').on('mouseleave', function() {
    $(this).find('ul ul').removeClass('visible');
  });

  $('.button, button').on('click', function(e) {
    e.preventDefault();

    $(this).addClass('clicked');
  });

  $('.toggle').on('click', function(e) {
    e.preventDefault();

    $(this).next('.accordion').toggleClass('opened');
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var ccNumber = $(this).find('[type=text]').val();
    var total = getLuhnTotal(ccNumber);
    var isValid = total % 10 === 0;

    $(this).find('.success').toggle(isValid);
    $(this).find('.error').toggle(!isValid);
  });

  $('ul a').on('click', function(e) {
    e.preventDefault();
    var month = $(this).text();
    var $stone = $('#birthstone');

    $stone.text('Your birthstone is ' + months[month] + '.');
  });

  function getLuhnTotal(ccNumber) {
    var oddTotal = 0;
    var evenTotal = 0;

    ccNumber = ccNumber.split('').reverse();
    for (var i = 0, len = ccNumber.length; i < len; i++) {
      if (i % 2 === 1) {
        ccNumber[i] = (+ccNumber[i] * 2) + '';
        if (ccNumber[i].length > 1) {
          ccNumber[i] = +ccNumber[i][0] + Number(ccNumber[i][1]);
        } else {
          ccNumber[i] = +ccNumber[i];
        }

        oddTotal += ccNumber[i];
      } else {
        evenTotal += +ccNumber[i];
      }
    }

    return oddTotal + evenTotal;
  }
});
