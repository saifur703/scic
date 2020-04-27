/**
 * concat
 * concat() method is used to join two or more arrays.
 */
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
let arrOutput = arr1.concat(arr2);
console.log(arrOutput); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/**
 * every
 * Its tested every element and its provided boolean value
 *
 * */

const arrEvery = (arg) => arg < 40;
let arr3 = [20, 31, 11, 4];
console.log(arr3.every(arrEvery)); // true

/**
 * filter
 * its return a new array, provided call back function for each element in array
 */

let words = ['Hello Mina', 'Saifur', 'Rahman', 'Mamun', 'Akash'];
let filterWords = words.filter((word) => {
  return word.length > 6;
});
console.log(filterWords); // Hello Mina

/**
 * Find
 * Its return the value of the first element
 *
 * */

let findAr = arr1.find((fA) => {
  return fA > 3;
});
console.log(findAr); // 4

/**
 * forEach
 * its provide call back function and its show us every elements from an Array
 */

const arrforEach = arr1.forEach((cb) => {
  console.log('ForEach: ', cb);
});
arrforEach;

/**
 * indexOf
 * it returns -1 if not found
 *
 */
let indAr1 = [1, 'Hello', 'food', 'BD', 105];
console.log(indAr1.indexOf('Hello')); // 1
console.log(indAr1.indexOf('BD')); // 3
console.log(indAr1.indexOf(100)); // -1

/**
 * join
 * returns new array
 * concat all the elements
 * array like object
 *
 */

const elements = ['a', 'b', 'c'];

console.log(elements.join()); // a,b,c
console.log(elements.join('')); // abc
console.log(elements.join('-')); // a-b-c

/**
 * map
 * create a new array
 * show every elements in array
 */
const map1 = arr1.map((x) => x);
console.log(map1); // [ 1, 2, 3, 4 ]

/**
 * push
 * appends value to an Array
 *
 */
const count = arr1.push('Hamba');
console.log(count, arr1); // 5 [ 1, 2, 3, 4, 'Hamba' ]

/**
 * Pop
 * pop method removes the last element from an array
 */

const pArr = ['broccoli', 'cauliflower', 'cabbage'];

console.log(pArr.pop()); // cabbage

/**
 * reduce
 * reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
 *
 */

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr1.reduce(reducer)); // 10Hamba

/**
 * reverse
 * The first array element becomes the last, and the last array element becomes the first.
 */
const reversed = arr1.reverse();
console.log('reversed:', reversed); // reversed: [ 'Hamba', 4, 3, 2, 1 ]

/**
 * shift
 * shift method removes the element at the first element from an array and returns that removed element
 */

const firstElement = arr1.shift();
console.log(firstElement); // Hamba

/**
 * unshift
 * adds one or more elements to the beginning of an array
 */
console.log(arr1.unshift(4, 5));
console.log(arr1); // [ 4, 5, 4, 3, 2, 1 ]
