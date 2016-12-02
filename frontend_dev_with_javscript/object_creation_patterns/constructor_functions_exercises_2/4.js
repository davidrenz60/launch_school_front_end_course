// write a function to return an object that inherits from itself

Object.prototype.begetObject = function() {
  // using Object.create()
  // return Object.create(this);

  function F() {}
  F.prototype = this;
  return new F();
};

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true