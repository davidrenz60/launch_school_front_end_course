var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

var people = {
  collection: [],
  currentId: 0,
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.id = this.currentId;
    this.currentId++;

    this.collection.push(person);
  },
  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var index = this.getIndex(person, id);
    var lefSide;
    var rightSide;

    if (index === -1) {
      return;
    }

    leftSide = this.collection.slice(0, index);
    rightSide = this.collection.slice(index + 1);
    this.collection = leftSide.concat(rightSide);
  },
  get: function(person, id) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person, id)];
  },
  update: function(person, id) {
    if (this.isInvalidPerson(person, id)) {
      return;
    }

    var existingPersonId = this.getIndex(person, id);

    if (this.getIndex(person, id) === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
  getIndex: function(person, id) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName && person.id === id) {
        index = i;
      }
    });

    return index;
  },
  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  }
};
