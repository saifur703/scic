/**
 * class declaration
 * JavaScript class is a type of function
 * Classes are declared with the class keyword
 */
class Book {
  constructor(name) {
    this.name = name;
  }
  Author() {
    console.log(this.name);
  }
}
let book1 = new Book('John Doe');
book1.Author(); // Output -> John Doe

/**
 * class expression
 * class expression is one way to define a class in ECMAScript 2015
 * class expressions can be named or unnamed
 * If named, the name of the class is local to the class body only
 * JavaScript classes use prototype-based inheritance
 */

/* 1. unnamed */
let add = class {
  constructor(n) {
    this.n = n;
  }
  totalAdd() {
    return this.n + this.n;
  }
};
/* 2. named */
let add = class add2 {
  constructor(number) {
    this.number = number;
  }
  totalAdd() {
    return this.number + this.number;
  }
};
