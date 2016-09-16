// Write a function, incrementProperty, that takes two arguments: an Object and a String.
// If the Object contains a property with the specified name, the function should increment the value of that property.
// If the property doesn't exist, the function should add a new property with a value of 1.
// The function should return the new value of the property.

function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
