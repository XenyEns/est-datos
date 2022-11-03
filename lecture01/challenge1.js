// Coding challenge #1

/**
 * 1. Use a constructor function to implement a Car. A car has make and a speed property. The speed property is the current speed of the car in km/h;
 *
 * 2. Implement a 'accelerate' method that will increse the car's speed 10, and log the new speed to the console.
 *
 * 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
 *
 * 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
 *
 * DATA CAR 1: 'BMW' going at 120 km/h
 * DATA CAR 2: 'Mercedes' goint at 95 km/h
 * 😘😘😘😘😘😘
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is current velocity is ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is current velocity is ${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
console.log(car2);

car1.accelerate();
car2.brake();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
