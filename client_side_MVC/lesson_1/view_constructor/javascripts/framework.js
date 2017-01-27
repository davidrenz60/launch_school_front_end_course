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
    }
  };

  _.extend(Model.prototype, options);

  return Model;
}

function CollectionConstructor(options) {

  function Collection(modelConstructor) {
    this.model = modelConstructor;
    this.models = [];
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
    this.model.view = this;
    this.$el = $('<' + this.tag_name + ' />', this.attributes);
    this.render();
  }

  View.prototype = {
    tag_name: 'div',
    attributes: {},

    template: function() {},

    render: function() {
      this.$el.html(this.template(this.model.attributes));
    },

    remove: function() {
      this.$el.remove();
    }
  };

  _.extend(View.prototype, options);

  return View;
}
