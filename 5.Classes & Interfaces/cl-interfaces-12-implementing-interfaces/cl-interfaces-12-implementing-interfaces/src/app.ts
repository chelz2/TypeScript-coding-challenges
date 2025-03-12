// TS - Classes with interface

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

// class implements interface
class Person implements Greetable {
  // implements keyword
  name: string;
  age = 28;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name + " " + this.age);
  }
}

let user1: Greetable; // custom type - interface

user1 = new Person("Molly");

user1.greet("Hello I am");

console.log(user1);
