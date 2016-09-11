function push(array, value) {
  array[array.length] = value;
  return value;
}

var count = [1, 2, 3];
push(count, 4);
