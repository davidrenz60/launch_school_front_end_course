var workers = {
  brightness: new Worker('javascripts/brightness.js'),
  saturation: new Worker('javascripts/saturation.js'),
  invert: new Worker('javascripts/invert.js'),
  horizontal: new Worker('javascripts/horizontal.js'),
  vertical: new Worker('javascripts/vertical.js'),
};


$(window).on('load', function() {
  var img = $('img').remove().get(0);
  var canvas = $('canvas').get(0);
  var ctx = canvas.getContext('2d');
  var lastData;

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  lastData = getData(ctx);

  $('input').on('input', function() {
    var $el = $(this);
    var worker = workers[$el.attr('id')];

    $el.next('span').text($el.val() + "%");

    worker.postMessage({ imgData: lastData, param: $el.val() });
  });

  $('ul').on('click', 'a', function(e) {
    e.preventDefault();
    var worker = workers[$(e.target).attr('data-method')];
    worker.postMessage({ imgData: getData(ctx) });

    worker.addEventListener('message', function(message) {
      lastData = message.data.imgData;
      worker.removeEventListener('message', message);
    });
  });

  for (var prop in workers) {
    workers[prop].addEventListener('message', function(message) {
      putData(ctx, message.data.imgData);
    });
  }

  function getData(ctx) {
    return  ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function putData(ctx, data) {
    ctx.putImageData(data, 0, 0);
  }

});

