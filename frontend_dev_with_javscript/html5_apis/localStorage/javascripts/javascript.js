$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var $e = $(this);
    var index = $e.closest('li').index();
    var className = 'active';

    $e.closest('nav').find('.' + className).removeClass(className);
    $e.addClass(className);
    $('#tabs article').hide().eq(index).show();
    localStorage.setItem('activeNav', index);
  });

  $(':radio').on('change', function() {
    var color = $(this).val();
    $(document.body).css('background', color);
    localStorage.setItem('background', color);
  });

  $(window).on('unload', function() {
    var text = $('textarea').val();
    localStorage.setItem('text', text);
  });

  setActiveNav(localStorage.getItem('activeNav'));
  setBackground(localStorage.getItem('background'));
  setText(localStorage.getItem('text'));
});

function setActiveNav(index) {
  if (index === null) {
    return;
  }

  $('nav a').eq(index).click();
}

function setBackground(color) {
  if (color === null) {
    return;
  }

  $('[value="' + color + '"]').prop('checked', true).change();
}

function setText(text) {
  if (text === null) {
    return;
  }

  $('textarea').val(text);
}
