function shallowCopy(object) {
  var result = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(function(prop) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {  // this is used in case there is a property of 'hasOwnProperty on the object'
      result[prop] = object[prop];
    }
  });

  return result;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
};
bar.hasOwnProperty = '4';

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // c is 3
console.log(baz.hasOwnProperty); // 4
