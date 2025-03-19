function Logger(constructor: Function) {
  console.log("Logging.....");
  console.log(constructor);
}

@Logger
class Person {
  name = "J Smitih";
  constructor() {
    console.log("Creating new person obj....");
  }
}

//const person = new Person();

//console.log(person);
