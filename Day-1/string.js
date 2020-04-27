/* 
3 types of String 
1. "" -> Double Quotation 
2. '' -> Single Quotation 
3. `` -> Caret 
*/

/* --- String Example --- */
var s1 = 'Hello Bangladesh!';
console.log(s1); // Output -> Hello Bangladesh!
var s2 = 'Saifur Rahman';
console.log(`Hello ${s2}`); // Output -> Hello Saifur Rahman

/**
 *
 * charAt
 * charAt() is a method that returns the character from the specified index.
 */
console.log(s1.charAt(0)); // Output -> H

/**
 * concat
 * The concat() method is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
 */
var c1 = 'Hi';
var c2 = 'BD';
var c3 = c1.concat(' Hello', ' ', c2);
console.log(c3); // Output -> Hi Hello BD

/**
 * includes
 * The includes() method determines whether a string contains the characters of a specified string. This method returns true if the string contains the characters, and false if not.
 */
let inc1 = 'I love my Country.';
console.log(inc1.includes('love')); // return true

/**
 * endsWith
 * The endsWith() method determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the characters, and false if not.

 */

let e1 = 'I learn JavaScript';
console.log(e1.endsWith('JavaScript')); // Output -> true
console.log(e1.endsWith('learn')); // Output -> false

/**
 * indexOf
 * The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
 */
let ind1 = 'programming hero';
console.log(ind1.indexOf('saifur')); // Output -> -1
console.log(ind1.indexOf('hero')); // Output -> 12

/**
 * lastIndexOf
 * The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
 */
let lastIndx = 'Hello Programmers boy';
console.log(lastIndx.lastIndexOf('Programmers')); // Output -> 6

/**
 * replace
 * replace() is built in function in JavaScript which is used to replace a part of the given string with some another string or a regular expression. The original string will remain unchanged.
 */
let rep1 = 'something replace';
console.log(rep1.replace('something', 'Hello')); // Output -> Hello replace

/**
 * Slice
 * slice() method is used to fetch the part of the string and returns the new string.
 */
let sl1 = 'slice word';
console.log(sl1.slice(1, 3)); // li

/**
 * toLowerCase
 * Its convert to lowercase
 */
let lWord = 'Hello PROGRAMMERS';
console.log(lWord.toLowerCase());

/**
 * toUpperCase
 * Its convert to Uppercase
 */
let uWord = 'hi, how are you?';
console.log(uWord.toUpperCase());

/**
 * trim
 * Its remove white space
 */
let tr1 = 'Hello, dear, How are you?  ';
console.log(tr1);
let tr2 = tr1.trim();
console.log(tr2);
