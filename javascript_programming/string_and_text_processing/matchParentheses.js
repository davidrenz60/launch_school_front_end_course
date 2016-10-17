// Matching Parentheses
//
// Write a function that takes a string as argument,
// and returns true if the parentheses in the string are properly balanced, false otherwise.
// To be properly balanced, parentheses must occur in matching "(" and ")" pairs.
// Note that balanced pairs must each start with a "(", not a ")".

function isBalanced(string) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      count += 1;
    } else if (string[i] === ')') {
    count -= 1;
    }
  }

  if (count < 0) {
    return false;
  }

  return (count === 0);
}

isBalanced('What (is) this?') ;       // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
