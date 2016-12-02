function Vehicle() {}

Vehicle.prototype = { // this will set the prototype to a new object. If the constructor property is not set, it will be Object
  doors: 4,
  wheels: 4,
  constructor: Vehicle,
};

var sedan = new Vehicle();
console.log(sedan.constructor); // Vehicle

var coupe = new Vehicle();
coupe.doors = 2;
console.log(coupe.hasOwnProperty('doors')); // true
console.log(sedan.hasOwnProperty('doors')); // false

function Coupe() {}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Coupe.prototype.constructor = Coupe;

var crx = new Coupe();
console.log(crx.doors); // 2
console.log(crx instanceof Coupe); // true
console.log(crx instanceof Vehicle); // true
console.log(crx.constructor); // Coupe (it was changed above, otherwise it would be Vehicle)

function Motorcycle() {  // set properties directly in the constructor
  this.wheels = 2;
  this.doors = 0;
  this.constructor = Motorcycle;
}

Motorcycle.prototype = new Vehicle();


var moto = new Motorcycle();
console.log(moto.doors); // 0
console.log(moto instanceof Motorcycle); // true
console.log(moto instanceof Vehicle); // true
console.log(moto.constructor); // Motorcycle (it was changed above, otherwise it would be Vehicle)


function Sedan() {
  this.constructor = Sedan;
}

Sedan.prototype = Object.create(Vehicle.prototype);
var lexus = new Sedan();
console.log(lexus instanceof Sedan); // true;
console.log(lexus instanceof Vehicle); // true;
console.log(lexus.constructor);

for (var prop in lexus) {
  console.log(prop); // constructor property will show up here
}

// note: setting a constructor property will make it enumerable, and will be included in the
// for in loop
