var todoApp;

$(function() {
  var templates = {};
  var $modal = $('.modal, .modal-layer');
  var $form = $('form');
  var $todoList = $('#content ul');
  var $total = $('#content header span');
  var months = {
    'January': '01',
    'February': '02',
    'March': '03',
    'April': '04',
    'May': '05',
    'June': '06',
    'July': '07',
    'August': '08',
    'September': '09',
    'October': '10',
    'November': '11',
    'December': '12',
  };

  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    var property = $template.attr('id');
    templates[property] = Handlebars.compile($template.html());
  });

  $('[data-type=partial]').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  function formatDueDate(todo) {
    if (!todo.month || !todo.year || !todo.day) {
        return 'No Due Date';
      }

    return months[todo.month] + '/' + todo.year.slice(-2);
  }

  function getFormObject(form) {
    var result = {};
    form.serializeArray().forEach(function(obj) {
      result[obj.name] = obj.value;
    });

    result.dueDate = formatDueDate(result);

    return result;
  }

  var TodoApp = {
    updateTotal: function() {
      $total.text(this.todos.length);
    },

    get: function(id) {
      return this.todos.find(function(todo) {
        return todo.id === id;
      });
    },

    delete: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      var id = $el.data('id');
      $el.closest('li').remove();

      var todo = this.get(id);
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);

      this.updateTotal();
      this.setLocalStorage();
    },

    updateTodo: function() {
      var formObj = getFormObject($form);
      var id = $form.data('id');
      var todo = this.get(id);
      $.extend(todo, formObj);
      this.setLocalStorage();
      this.renderTodos();
    },

    addTodo: function() {
      var todo = getFormObject($form);
      todo.completed = false;
      todo.id = this.lastId;
      this.lastId++;

      this.todos.push(todo);
      this.renderTodos();
    },

    save: function(e) {
      e.preventDefault();

      if ($form.data('id')) {
        this.updateTodo();
      } else {
        this.addTodo();
      }

      this.closeModal();
      this.updateTotal();
      this.setLocalStorage();
    },

    completeTodo: function(e) {
      e.preventDefault();
      var id = $('form').data('id');
      var todo = this.get(id);
      todo.completed = true;

      this.closeModal();
      this.setLocalStorage();
      this.renderTodos();
    },

    fillForm: function(e) {
      var id = $(e.target).data('id');
      var todo = this.get(id);

      $form.find('#title').val(todo.title);
      $form.find('#description').val(todo.description);
      $form.find('#date option:selected').prop('selected', false);
      $form.find('#month option:selected').prop('selected', false);
      $form.find('#year option:selected').prop('selected', false);
      $('#day').find('option[value="' + todo.day + '"]').prop('selected', true);
      $('#month').find('option[value="' + todo.month + '"]').prop('selected', true);
      $('#year').find('option[value="' + todo.year + '"]').prop('selected', true);
    },

    showModal: function(e) {
      e.preventDefault();
      $form.get(0).reset();
      var $e = $(e.target);
      var id = $e.data('id');

      if ($e.hasClass('todo')) {
        $form.data('id', id);
        this.fillForm(e);
      } else {
        $form.data('id', null);
      }

      $modal.fadeIn(400);
    },

    closeModal: function() {
      $modal.fadeOut(400);
    },

    renderTodos: function() {
      $todoList.html(templates.todos({ todos: this.todos }));
    },

    setLocalStorage: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('lastId', this.lastId);
    },

    loadTodos: function() {
      this.todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    },

    loadLastId: function() {
      this.lastId = +localStorage.lastId || 1;
    },

    bind: function() {
      $('.add-new').on('click', this.showModal.bind(this));
      $('.modal-layer').on('click', this.closeModal.bind(this));
      $todoList.on('click', '.delete', this.delete.bind(this));
      $todoList.on('click', '.todo', this.showModal.bind(this));
      $('form').on('submit', this.save.bind(this));
      $('button').on('click', this.completeTodo.bind(this));
    },

    init: function () {
      this.loadLastId();
      this.loadTodos();
      this.bind();
      this.renderTodos();
      return this;
    }
  };

  todoApp = Object.create(TodoApp).init();
});