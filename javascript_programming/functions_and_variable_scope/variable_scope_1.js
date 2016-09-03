// 1.

// outer. uses global scope var a
// inner. the function used the var a declared in its own scope
// outer. same as the first call

// 2.

// outer. the global variable a is used in the console.log call
// inner. the global variable a is reassigned in the function call
// inner. since a is now changed, console.log logs inner

// 3.

// empty
// play station
// computer

// the global variable is first logged. In shop3(), a local variable is
// created which shadows the global variable. The local variable basked is
// logged. The last call logs the global var basket which was changed in shop2()

// 4.

// undefined, the variable declaration is hoisted, but the assignment is not,
// so a is undefined

// 5.

// ReferenceError, the function is never called, so a does not get declared in
// the global scope

// 6.
// logs hello. Same as the previous example but the function is called.
// a new global variable a is created since there was no declaration.

// 7.
// ReferenceError. A local variable is created inside the function hello().
// it is not accessible outside of its scope.
