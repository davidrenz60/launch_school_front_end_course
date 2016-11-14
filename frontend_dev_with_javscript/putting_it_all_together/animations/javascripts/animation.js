$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var input = $(this).serializeArray();
    var data = {};
    var $div = $('<div></div>');

    input.forEach(function(obj) {
      data[obj.name] = obj.value;
    });

    $div.data(data).addClass(data.shape_type).css({
      left: +data.x_start,
      top: +data.y_start,
    });

    $('#canvas').append($div);
  });

  $('#start').on('click', function(e) {
    e.preventDefault();
    var $shapes = $('#canvas > div');

    $shapes.each(function() {
      var $element = $(this);
      var startPos = {
        left: +$element.data('x_start'),
        top: +$element.data('y_start'),
      };
      var endPos = {
        left: +$element.data('x_start') + +$element.data('x_end'),
        top: +$element.data('y_start') + +$element.data('y_end'),
      };

      $element.stop().css(startPos).animate(endPos, 1000);
    });
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();
    $('#canvas > div').stop();
  });
});
