function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  }
};

console.log(ninja.swingSword());

// logs a TypeError. Instead of a method being defined on Ninja's
// prototype, it is assigned to a new object and the method that is
// called cannot be found