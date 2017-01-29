var editForm = Handlebars.compile($('#todo_edit').html());
var Todo = new ModelConstructor();
var Todos = new CollectionConstructor();
var TodoView = new ViewConstructor({
  tag_name: 'li',
  template: Handlebars.compile($('#todo').html()),
  events: {
    "click .toggle": function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(e.target).closest('li').toggleClass('complete');
    },

    "click": function() {
       this.$el.replaceWith(editForm(this.model.attributes));
    },
  },
});

var $todos = $("#todos");
var inventory = new Todos(Todo);

$('form').on('submit', function(e) {
  e.preventDefault();
  var $form = $(this);
  var properties = { name: $form.find('input').val() };
  var model = inventory.add(properties);
  $todos.append(new TodoView(model).$el);
});

$todos.on('blur', 'input', function(e) {
  var $input = $(e.target);
  var $li = $input.closest('li');
  var id = $li.data('id');
  var model = inventory.get(id);
  model.set('name', $input.val());
  $li.replaceWith(new TodoView(model).$el);
});

$('#clear').on('click', function(e) {
  e.preventDefault();
  inventory.models.forEach(function(model) {
    if (model.view.$el.hasClass('complete')) {
      inventory.remove(model);
    }
  });
});







