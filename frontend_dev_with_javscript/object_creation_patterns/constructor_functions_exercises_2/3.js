function createObject(obj) {
  function Temp() {}
  Temp.prototype = obj;
  return new Temp();
}

var foo = {
  a: 1,
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true

// could work with .__proto__ property, but this is more compatible