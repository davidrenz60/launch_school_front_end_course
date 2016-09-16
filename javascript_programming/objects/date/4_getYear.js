function formattedYear(date) {
  return date.getYear() + 1900;
}

today = new Date();
console.log(formattedYear(today));

// built in function is getFullYear

console.log(today.getFullYear());
