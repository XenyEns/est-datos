// class expression
// const PersonCL = class {}

// class declaration

class PersonCL {
  constructor(fullName, ageOfBirth) {
    this.fullName = fullName;
    this.ageOfBirth = ageOfBirth;
  }

  calcAge() {
    console.log(2022 - this.ageOfBirth);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  get age() {
    return 2022 - this.ageOfBirth;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
      console.log(name);
    } else {
      alert(`${name} is not a full name`);
    }
  }
}

const mendez = new PersonCL('Mayra Mendez', 2003);
console.log(mendez);
// mendez.calcAge();
console.log(mendez.age);
mendez.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

// Getters and Setters
const account = {
  owner: 'Xeny',
  movements: [200, 530, 120, 300, 50],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 1000;

console.log(account.movements);
