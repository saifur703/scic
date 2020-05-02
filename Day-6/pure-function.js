/**
 * Pure Function
 * The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program's execution
 */

function add(a, b) {
  return a + b;
}
console.log(add(5, 4)); // Output -> 9

/**
 * Impure Function
 * An impure function is a function that mutates variables/state/data outside of it's lexical scope, thus deeming it “impure” for this reason.
 */
let x = 5;
function div(a) {
  return a / x;
}
let div1 = div(10);
console.log(div1); // Output -> 2
