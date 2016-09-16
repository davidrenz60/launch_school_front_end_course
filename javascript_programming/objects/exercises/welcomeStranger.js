// Create a function that takes 2 arguments, an array and an object.
// The array will contain 2 or more elements that, when combined with adjoining spaces, produce a person's name.
// The object will contain two keys, title and occupation, and the appropriate values.
// Your function should then display a greeting that uses the person's full name, and mentions the persons title.

function greetings(arr, status) {
  var nameGreet = 'Hello, ' + arr.join(' ') + '! ';
  var statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  return nameGreet + statusGreet;
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
