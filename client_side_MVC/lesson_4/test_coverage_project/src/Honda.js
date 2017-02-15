var Honda = function(model) {

  if (!this.verify(model)) {
     throw new Error("Model " + model + " does not exist.");
     return undefined;
   }

  this.make = 'Honda';
  this.model = model;
  this.price = Honda.getPrice(this.model);
};

Honda.prototype = Object.create(Vehicle.prototype);

(function() {
  var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  var prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];

  Honda.prototype.verify = function(model) {
    return models.indexOf(model) !== -1;
  };

  Honda.getPrice = function(model) {
      var index = models.indexOf(model);
      return prices[index];
  };

  Honda.getModels = function() {
      return models.slice();
  };

  Honda.constructor = Honda;
})();

