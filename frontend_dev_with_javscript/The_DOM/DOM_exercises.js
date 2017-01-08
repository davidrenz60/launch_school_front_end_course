var notice = document.getElementById('notice');

document.getElementById('toggle').onclick = function(e) {
  e.preventDefault();

  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};

notice.onclick = function(e) {
  e.preventDefault();
  this.setAttribute('class', 'hidden');
};

document.getElementById('multiplication').innerText = 13 * 9;
document.body.setAttribute('id', 'styled');

