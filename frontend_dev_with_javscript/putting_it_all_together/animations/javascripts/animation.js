$(function() {
  var $canvas = $('#canvas');

  function getFormObject($form) {
    var obj = {};

    $form.serializeArray().forEach(function(input) {
      obj[input.name] = input.value;
    });

    return obj;
  }

  function createElement(data) {
    var $div = $('<div />', {
      class: data.shape_type,
      data: data,
    });

    resetElement($div);
    return $div;
  }

  function resetElement($e) {
    var data = $e.data();

    $e.css({
      left: +data.x_start,
      top: +data.y_start,
    });
  }

  function animateElement() {
    var $e = $(this);
    var data = $e.data();

    resetElement($e);
    $e.animate({
      left: +data.x_end,
      top: +data.y_end,
    }, +data.duration);
  }

  function stopAnimations() {
    $canvas.find('div').stop();
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    var data = getFormObject($form);

    $canvas.append(createElement(data));
  });

  $('#start').on('click', function(e) {
    e.preventDefault();
    $canvas.find('div').each(animateElement);
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();
    stopAnimations();
  });
});
