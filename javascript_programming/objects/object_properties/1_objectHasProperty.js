// Write a function, objectHasProperty, that takes two arguments: an Object and a String.
// If the Object contains a property with the specified name, the function should return true.
// Otherwise, it should return false.

function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};


objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
