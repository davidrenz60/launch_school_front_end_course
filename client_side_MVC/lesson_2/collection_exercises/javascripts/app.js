var template = Handlebars.compile($('#users').html());

var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  model: User,
  url: "http://jsonplaceholder.typicode.com/users",

  parse: function(response) {
    // move nested company object properties to the user object
    response.forEach(function(model) {
      model.company_name = model.company.name;
      model.catchPhrase = model.company.catchPhrase;
      model.company_bs = model.company.bs;
      delete model.company;
    });

    return response;
  },

  renderCollection: function() {
    $('body').html(template({ users: this.toJSON() }));
  },

  initialize: function() {
    // add multiple event listeners by space separated string
    this.on('sync sort', this.renderCollection);
  },
});

var blogWriters = new Users();

blogWriters.fetch({
  success: function(collection) {
    collection.comparator = 'name';
    collection.sort();
  }
});

// obtain an array of email addresses:
blogWriters.pluck('email');
