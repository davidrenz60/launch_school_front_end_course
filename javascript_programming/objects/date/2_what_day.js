// Log a friendly string that tells the current day of the week.
// Using the getDay method on the date, log a string that outputs "Today's day is " plus the day.

var message = 'Today\'s day is ';
var date = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = daysOfWeek[date.getDay()];

console.log(message + day + ', the ' + date.getDate() + 'th');

// In order to have the suffix on the date (like "6th")
// we will need to write a formatter. Create a function called dateSuffix
// that receives the numeric date and returns the formatted date and suffix,
// accounting for values of 1, 2, and 3 using a suffix different than "th".

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

console.log(message + day + ', the ' + dateSuffix(date.getDate()));

// Change your string output to include the value from getMonth
// so the string will read "Today's date is Mon, " + today.getMonth() + " 6th".


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var month = months[date.getMonth()];


console.log(message + day + ', ' + month + ', the ' + dateSuffix(date.getDate()));
