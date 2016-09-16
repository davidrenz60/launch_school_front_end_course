function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log('Today\'s date is ' + day + ', ' + month + ' the ' + dateSuffix(date.getDate()));
}

function dateSuffix(date) {
  var digit = date.toString().slice(-1);
  var suffix;

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return date + suffix;
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

var today = new Date();
formattedDate(today);
