$(function() {
  var templates = {};
  var photos;

  // loop through each handlebars script and add methods to templates object
  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    var property = $template.attr('id');
    templates[property] = Handlebars.compile($template.html());
  });

  // make ajax request and render photos and information of the first photo
  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      console.log(photos);
      $('#slides').append(templates.photos({ photos: photos }));
      $('section > header').append(templates.photo_information(photos[0]));
    },
  });
});
