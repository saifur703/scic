/**
 * Array Destructuring
 */
let arr = [12, 50, 43, 101, 59];

let [a, b, c, d, e] = arr;
console.log(a);
console.log(b);
console.log(c);

/**
 * Object Destructuring
 */
let obj = {
  name: 'Saifur Rahman',
  age: 24,
  sex: 'Male',
  ph: 1813,
  country: 'BD',
};
let { name, age, sex, ph, country } = obj;
console.log(name);
console.log(age);
console.log(country);

/**
 * Nested Object Destructuring
 *
 */
let nObj = {
  book: 'Amar Desh',
  author: 'Mamun',
  authorBio: {
    authorAge: 18,
    authorCountry: 'BD',
    authorPh: 17123,
  },
};
let {
  book,
  author,
  authorBio: { authorAge, authorCountry, authorPh },
} = nObj;
console.log(book);
console.log(author);
console.log(authorAge);
console.log(authorCountry);
console.log(authorPh);
