function ModelConstructor(options) {
  var id_count = 0;

  function Model(attrs) {
    id_count++;
    this.id = id_count;
    this.attributes = attrs || {};
    this.attributes.id = id_count;

    if (options && options.change && _.isFunction(options.change)) {
      this.__events.push(options.change);
    }
  }

  Model.prototype = {
    __events: [],

    __remove: function() {},

    set: function(prop, value) {
      this.attributes[prop] = value;
      this.triggerChange();
    },

    get: function(prop) {
      return this.attributes[prop];
    },

    triggerChange: function() {
      this.__events.forEach(function(cb) {
        cb();
      });
    },

    addCallback: function(cb) {
      this.__events.push(cb);
    },

    remove: function(prop) {
      delete this.attributes[prop];
      this.triggerChange();
    },
  };

  _.extend(Model.prototype, options);

  return Model;
}

function CollectionConstructor(options) {

  function Collection(modelConstructor) {
    this.models = [];
    this.model = modelConstructor;
  }

  Collection.prototype = {
    reset: function() {
      this.models = [];
    },

    add: function(model) {
      var oldModel = _(this.models).findWhere({ id: model.id });
      var newModel;

      if (oldModel) {
        return oldModel;
      }

      newModel = new this.model(model);
      this.models.push(newModel);
      return newModel;
    },

    remove: function(model) {
      model = _.isNumber(model) ? { id: model } : model;

      var m = _(this.models).findWhere(model);

      if (!m) {
        return;
      }

      m.__remove();

      this.models = this.models.filter(function(existingModel) {
        return existingModel.id !== m.id;
      });
    },

    set: function(models) {
      this.reset();
      models.forEach(this.add.bind(this));
    },

    get: function(id) {
      return _(this.models).findWhere({ id: id });
    },
  };

  _.extend(Collection.prototype, options);

  return Collection;
}

function ViewConstructor(options) {
  function View(model) {
    this.model = model;
    this.model.addCallback(this.render.bind(this));
    this.model.__remove = this.remove.bind(this);
    this.model.view = this;
    this.$el = $('<' + this.tag_name + ' />', this.attributes);
    this.$el.attr('data-id', model.id);
    this.render();
  }

  View.prototype = {
    tag_name: 'div',
    attributes: {},
    events: {},
    template: function() {},

    bindEvents: function() {
      var $el = this.$el;
      var event;
      var selector;
      var parts;

      for (var prop in this.events) {
        parts = prop.split(' ');
        selector = parts.length > 1 ? parts.slice(1).join(' ') : undefined;
        event = parts[0];

        if (selector) {
          $el.on(event + '.view', selector, this.events[prop].bind(this));
        } else {
          $el.on(event + '.view', this.events[prop].bind(this));
        }
      }
    },

    unbindEvents: function() {
      this.$el.off('.view');
    },

    render: function() {
      this.unbindEvents();
      this.$el.html(this.template(this.model.attributes));
      this.bindEvents();
      return this.$el;
    },

    remove: function() {
      this.unbindEvents();
      this.$el.remove();
    }
  };

  _.extend(View.prototype, options);

  return View;
}
