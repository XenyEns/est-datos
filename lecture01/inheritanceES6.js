class PersonCL {
  constructor(name, ageOfBirth) {
    this.name = name;
    this.ageOfBirth = ageOfBirth;
  }

  calcAge() {
    console.log(2022 - this.ageOfBirth);
  }

  greet() {
    console.log(`Hey ${this._name}!`);
  }

  get age() {
    return 2022 - this.ageOfBirth;
  }

  set name(name) {
    this._name = name;
  }
}

class StudentCL extends PersonCL {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I'm ${this._name}, i have ${this.age}, and my favourite course is ${this.course}`);
  }
}

const mendez = new StudentCL('Mendez', 2003, 'JavaScript');
console.log(mendez);
mendez.calcAge();
mendez.greet();
mendez.introduce();
