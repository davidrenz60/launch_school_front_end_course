$(function() {
  Handlebars.registerPartial('event', $('#event').html());
  var eventsTemplate = Handlebars.compile($('#events').remove().html());
  var eventTemplate = Handlebars.compile($('#event').remove().html());

  var Events = {
    collection: [],
    $el: $('#events_list'),

    add: function(events) {
      events = _.isArray(events) ? events : [events];

      events.forEach(function(event) {
        this.collection.push(event);
      }, this);

      this.sort();
      this.render();
    },

    remove: function(idx) {
      var model = _(this.collection).findWhere({ id: idx });

      if (!model) {
        return;
      }

      this.collection = this.collection.filter(function(event) {
        return event.id !== model.id;
      });

      this.sort();
      this.render();
    },

    render: function() {
      this.$el.html(eventsTemplate({ events: this.collection }));
    },

    sort: function() {
      this.collection.sort(function(a, b) {
        return a.date - b.date;
      });
    },
  };

  $.ajax({
    type: 'get',
    url: '/events',
    success: function(events) {
      Events.add(events);
    }
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $f = $(this);

    $.ajax({
      type: $f.attr('method'),
      url: $f.attr('action'),
      data: $f.serialize(),
      success: function(event) {
        Events.add(event);
      }
    });
  });

  Events.$el.on('click', '.remove', function(e) {
    e.preventDefault();
    var id = $(this).closest('li').data('id');

    Events.remove(id);

    $.ajax({
      type: 'post',
      url: '/events/delete',
      data: "id=" + id,
    });
  });
});