// ECMAScript Decorators -- OOP class method & properties features only

//1. Class Decorators

// building my first decorators

function logger(target: any, ctx: ClassDecoratorContext) {
  // logging info about class
  console.log("logger decorator :");
  console.log(target);
  console.log(ctx);
}

@logger
class Person {
  name = "John";

  greet() {
    console.log("Hello I am " + this.name);
  }
}

// decorator - editing/modifying a existing class

function logger2<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log(
    "Logger Decorator - returning new class object with new properties"
  );

  return class extends target {
    age = 44;
    college = "UCLA Barkeley";
  };
}

@logger2 // adds extra info to Class
class Person1 {
  name = "John";

  greet() {
    console.log("Hello I am " + this.name);
  }
}

const person1 = new Person1();

console.log(person1);

// decorator execution order

function logger3<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("Logger Decorator");
  console.log(target, ctx);

  return class extends target {
    class = "XCV";
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

@logger3
class Person2 {
  name = "Christy";

  greet() {
    console.log("Hello I am " + this.name);
  }
}

const christy = new Person2();

//2. Method Decorators

//creating my first class method decorator

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind();
  });
}

@logger3
class Person3 {
  name = "Monday";

  // constructor() {
  //   this.greet = this.greet.bind(this);
  // }
  @autobind
  greet() {
    console.log("Hello I am " + this.name);
  }
}

const monday = new Person3();

// solving common problems

monday.greet(); // exec greet method

const greet = monday.greet; // pointer - to greet method
//greet(); // !!!ERROR - without "this" bind added to class manually
//greet();

greet(); // "this" bind added to decorator itself - dynamic can be use on any class method
