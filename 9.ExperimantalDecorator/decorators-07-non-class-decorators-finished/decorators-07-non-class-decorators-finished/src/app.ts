// class decortaot returning new modified extended class object

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      // retuning modified class instance object
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name: string;

  constructor(t: string) {
    this.name = t;
    console.log("Creating person object...");
  }
}

const pers = new Person("Henry");

console.log(pers);

//8. other return types - method & accessor decorator methods returns new property descriptor
