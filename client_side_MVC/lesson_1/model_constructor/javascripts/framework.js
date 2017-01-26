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

