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

  // capture slideshow functionality in slideshow object
  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $next = $current.next();

      if ($next.length === 0) {
        $next = this.$el.find('figure').first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id')); // note: $next.data('id') will coerce into a number
    },

    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $prev = $current.prev();

      if ($prev.length === 0) {
        $prev = this.$el.find('figure').last();
      }

      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },

    renderPhotoContent: function(id) {
      renderPhotoInformation(id);
      getCommentsFor(id);
    },

    bindEvents: function() {
      this.$el.find('a.prev').on('click', this.prevSlide.bind(this));
      this.$el.find('a.next').on('click', this.nextSlide.bind(this));
    },

    init: function() {
      this.bindEvents();
    },
  };

  // make ajax request and render photos, information and comments of the first photo
  $.ajax({
    url: '/photos',
    success: function(json) {
      var id;
      photos = json;
      id = photos[0].id;
      renderPhotos();
      renderPhotoInformation(id);
      slideshow.init();
      getCommentsFor(id);
    },
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  // change function to find info by id rather than index
  function renderPhotoInformation(id) {
    var photo = photos.filter(function(item) {
      return item.id === +id;
    })[0];

    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(photoId) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + photoId,
      success: function(commentJson) {
        $('#comments ul').html(templates.comments({ comments: commentJson }));
      },
    });
  }
});
