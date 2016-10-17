// Exercise: Total Square Area
//
// For this exercise, we'll represent rectangles as Arrays with two elements: a height and a width.
//
// Write a Function, totalArea, that takes an Array of rectangles as an argument.
// The Function should return the total area covered by all of the rectangles.
//

function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles); // 141

// Now, write a second Function, totalSquareArea.
// This Function should be like totalArea, except it should only count the area of a rectangle if it is a square.

function totalSquareArea(rectangles) {
  squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles); // 121
