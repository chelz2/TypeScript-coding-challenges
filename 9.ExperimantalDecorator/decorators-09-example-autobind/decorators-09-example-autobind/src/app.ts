// creating useful decorators - custom autobind method decorator that binds "this" to instantiated class object
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // original class method
  const adjDescriptor: PropertyDescriptor = {
    // creating new method property descriptor
    configurable: true,
    enumerable: false,
    get() {
      const boundFunc = originalMethod.bind(this); //binding "this" to instantiated object method
      return boundFunc;
    },
  };
  return adjDescriptor; // overwriting original method property descriptor - value pointing to new bounFunc
}

class Printer {
  message = "I think it is working !!!";

  @Autobind // auto binds "this" to class object
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;

//button.addEventListener("click", p.showMessage.bind(p));

button.addEventListener("click", p.showMessage); // auto binds "this"
