/**
 * Why Not to Use eval
 *
 * The eval function will execute a string of JavaScript code in the local scope.
 */

let number = 1;
function testFunc() {
  let number = 2;
  eval('number = 3');
  return number;
}
console.log(testFunc()); // 3
console.log(number); // 1

/**
 * eval only executes in the local scope when it is being called directly and when the name of the called function is actually eval.
 */

let number2 = 1;
function testFunc2() {
  let number2 = 2;
  let copyOfEval = eval;
  copyOfEval('number = 3');
  return number2;
}
console.log(testFunc2()); // 2
console.log(number2); // 3

/**
 * Security Issues
 *
 * eval also is a security problem, because it executes any code given to it. It should never be used with strings of unknown or untrusted origins
 */
