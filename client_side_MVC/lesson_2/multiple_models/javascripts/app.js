var ProductModel = Backbone.Model.extend({
  idAttribute: 'id',
});

var Items = {
  $body: $('tbody'),
  collection: [],

  create: function(item_data) {
    item_data.id = this.collection.length + 1;
    var item = new ProductModel(item_data);
    this.collection.push(item);
    return item;
  },

  render: function() {
    Items.$body.html(template({ items: this.collection }));
  },

  seedCollection: function() {
    items_json.forEach(this.create.bind(this));
  },

  sortBy: function(prop) {
    this.collection = _(this.collection).sortBy(function(m) {
      return m.attributes[prop];
    });

    this.render();
  },

  empty: function() {
    this.collection = [];
    this.render();
  },

  remove: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    var model = _(this.collection).findWhere({ id: $e.data('id') });

    this.collection = _(this.collection).without(model);
    this.render();
  },

  bind: function() {
    this.$body.on('click', 'a', this.remove.bind(this));
  },

  init: function() {
    this.seedCollection();
    this.render();
    this.bind();
  }
};

var template = Handlebars.compile($('#items').html());
Handlebars.registerPartial('item', $('#item').html());

$('form').on('submit', function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray();
  var attrs = {};
  var model;

  inputs.forEach(function(input) {
    attrs[input.name] = input.value;
  });

  model = Items.create(attrs);
  Items.$body.append(Handlebars.partials.item(model.toJSON()));
  this.reset();
});

$('th').on('click', function() {
  var prop = $(this).data('prop');
  Items.sortBy(prop);
});

$('p a').on('click', function(e) {
  e.preventDefault();
  Items.empty();
});

Items.init();
