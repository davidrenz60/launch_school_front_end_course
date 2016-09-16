// Create another function called formatTime that will return a string formatted with the hours and minutes as "15:30".
// Make sure you handle the situation that you need to pad a leading zero to a single digit number, for example, "03:04".

function formatTime(date) {
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());

  return hours + ':' + minutes;
}

function addZero(val) {
  return val.toString().length < 2 ? '0' + val : val;
}
