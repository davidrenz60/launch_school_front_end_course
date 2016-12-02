var ninjaA = (function() {
  function Ninja(){}
  return new Ninja();
})();

var ninjaB = Object.create(ninjaA);
var ninjaC = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor);    // this should be true
console.log(ninjaC.constructor === ninjaA.constructor);    // this should be true
