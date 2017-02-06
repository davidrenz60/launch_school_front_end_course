var App = {
  init: function() {
    this.Items = new ItemsCollection(items_json);
    this.ItemsView = new ItemsView({ collection: this.Items });
    this.Items.sortByName();
  }
};

var ItemModel = Backbone.Model.extend({
  idAttribute: 'id',
  initialize: function() {
    this.collection.incrementId();
    this.set('id', this.collection.lastId);
  }
});

var ItemsCollection = Backbone.Collection.extend({
  lastId: 0,
  model: ItemModel,
  incrementId: function() {
    this.lastId++;
  },

  sortByProp: function(prop) {
    this.comparator = prop;
    this.sort();
    this.trigger('rerender');
  },

  sortByName: function() {
    this.sortByProp('name');
  },

  initialize: function() {
    this.on('add', this.sortByName);
  }
});

var ItemsView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.compile($('#items').html()),

  events: {
    'click a': 'removeItem'
  },

  removeItem: function(e) {
    e.preventDefault();
    var model = this.collection.get($(e.target).data('id'));
    this.collection.remove(model);
  },

  render: function() {
    this.$el.html(this.template({ items: this.collection.toJSON() }));
  },

  initialize: function() {
    this.listenTo(this.collection, 'rerender reset remove', this.render);
    this.render();
  }

});

Handlebars.registerPartial('item', $('#item').html());

$('form').on('submit', function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray();
  var attrs = {};

  inputs.forEach(function(input) {
    attrs[input.name] = input.value;
  });

  App.Items.add(attrs);
  this.reset();
});

$('th').on('click', function() {
  var prop = $(this).data('prop');
  App.Items.sortByProp(prop);
});

$('p a').on('click', function(e) {
  e.preventDefault();
  App.Items.reset();
});

App.init();
