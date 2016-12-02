function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  object.constructor = constructor;
  return result === undefined ? object : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
