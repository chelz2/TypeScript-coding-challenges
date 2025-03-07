//creating classes - ts/js
class Vehicle {
  wheeler: number;
  category: string;

  constructor(wheel: number, model: string) {
    this.wheeler = wheel;
    this.category = model;
  }
}

const motor = new Vehicle(3, "tuk tuk"); // new instance object of vehicle class

console.log(motor);
