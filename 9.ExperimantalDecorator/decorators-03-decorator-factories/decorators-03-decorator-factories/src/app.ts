//building useful decorator

function WithTemplate(template: string, hookId: string) {
  //return function(_:Function){}
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const person = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.innerText = person.name;
    }
  };
}

@WithTemplate("<h1>Hello Decorator</h1>", "app")
class Person {
  name = "Joseph";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
