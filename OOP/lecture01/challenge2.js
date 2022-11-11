// Coding challenge 2

/**
 * ✅ Re-create challenge 1, but this time using ES6 class.
 *
 * ✅ 2. Add a getter called 'SpeedUS' which returns the current speed in mi/h (divide by 1.6)
 *
 * 3. Add a setter called 'SpeedUS' which sets the current speed in mi/h (but converts it to km/h before staring the value, by multiplying the input by 1.6)
 *
 * 4. Crete a new car and experiment with the accelerate and brake methods, and with the getter and setter.
 *
 * DATA CAR 1: 'Ford' going at 120 km/h
 * 😘
 */

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is current velocity is ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`The ${this.make} is current velocity is ${this.speed} km/h`);
  }

  get SpeedUS() {
    return this.speed / 1.6;
  }

  set SpeedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.break();
console.log(ford.SpeedUS + ' mi/h');
ford.SpeedUS = 45;
console.log(ford.SpeedUS + ' mi/h');
