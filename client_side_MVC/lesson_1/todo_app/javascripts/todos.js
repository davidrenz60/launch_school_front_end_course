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

    model = this.Todos.add({
      name: name,
      complete: false
    });

    view = new this.TodoView(model);
    this.$todos.append(view.$el);
    e.target.reset();
  },

  editTodo: function() {
    var $editForm = $(templates.todo_edit(this.model.attributes));
    this.$el.replaceWith($editForm);

    $editForm.on('blur', 'input', App.hideEdit.bind(App));
  },

  hideEdit: function(e) {
    var $input = $(e.target);
    var $li = $input.closest('li');
    var id = $li.data('id');
    var model = this.Todos.get(id);
    var name = $input.val();
    model.set('name', name);
    $li.replaceWith(model.view.$el);
    $input.off(e);
  },

  toggleComplete: function(e) {
    var $li = $(e.target).closest('li');
    var id = $li.data('id');
    var model = App.Todos.get(id);
    var status = !model.get('complete');

    $li.toggleClass('complete', status);
    model.set('complete', status);
    return false;
  },

  clearCompleted: function(e) {
    e.preventDefault();

    var completed = this.Todos.models.filter(function(model) {
      return model.attributes.complete;
    });

    completed.forEach(function(model) {
      this.Todos.remove(model);
    }, this);
  },

  bind: function() {
    this.$el.find('form').on('submit', this.newTodo.bind(this));
    this.$el.find('#clear').on('click', this.clearCompleted.bind(this));
  },

  init: function() {
    this.bind();
  },
};

var templates = {};

$("[type='text/x-handlebars']").each(function() {
  var $this = $(this);
  templates[$this.attr('id')] = Handlebars.compile($this.html());
});

// Todo model constructor; used in the todos collection
App.TodoConstructor = new ModelConstructor();

// Todos collection constructor
App.TodosConstructor = new CollectionConstructor();

// The todo collection creation
App.Todos = new App.TodosConstructor(App.TodoConstructor);

// The todo view constructor. Used to create a new view for each model
App.TodoView = new ViewConstructor({
  tag_name: 'li',
  template: templates.todo,
  events: {
    "click": App.editTodo,
    "click a.toggle": App.toggleComplete,
  }
});

App.init();