// 1.
// undefined. a is hoisted and declared, but not defined
// blocks do not create a new scope
//
// 2.
// logs hello
// ReferenceError
//
// a is hoisted and declared. a is assigned to 'hello'.
// a is not available in the outer scope.
//
// 3.
// 4
// the extra declaration does not have an effect. The block
// will iterate and a will be set to 4, which is the final
// iteration.
//
// 4.
// 4
// 3
// foo function returns the value of bar which is 4.
// a is reassigned twice and 3 is logged
//
// 5.
// supernested
// global
//
// supernested is logged as the return value of the checkScope
// function. The global a variable is not changed because the
// var a is shadowed inside of the functions. Those would
// be changed. The global a is not changed.
//
// 6.
// outer
// outer
// outer
// inner
//
// function arguments become local variables, so their value
// is not changed. b is reassigned, it is not a function
// parameter
//
// 7.
// 50
// 60
// 15
//
// the function is defined with the same parameter name as the
// outer scoped variable. The parameter creates a local variable
// with the same name. The toal is reassigned in the function
//
// 8.
// outer
// TypeError, setScope is not a function
//
// with the function expression, the variable declaration is only
// hoisted. therefore when the function is attempted to be called,
// is is not defined.
