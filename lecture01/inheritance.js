// Inheritance between classes : Constructors and functions

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.age);
};

const Student = function (name, age, course) {
  Person.call(this, name, age);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`Hi my name is ${this.name} and I study ${this.course}`);
};

const mendez = new Student('Mendez', 2003, 'JavaScript');
mendez.introduce();
