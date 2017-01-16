$(function() {
  var templates = {};
  var $modal = $('.modal, .modal-layer');
  var $form = $('form');
  var $todoList = $('#content ul');
  var $allTodos = $('#all-todos ul');
  var $completedTodos = $('#completed ul');
  var $h2 = $('h2');
  var $nav = $('#navigation');
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


  (function cacheTemplates() {
    $('[data-type=partial]').each(function() {
      var $partial = $(this);
      Handlebars.registerPartial($partial.attr('id'), $partial.html());
    });

    $("script[type='text/x-handlebars']").each(function() {
      var $template = $(this).remove();
      var property = $template.attr('id');
      templates[property] = Handlebars.compile($template.html());
    });
  })();

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

  function count(array, element) {
    return array.filter(function(el) {
      return el === element;
    }).length;
  }

  var TodoApp = {
    get: function(id) {
      return this.todos.find(function(todo) {
        return todo.id === id;
      });
    },

    completedTodos: function() {
      return this.todos.filter(function(todo) {
        return todo.completed === true;
      });
    },

    getTodosByDate: function(date) {
      if (date === "All Todos") {
        return this.todos;
      }

      return this.todos.filter(function(todo) {
        return todo.dueDate === date;
      });
    },

    getCompletedTodosByDate: function(date) {
      if (date === "Completed") {
        return this.completedTodos();
      }

      return this.completedTodos().filter(function(todo) {
        return todo.dueDate === date;
      });
    },

    getMonthlyTodoObject: function(todos) {
      var result = {};
      var dates = todos.map(function(todo) {
        return todo.dueDate;
      });

      var uniqueDates = dates.filter(function(date, index, arr) {
        return arr.indexOf(date) === index;
      });

      var dateCounts = uniqueDates.map(function(date) {
        var obj = {};
        obj.date = date;
        obj.total = count(dates, date);
        return obj;
      });

      result.todosTotal = dates.length;
      result.monthlyTodos = dateCounts;
      return result;
    },

    deleteTodo: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      var id = $el.data('id');
      $el.closest('li').remove();

      var todo = this.get(id);
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);

      this.renderTodos();
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
      this.setLocalStorage();
    },

    markTodoComplete: function(e) {
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

    showTodosByDate: function(e) {
      var $e = $(e.currentTarget);
      var date = $e.children().eq(0).text();
      var total = $e.children().eq(1).text();
      var context = { date: date, total: total };
      var isCompleted = !!$e.parents().filter('#completed').length;

      $nav.find('.active').removeClass('active');
      $e.addClass('active');
      this.renderTodosFor(isCompleted, date, context);
    },

    renderTodosFor: function(isCompleted, date, context) {
      $h2.html(templates.heading(context));

      if (isCompleted) {
        $todoList.html(templates.todos({todos: this.getCompletedTodosByDate(date) }));
      } else {
        $todoList.html(templates.todos({todos: this.getTodosByDate(date) }));
      }
    },

    renderTodos: function() {
      $allTodos.html(templates.allTodos(this.getMonthlyTodoObject(this.todos)));
      $completedTodos.html(templates.completedTodos(this.getMonthlyTodoObject(this.completedTodos())));
      $todoList.html(templates.todos({ todos: this.todos }));
      this.setDefaultMenuItem();
    },

    setDefaultMenuItem: function() {
      $('#todos-heading').click();
    },

    setLocalStorage: function() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('lastId', this.lastId);
    },

    loadTodos: function() {
      return localStorage.todos ? JSON.parse(localStorage.todos) : [];
    },

    loadLastId: function() {
      return +localStorage.lastId || 1;
    },

    bind: function() {
      $('.add-new').on('click', this.showModal.bind(this));
      $('.modal-layer').on('click', this.closeModal.bind(this));
      $todoList.on('click', '.delete', this.deleteTodo.bind(this));
      $todoList.on('click', '.todo', this.showModal.bind(this));
      $form.on('submit', this.save.bind(this));
      $('button').on('click', this.markTodoComplete.bind(this));
      $nav.on('click', 'li', this.showTodosByDate.bind(this));
    },

    init: function () {
      this.lastId = this.loadLastId();
      this.todos = this.loadTodos();
      this.bind();
      this.renderTodos();
      this.setDefaultMenuItem();
      return this;
    }
  };

  Object.create(TodoApp).init();
});
