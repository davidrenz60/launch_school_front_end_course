var worker = new Worker('javascripts/worker.js');

$(function() {
  var $form = $('form');
  var $strong = $('strong');

  $form.on('submit', function(e) {
    e.preventDefault();
    var digits = $('#digits').val().replace(/\s/gm, '');
    var length = +$('#length').val();

    worker.postMessage([digits, length]);
  });

  worker.addEventListener('message', function(message) {
    $strong.text(message.data);
  });
});

