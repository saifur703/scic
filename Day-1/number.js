/**
 * isNaN
 * The isNaN() function determines whether a value is an illegal number (Not-a-Number). This function returns true if the value equates to NaN. Otherwise it returns false.
 */
function ifNotANumber(arg) {
  if (isNaN(arg)) {
    return `${arg} is not a Number`;
  } else {
    return `${arg} is a Number`;
  }
}
console.log(ifNotANumber(123));
console.log(ifNotANumber('Hello'));

/**
 * parseFloat
 * Its return to float Number
 */
let f1 = 45;
let f2 = Number.parseFloat(f1);

/**
 * parseInt
 * Its return to Integer Number
 */
let int1 = 34.556;
console.log(int1);
console.log(Number.parseInt(int1));
