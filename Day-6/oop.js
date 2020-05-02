/**
 * OOP
 * OOP means Object Oriented Programming
 * There are 3 core concept in OOP in Javascript
 *
 * 1. Encapsulation
 * 2. Polymorphism
 * 3. Inheritance
 */

/**
 * Encapsulation
 * The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it
 */
class Student {
  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }
}
var stud = new Student();
stud.setName('Saifur');
stud.setMarks(96);
console.log(stud.getName() + ' ' + stud.getMarks());

/**
 * Polymorphism
 * The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects
 */

/**
 * Inheritance
 * Inheritance is an important concept in object oriented programming. In the classical inheritance, methods from base class get copied into derived class. In JavaScript, inheritance is supported by using prototype object
 */
