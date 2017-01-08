// 1
document.addEventListener('click', function(e) {
  var x = document.querySelector('.x');
  x.style.top = e.clientY + "px";
  x.style.left = e.clientX + "px";
});

//2
document.addEventListener('mousemove', function(e) {
  var x = document.querySelector('.x');
  x.style.top = e.clientY + "px";
  x.style.left = e.clientX + "px";
});

//3
document.addEventListener('keyup', function(e) {
  var letter = String.fromCharCode(e.which);
  var color;

  if (letter === 'B') {
    color = 'blue';
  } else if (letter === 'G') {
    color = 'green';
  } else if (letter === 'R') {
    color = 'red';
  }

  if (color) {
    var divs = document.querySelector('.x').children;
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.background = color;
    }
  }
});
