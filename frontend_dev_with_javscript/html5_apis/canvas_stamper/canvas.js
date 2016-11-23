$(function() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var $color = $('#color');
  var $size = $('#size');
  var method;
  var drawingMethods = {
    square: function(e) {
      var size = this.size;
      var x = e.offsetX - size / 2;
      var y = e.offsetY - size / 2;
      ctx.fillRect(x, y, size, size);
    },

    circle: function(e) {
      var radius = this.size / 2;
      var x = e.offsetX;
      var y = e.offsetY;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    },

    triangle: function(e) {
      var size = this.size;
      var x = e.offsetX;
      var y = e.offsetY;
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.fill(); // fill will close any open paths
      ctx.closePath();
    },

    clear: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
  };

  $('.drawing_method').on('click', function(e) {
    e.preventDefault();
    var $el = $(this);
    var className = 'active';

    $el.closest('ul').find('.' + className).removeClass(className);
    $el.addClass(className);
    method = $el.attr('data-method');
  }).eq(0).click();

  $(canvas).on('click', function(e) {
    ctx.fillStyle = $color.val();
    drawingMethods.size = $size.val();
    drawingMethods[method](e);
  });

  $('#clear').on('click', function(e) {
    e.preventDefault();
    drawingMethods.clear();
  });
});
