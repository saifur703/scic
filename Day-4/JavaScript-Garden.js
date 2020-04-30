/**
 * Everything in JavaScript acts like an object, with the only two exceptions being null and undefined.
 *
 */

console.log(false.toString()); // 'false'
console.log([1, 2, 3, 4].toString()); // '1, 2, 3, 4'

/**
 * Objects as a Data Type
 *
 */
var foo = {}; // a new empty object

// a new object with a 'test' property with value 12
var bar = { test: 12 };
/**
 * Accessing Properties
 */
var foo = { name: 'kitten' };
foo.name; // kitten
foo['name']; // kitten

var get = 'name';
foo[get]; // kitten

// foo.1234; // SyntaxError
foo['1234']; // works

// The function Declaration
function foo() {}

// The function Expression
var foo = function () {};

/**
 * Comparing Object 
 * when comparing object , it compare their memory location , Although both are look same but their memory location is not same that’s why it will return false .

 */
console.log({} === {}); // false

/**
 * using the not operator twice, a value can be converted to a boolean.
 */
console.log(!!0); // false
console.log(!!'Saifur Rahman'); //true
console.log(!![]); // true
/**
 * How this Works
 *
 * JavaScript has a different concept of what the special name this refers to than most other programming languages. There are exactly five different ways in which the value of this can be bound in the language.
 *
 * 1. The Global Scope
 *
 */
