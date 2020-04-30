/**
 * two type of scope in Javascript
 * Function Scope or Block scope
 *
 */

/**
 * Global Variable
 * Global Scope
 */
let x = 10;
var y = 34;

var foo = 42; // global scope
console.log(foo);
function test() {
  // local scope
  foo = 21;
  return foo;
}
console.log(test()); // 21
console.log(foo); // 21
