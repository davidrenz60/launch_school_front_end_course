$(function() {
  var templates = {};
  var photos;

  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    var property = $template.attr('id');
    templates[property] = Handlebars.compile($template.html());
  });

  $('[data-type=partial]').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

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
      $('[name=photo_id]').val(id); // changes form hidden input value to current photo id
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

  $('section > header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var photoIdx = slideshow.$el.find('figure:visible').index();
    var currentPhoto = photos[photoIdx];
    var $el = $(e.target); // need to use e.target instead of 'this' which refers to header in this case

    $.ajax({
      type: 'POST',
      url: $el.attr('href'),
      data: 'photo_id=' + $el.attr('data-id'),
      success: function(json) {
        $el.text(function(idx, text) {
          return text.replace(/\d+/, json.total);
        });

        currentPhoto[$el.attr('data-property')] = json.total;
      },
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function(json) {
        $('#comments ul').append(templates.comment(json));
      },
    });
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(id) {
    var photo = photos.filter(function(item) {
      return item.id === +id;
    })[0];

    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(id) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + id,
      success: function(json) {
        $('#comments ul').html(templates.comments({ comments: json }));
      },
    });
  }
});
