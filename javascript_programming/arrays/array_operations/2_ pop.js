function pop(array) {
  var last = array[array.length -1];
  array.length = array.length -1;
  return last;
}

var count = [1, 2, 3];
pop(count);               // 3
console.log(count);       // [ 1, 2 ]
