/**
 * Cloning Array by spread operator
 */
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1]; // Spread Operator

console.log(arr1); // [ 1, 2, 3, 4 ]

arr2.push(5);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4 ]

/**
 * Cloning Array by Concat()
 */
let x = [5, 6, 7, 2];
let y = x.concat();

console.log('Concat: ');

console.log(x); // [ 5, 6, 7, 2 ]
console.log(y); // [ 5, 6, 7, 2 ]

x.push(9);
console.log(x); // [ 5, 6, 7, 2, 9 ]
console.log(y); // [ 5, 6, 7, 2 ]
