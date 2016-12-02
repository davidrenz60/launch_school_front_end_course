var shape = {
  type: '',
  getType: function() {
    return this.type;
  }
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape; // this will cause to lose reference to the constructor
Triangle.prototype.constructor = Triangle; // set the constructor back manually

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};



var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"