// TS - inteface : structure of object

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person; // custom type - interface

user1 = {
  name: "JOlly",
  age: 28,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello I am");
