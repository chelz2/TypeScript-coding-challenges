// interface - readonly modifier

// interface - inheritance

interface Named {
  readonly name: string; // readonly - only onstantiated once
  age: number;
}
// extends keyword - inheritance
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Holly Holm");

// user1.name = 'Mannu'; !!!! ERRORR !!!

user1.age = 22;

user1.greet("Hi there - I am");
console.log(user1);
