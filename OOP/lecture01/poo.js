'use strict';

const Person = function (name, ageOfBirth) {
  this.name = name;
  this.ageOfBirth = ageOfBirth;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.ageOfBirth);
};

const cinthia = new Person('Cinthia', 1990);
const mary = new Person('Mary', 2000);
const fernanda = 'Fernanda';
const clark = new Person('Clark', 1956);
const peter = new Person('Peter', 2015);

// console.log(Person.prototype.isPrototypeOf(fernanda));
// console.log(Person.prototype.isPrototypeOf(cinthia));
// console.log(Person.prototype.isPrototypeOf(clark));
// console.log(Person.prototype.isPrototypeOf(peter));

// prototyped linked

Person.prototype.species = 'Homo sapiens';
// console.log(cinthia.species);

// console.log(cinthia.hasOwnProperty('name'));
// console.log(cinthia.hasOwnProperty('gender'));

// Object.prototype (top of prototype chain)
// console.log(cinthia.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__.__proto__.__proto__);

const h1 = document.querySelector('h1');

console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
