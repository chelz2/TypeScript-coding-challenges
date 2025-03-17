// ECMAScript Decorators -- OOP class method & properties features only

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
  console.log("Logger Decorator - returns new class extra info");

  return class extends target {
    age = 44;
    college = "UCLA Barkeley";
  };
}

@logger2 // adds extra info to Class
class Man {
  name = "John";

  greet() {
    console.log("Hello I am " + this.name);
  }
}

const person1 = new Man();

console.log(person1);
