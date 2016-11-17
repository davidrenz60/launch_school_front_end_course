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

    newItem: function(e) {
      e.preventDefault();
      console.log(this);
      var item = this.add();
      var html = this.template.replace(/ID/g, item.id);

      $('#inventory').append(html);
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
      var $templ = $('#inventory_item').remove();
      this.template = $templ.html();
    },

    bindEvents: function() {
      $('#add_item').on('click', this.newItem.bind(this));
      $('#inventory').on('click', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },

    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

$(inventory.init.bind(inventory)); // jQuery.proxy() method will do the same: $($.proxy(inventory.init, inventory)); 
