/**
 * arrow function
 *
 * Arrows is a new syntax for functions
 * Arrow functions are best for callbacks or methods like map, reduce, or forEach
 */

let arr = [5, 4, 3, 11, 97, 39];
arr.map((val, ind) => {
  console.log(`Value: ${val} and Index: ${ind}`);
});
