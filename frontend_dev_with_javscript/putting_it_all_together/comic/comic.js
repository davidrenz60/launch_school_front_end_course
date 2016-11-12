$(function() {
  var $blinds = $('[id^=blind]');
  var delay = 1500;
  var speed = 250;

  function startAnimation() {
    $blinds.each(function(idx) {
      var $blind = $blinds.eq(idx);
      $blind.delay(speed + delay * idx).animate({
        top: '+=' + $blind.height(),
        height: 0,
      }, speed);
    });
  }

  $('p').on('click', function(e) {
    e.preventDefault();
    $blinds.finish().removeAttr('style');
    startAnimation();
  });

  startAnimation();
});
