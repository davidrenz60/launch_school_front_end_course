$(function() {
  $('a').click(function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var character = $('#key').val();
    var char_code = character.charCodeAt(0);

    $(document).off('keypress').on('keypress', function(e) {
      if (e.which !== char_code) {
        return;
      }

      $('a').trigger('click');
    });
  });
});
