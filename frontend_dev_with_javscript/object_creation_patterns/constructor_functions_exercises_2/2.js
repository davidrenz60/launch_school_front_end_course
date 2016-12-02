function User(first, last) {
  if (!(this instanceof User)) {  // new keyword changes context to new object, this will check for that
    return new User(first, last);
  }

  this.first = first;
  this.last = last;
  this.name = this.first + ' ' + this.last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe