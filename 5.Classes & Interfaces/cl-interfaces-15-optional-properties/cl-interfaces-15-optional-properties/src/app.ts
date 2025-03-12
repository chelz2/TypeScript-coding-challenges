// interfaces & classes - optional parameters & properties

interface Greetable {
  readonly name?: string;
  age?: number; // optional property - ?
  greet(phrase: string): void;
}

class Person implements Greetable {
  // no age option property added - !!! NO ERROR !!!
  name?: string; // optional class property

  constructor(n?: string) {
    // default - undefined
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi <3 !!!");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi, I am");

console.log(user1);
