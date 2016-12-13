$(function() {
  var $create = $('#create');
  var $createForm = $('#create form');
  var $editForm = $('#edit form');
  var $edit = $('#edit');
  var $content = $('#content');
  var $contactList = $('#contact-list ul');
  var $empty = $('#contacts-empty');
  var $search = $('#search');
  var $messageEmpty = $('#message-empty');
  var $messageTag = $('#message-tag');

  function createFormObject(form) {
    var result = {};
    form.serializeArray().forEach(function(obj) {
      result[obj.name] = obj.value;
    });

    return result;
  }

  function beginsWith(text, query) {
    return text.toLowerCase().indexOf(query.toLowerCase()) === 0;
  }

  function matchFirstOrLast(text, query) {
    text = text.split(' ');
    return beginsWith(text[0], query) || beginsWith(text[1], query);
  }

  var ContactManager = {
    lastId: 0,
    get: function(id) {
      return this.contacts.find(function(contact) {
        return contact.id === id;
      });
    },

    add: function(e) {
      e.preventDefault();
      var contact = createFormObject($createForm);
      contact.id = this.lastId;
      this.lastId++;

      $contactList.append(this.template(contact));
      this.contacts.push(contact);
      this.checkEmptyContacts();
    },

    delete: function(e) {
      if (!confirm('Are you sure you want to delete this contact?')) {
        return;
      }

      var id = $(e.target).closest('li').remove().data('id');
      var contact = this.get(id);
      var index = this.contacts.indexOf(contact);

      this.contacts.splice(index, 1);
      this.checkEmptyContacts();
    },

    fillEditForm: function(contact) {
      $edit.find('#name').val(contact.name);
      $edit.find('#phone').val(contact.phone);
      $edit.find('#email').val(contact.email);
      $edit.find('#tag').val(contact.tag);
      $edit.attr('data-id', contact.id);
    },

    update: function(e) {
      e.preventDefault();
      var id = +$edit.attr('data-id');
      var contact = this.get(id);
      var updated = createFormObject($editForm);
      var $contact = $contactList.find('[data-id="' + id + '"]');

      for (var prop in updated) {
        contact[prop] = updated[prop];
      }

      $contact.replaceWith(this.template(contact));
    },

    renderContacts: function() {
      if (this.contacts.length === 0) { return; }

      this.contacts.forEach(function(contact) {
        $contactList.append(this.template(contact));
      }.bind(this));
    },

    checkEmptyContacts: function() {
      $contactList.find('li').length === 0 ? $empty.show() : $empty.hide();
    },

    displaySearch: function() {
      var query = $search.val();
      var $contacts = $contactList.find('li');

      $contacts.each(function() {
        var $this = $(this);
        var names = $this.find('h3').text();
        if (matchFirstOrLast(names, query) || beginsWith(names, query)) {
          $this.show();
        } else {
          $this.hide();
        }
      });

      this.displaySearchMessage(query);
    },

    displaySearchMessage: function(query) {
      if ($contactList.find('li:visible').length === 0) {
        $messageEmpty.find('strong').text(query);
        $messageEmpty.show();
      } else {
        $messageEmpty.hide();
      }
    },

    displayTagged: function(e) {
      e.preventDefault();
      var tag = $(e.target).text();
      var $contacts = $contactList.find('li');

      $contacts.each(function() {
        var $this = $(this);
        var value = $this.find('.tag a').text();
        if (tag === value) {
          $this.show();
        } else {
          $this.hide();
        }
      });

      this.displayTagMessage(tag);
    },

    hideTagSearch: function(e) {
      e.preventDefault();

      $contactList.find('li:hidden').toggle();
      $messageTag.toggle();
    },

    displayTagMessage: function(tag) {
      $messageTag.find('strong').text(tag);
      $messageTag.toggle();
    },

    toggleCreateForm: function(e) {
      e.preventDefault();
      $create.slideToggle();
      $content.slideToggle();
    },

    openEditForm: function(e) {
      e.preventDefault();
      var id = $(e.target).closest('li').data('id');
      var contact = this.get(id);
      this.fillEditForm(contact);

      $edit.slideToggle();
      $content.slideToggle();
    },

    closeEditForm: function(e) {
      e.preventDefault();

      $edit.slideToggle();
      $content.slideToggle();
    },

    setLocalStorage: function() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    },

    loadContacts: function() {
      if (localStorage.contacts) {
        return JSON.parse(localStorage.contacts);
      } else {
        return [];
      }
    },

    cacheTemplate: function() {
      var $contact = $('#contact').remove().html();
      this.template = Handlebars.compile($contact);
    },

    bind: function() {
      $('a.toggle-create').on('click', this.toggleCreateForm.bind(this));
      $contactList.on('click', '.edit', this.openEditForm.bind(this));
      $editForm.on('click', '.cancel', this.closeEditForm.bind(this));
      $contactList.on('click', '.delete', this.delete.bind(this));
      $createForm.on('submit', function(e) {
        this.add(e);
        this.toggleCreateForm(e);
      }.bind(this));

      $editForm.on('submit', function(e) {
        this.update(e);
        console.log('working');
        this.closeEditForm(e);
      }.bind(this));

      $search.on('keyup', this.displaySearch.bind(this));
      $(window).on("unload", this.setLocalStorage.bind(this));
      $contactList.on('click', '.tag a', this.displayTagged.bind(this));
      $messageTag.on('click', '.button', this.hideTagSearch.bind(this));
    },

    init: function() {
      this.contacts = this.loadContacts();
      this.bind();
      this.cacheTemplate();
      this.renderContacts();
      this.checkEmptyContacts();
      return this;
    }
  };

  Object.create(ContactManager).init();
});