// Object

const PersonProto = {
  calcAge() {
    console.log(2022 - this.ageOfBirth);
  },

  init(name, ageOfBirth) {
    this.name = name;
    this.ageOfBirth = ageOfBirth;
  },
};

const mendez = Object.create(PersonProto);
mendez.init('Mendez', 2003);
mendez.calcAge();
console.log(mendez);
console.log(mendez._proto_ === PersonProto);
