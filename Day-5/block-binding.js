/**
 * var and let
 * var is a global scope
 *
 * Hoisting
 * Hoisting is a JavaScript method where  functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local
 *
 * let is as like var. It's a new features of EcmaScript6.
 */
var x = 10; // global
function xFunc() {
  let y = 5; // local scope
  return x + y;
}
console.log(xFunc());
console.log(y); // y is not defined
