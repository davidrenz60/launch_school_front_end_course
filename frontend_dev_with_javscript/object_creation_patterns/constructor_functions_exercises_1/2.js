function Ninja(){
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){
  return this.swung;
};

console.log(ninja.swingSword()); // true

// why is this able to log true?
// even though a new object was created before the method was defined on the
// prototype object, the chain lookup happens when the method is called, so it is
// able to be found