/**
 * Hoisting is a JavaScript mechanism where variables, function declarations and classes
 *  are moved to the top of their scope before code execution.
 * Remember that JavaScript only hoists declarations, not initialisation.
 * Using the const and let to declare variable to avoid hoisting
 */

/** what will be console.logged here */

//Question 1:
console.log(foo);
// => output: referencError: foo is not defined

//Question 2
console.log(foo);
var foo = 2;
// => output: undefined
//it's the same with codes below:
//var foo;
//console.log(foo);
//foo = 2

//question 3
foo = 3;
console.log(foo);
var foo;
// //=> output: 3

//question 4
foo();
function foo() {
    console.log("hello");
}
//=> output: hello
