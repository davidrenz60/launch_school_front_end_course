$(function() {
  var templates = {};
  var photos;

  // loop through each handlebars script and add methods to templates object
  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    var property = $template.attr('id');
    templates[property] = Handlebars.compile($template.html());
  });

  // register any partials
  $('[data-type=partial]').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  // make ajax request and render photos, information and comments of the first photo
  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(0);
      getCommentsFor(photos[0].id);
    },
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    $('section > header').html(templates.photo_information(photos[idx]));
  }

  function getCommentsFor(photoId) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + photoId,
      success: function(comment_json) {
        $('#comments ul').html(templates.comments({ comments: comment_json }));
      },
    });
  }
});
