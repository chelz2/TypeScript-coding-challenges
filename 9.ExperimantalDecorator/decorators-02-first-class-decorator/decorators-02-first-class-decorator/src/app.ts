// Dacorator Factories - takes as many args as needed & return decorator function

function Logger(localString: string) {
  return function (constructor: Function) {
    console.log(localString);
    console.log(constructor);
  };
}

@Logger("PERSON LOGGING...")
class Person {
  name = "Nanny";
  constructor() {
    console.log("Creating new person...");
  }
}

const person = new Person();
console.log(person);
