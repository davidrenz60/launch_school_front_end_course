var inventory;

(function() {
  inventory = {
    collection: [],
    lastId: 0,
    addItem: function() {
      var item = {
        id: this.lastId,
        name: '',
        stockNumber:  '',
        quantity: 1,
      };
      this.collection.push(item);
      this.lastId += 1;
    },

    deleteItem: function(el) {
      var id = el.closest('tr').find('input[type=hidden]').val();
      var idx = this.collection.findIndex(function(item) {
        return item.id === +id;
      });

      this.collection.splice(idx, 1);
    },

    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },

    cacheTemplate: function() {
      var $i_templ = $('#inventory_item').remove();
      this.template = $i_templ.html();
    },

    init: function() {
      this.setDate();
      this.cacheTemplate();
    },
  };
})();

$(inventory.init.bind(inventory)); //
// $($.proxy(inventory.init, inventory));  same as calling above with $.proxy,

$(function() {
  $('button').on('click', function(e) {
    e.preventDefault();
    var template = inventory.template.replace(/ID/g, inventory.lastId);

    $('table').append(template);
    inventory.addItem();
  });

  $('#inventory').on('click', '.delete', function(e) {
    e.preventDefault();
    var $el = $(this);
    $el.closest('tr').remove();
    inventory.deleteItem($el);
  });

  $('#inventory').on('blur', 'input', function(e) {
    e.preventDefault();
    var $el = $(this);
    var value = $el.val();
    var property = getPropertyName($el);
    var idx = $el.closest('tr').find('input[type=hidden]').val();
    inventory.collection[idx][property] = value;
  });

  function getPropertyName(el) {
    var attrName = el.attr('name');

    if (attrName.match('name')) {
      return 'name';
    } else if (attrName.match('stock')) {
      return 'stockNumber';
    } else if (attrName.match('quantity')) {
      return 'quantity';
    }
  }
});
