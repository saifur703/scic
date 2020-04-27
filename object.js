/**
 * object create
 * Object.create() method creates a new object, using an existing object
 */

const Helloperson = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const person = Object.create(Helloperson);
person.name = 'Saifur';
person.isHuman = true;
person.printIntroduction();

/**
 * Object assign
 *
 */

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// output: Object { a: 1, b: 4, c: 5 }
