var inventory;

(function() {
  inventory = {
    collection: [],
    lastId: 0,
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1,
      };
      this.collection.push(item);

      return item;
    },

    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var $item = $(this.template({ id: item.id }));
      $('#inventory').append($item);
    },

    findId: function($item) {
      return +$item.find('input[type=hidden]').val();
    },

    get: function(id) {
      var foundItem;
      this.collection.forEach(function(item) {
        if (item.id === id) {
          foundItem = item;
          return false;
        }
      });

      return foundItem;
    },

    remove: function(id) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== id;
      });
    },

    update: function($item) {
      var id = this.findId($item);
      var item = this.get(id);

      item.name = $item.find('input[name^=item_name]').val();
      item.stockNumber = $item.find('input[name^=item_stock_number]').val();
      item.quantity = +$item.find('input[name^=item_quantity]').val();
    },

    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();
      var id = this.findId($item);

      this.remove(id);
    },

    updateItem: function(e) {
      var $item = $(e.target).closest('tr');
      this.update($item);
    },

    findParent: function(e) {
      return $(e.target).closest('tr');
    },

    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },

    cacheTemplate: function() {
      var $inventoryTemplate = $('#inventory_item').remove();
      this.template = Handlebars.compile($inventoryTemplate.html());
    },

    bindEvents: function() {
      $('#add_item').on('click', this.newItem.bind(this));
      $('#inventory').on('click', '.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },

    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

$(inventory.init.bind(inventory));
