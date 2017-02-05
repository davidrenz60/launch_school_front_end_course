var App = {
  $tbody: $('tbody'),
  template: Handlebars.compile($('#items').html()),

  render: function() {
    this.$tbody.html(this.template({ items: this.Items.models }));
  },

  removeItem: function(e) {
    e.preventDefault();
    var model = this.Items.get($(e.target).data('id'));
    this.Items.remove(model);
    this.render();
  },

  bind: function() {
    this.$tbody.on('click', 'a', this.removeItem.bind(this));
  },
  init: function() {
    this.Items = new ItemsCollection(items_json);
    this.Items.sortByName();
    this.render();
    this.bind();
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

  sortBy: function(prop) {
    this.models = _(this.models).sortBy(function(m) {
      return m.attributes[prop];
    });

    App.render();
  },

  sortByName: function() {
    this.sortBy('name');
  },

  initialize: function() {
    this.on('remove reset', App.render.bind(App));
    this.on('add', this.sortByName);
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
  App.Items.sortBy(prop);
});

$('p a').on('click', function(e) {
  e.preventDefault();
  App.Items.reset();
});

App.init();
