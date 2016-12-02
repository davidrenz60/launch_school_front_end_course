// function getDefiningObject(object, propKey) {
//   while (object !== Object.prototype) {
//     if (object.hasOwnProperty(propKey)) {
//       return object;
//     } else {
//       object = Object.getPrototypeOf(object);
//     }
//   }

//   return null;
// }

function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null
