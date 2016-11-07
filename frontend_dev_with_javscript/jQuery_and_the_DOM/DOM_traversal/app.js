$(function() {
  var $p = $('p');

  $p.parent('.highlight').css('color', 'blue');

  // $('#javascript').closest('ul').addClass('categories');  // get first ul it sees (including self)
  $('#javascript').parents('ul').addClass('categories'); // gets all ul ancestors

  console.log($('ul#navigation').find('li').length); // will return 4
  console.log($('#navigation').children().length); // will return 1

  var $css = $('#css').closest('li');

  // $css.nextAll().hide(); // hides all siblings after
  $css.prevAll().hide(); // hides siblings before
  $css.siblings().show(); // shows all siblings
});
