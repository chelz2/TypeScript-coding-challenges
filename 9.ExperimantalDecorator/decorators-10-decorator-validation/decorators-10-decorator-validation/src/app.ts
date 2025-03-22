//creating custom validation decorator - form user input data checks

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // list of validator
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
  console.log(registeredValidators);
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
  console.log(registeredValidators);
}

function Validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  console.log(objValidatorConfig, "objectValidator");
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default http

  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const priceEl = document.querySelector("#price") as HTMLInputElement;

  const title = titleEl.value;
  const price = priceEl.value;

  const createdCourse = new Course(title, +price);

  if (!Validate(createdCourse)) {
    alert("Invalid inputs, try again");
    return;
  }
  console.log(createdCourse);
});
