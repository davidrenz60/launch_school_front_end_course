var Vehicle = function(options) {
  this.make = options.make;
  this.model = options.model;
};

Vehicle.prototype = {
  toString: function() {
    return this.make + ' ' + this.model;
  },

  honkHorn: function() {
    return "Beep beep!";
  }
};

