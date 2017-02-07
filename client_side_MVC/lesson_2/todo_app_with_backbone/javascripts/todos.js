var templates = {};

$("[type='text/x-handlebars']").each(function() {
  var $this = $(this);
  templates[$this.attr('id')] = Handlebars.compile($this.html());
});

var App = {
  $el: $('main'),
  $todos: $('#todos'),

  newTodo: function(e) {
    e.preventDefault();
      var model;
      var view;
      var $form = $(e.target);
      var name = $form.find('#todo_name').val();

      if (!name) {
        return;
      }

      model = this.Todos.add({ name: name });
      view = new this.TodoView({ model: model });

      this.$todos.append(view.$el);
      e.target.reset();
  },

  clearCompleted: function(e) {
    e.preventDefault();
    var completed = this.Todos.where({ complete: true });
    this.Todos.remove(completed);
  },

  bind: function() {
    this.$el.find('form').on('submit', this.newTodo.bind(this));
    this.$el.find('#clear').on('click', this.clearCompleted.bind(this));
  },

  init: function() {
    this.bind();
  }
};

// create a closure to keep track of id local variable
(function() {
  var id = 1;
  var TodoModel = Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
      complete: false,
    },

    initialize: function() {
      this.set('id', id);
      id++;
    }
  });

  App.Todo = TodoModel;
})();

App.Todos = new Backbone.Collection([], {
  model: App.Todo,
});

App.TodoView = Backbone.View.extend({
  tagName: 'li',
  template: templates.todo,

  events: {
    'click a': 'toggleComplete',
    'click' : 'editTodo',
  },

  toggleComplete: function() {
    var status = !this.model.get('complete');

    this.$el.toggleClass('complete', status);
    this.model.set('complete', status);
    return false;
  },

  editTodo: function() {
    var $editForm = $(templates.todo_edit(this.model.toJSON()));
    this.$el.replaceWith($editForm);
    $editForm.find('input').focus();

    $editForm.on('blur', 'input', this.hideEdit.bind(this));
  },

  hideEdit: function(e) {
    var $input = $(e.target);
    var $li = $input.closest('li');
    var name = $input.val();

    this.model.set('name', name);
    $li.replaceWith(this.$el);
    $input.off(e);
    this.delegateEvents();
  },

  render: function() {
    this.$el.attr('data-id', this.model.get('id'));
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.remove);
  }
});

App.init();