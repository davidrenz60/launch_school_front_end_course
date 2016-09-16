// Write a function, copyProperties, that takes two Objects as arguments.
// The function should copy all of the properties from the first object to the second one.
// The function should return the number of properties that were copied.

function copyProperties(obj1, obj2) {
  var copyCount = 0;
  for (var property in obj1) {
    obj2[property] = obj1[property];
    copyCount++;
  }

  return copyCount;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);          // { model: 9000, enabled: true }
