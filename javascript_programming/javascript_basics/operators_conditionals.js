// 1.
var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log("this is true"); // nothing logged
}

// 2.
bananas = '3'
if (apples == bananas) {
  console.log("this is true"); // logs true
}

// 3.
if (apples === bananas) {
  console.log("this is true");
}  // nothing logged, used strict equals, before
  // == was used, so the string was first changed to a number

// 4.
if (apples === bananas) {
  console.log("strictly equal");
} else {
  console.log("not strictly equal");
}

// 5.
if (apples === bananas) {
  console.log("strictly equal");
} else if (apples == bananas) {
  console.log("same value, but different types");
} else {
  console.log("not strictly equal");
}

// 6.
if (apples === bananas) {
  console.log("strictly equal");
} else {
  if (apples == bananas) {
    console.log("same value, but different types");
  } else {
    console.log("not strictly equal");
  }
}

// 7.
bananas = 3;
apples = 3;
var areEqual = (apples === bananas);
console.log(areEqual);

// 8.
bananas = undefined;
apples = 3;
var eitherOr = apples || bananas;
console.log(eitherOr);

// 9.
bananas = 1;
eitherOr = apples || bananas;
console.log(eitherOr); // 3

eitherOr = bananas || apples;
console.log(eitherOr);   // 1

// 10.
var lastName = 'Renz'
var familyMessage = lastName === 'Renz' ? "You\'re part of the family!" : "You\'re not family!"
