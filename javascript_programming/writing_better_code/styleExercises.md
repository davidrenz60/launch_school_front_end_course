Identify what part of the each code snippet violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify. There may be more than one issue in each code snippet.

1.

```JavaScript
var title = "The Three-Body Problem";
```
use single quotes for strings

```JavaScript
var title = 'The Three-Body Problem';
```

2.

```JavaScript
var completed = lastPageRead == 400;
```

use strict equality `===`

```JavaScript
var completed = lastPageRead === 400;
```

3.

```JavaScript
if (finishedBook())
  console.log('You have finished reading this book');
```

use curly braces on multiline if statements

```JavaScript
if (finishedBook()) {
  console.log('You have finished reading this book');
}
```

4.

```JavaScript
function read(pages) {
      console.log('You started reading.');
      for (var i=0; i<pages; i++) {
              var message = 'You read page '+i;
              console.log(message);
      }
}

read(400);
```

use two spaces for indentation
spaces before and after operators (=, + and < )

```JavaScript
function read(pages) {
  console.log('You started reading.');
  for (var i = 0; i < pages; i++) {
    var message = 'You read page ' + i;
    console.log(message);
  }
}

read(400);
```
