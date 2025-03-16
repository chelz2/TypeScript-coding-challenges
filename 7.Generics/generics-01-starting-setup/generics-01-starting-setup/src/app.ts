// ts - built in generics - 1

//Array type - value types store in array
const names: Array<string> = []; //same as string[]

names.push("Ravi");
// names.push(3) // !! ERROR

const promise: Promise<number> = new Promise((resolve, reject) => {
  // generic promise type - what promise type is return
  setTimeout(() => {
    resolve(99);
  });
  reject();
});

promise.then((data) => {
  //data.split(" ") !! ERROR - promise returns number type
  console.log(data);
});

// ts - generic functions - 2

function merge(obj1: object, obj2: object) {
  return Object.assign(obj1, obj2);
}

const mergeObj = merge({ name: "Toy" }, { age: 3 }) as {
  name: string;
  age: number;
}; // type casting

console.log(mergeObj);

//mergeObj.name !!!ERROR without type casting
mergeObj.name; // NO ERROR

//generic fuction - <> T, U dynamic
function genericMerge<T extends object, U extends object>(objA: T, obj2: U) {
  return Object.assign(obj2, objA);
}

const mergeObj2 = genericMerge(
  { name: "Honey", hobbies: ["eating"] },
  { age: 13 }
);

mergeObj2.age; // NO ERROR

//ts - Generic contraints -3 - " extends " keyword containing generic T & U params types

// const mergeObj3 = genericMerge({ name: "Honey", hobbies: ["eating"] }, " Ravi"); !!! ERROR - both T & U has to be object types

// ts - Another Generic function - 4

interface Lengthy {
  //custom interface types
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  // extends genric T type to custom type
  let descriptionTxt = "Got no element";
  if (element.length === 1) {
    descriptionTxt = "Got 1 element";
  } else if (element.length > 1) {
    descriptionTxt = `Got ${element.length} number of elements`;
  }
  return [element, descriptionTxt];
}

console.log(countAndDescribe("Jen please come "));
console.log(countAndDescribe(["football", "cricket"]));
console.log(countAndDescribe([]));

// console.log(countAndDescribe(78))  !! ERROR

// ts generics - ' keyof ' T & U types constraints - 5

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // generic U type as key of generic T object type
  //return `Value ` + obj[key] // !!! ERROR without keyof
  return `Value ` + obj[key];
}

extractAndConvert({ name: "Kishore Patel" }, "name");

// ts generics - Generic Classes - 6

class DataStorage<T extends string | number | boolean> {
  //class with generic types - flexible with strict type check
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>(); /// stores only strings

stringStorage.addItem("Chan");
stringStorage.addItem("Lee");
//stringStorage.addItem(9) !! ERROR

stringStorage.removeItem("Chan");

console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>(); // store only number types

// const objStorage = new DataStorage<object>(); // store only objects

// objStorage.addItem({ name: "Majdur" });
// objStorage.addItem({ name: "Sima" });

// objStorage.removeItem({ name: "Majdur" }); // ERROR anamoly - removes last items

// ts generic - builtin generic utility types - Partial & Readonly 6

interface FitnessGoal {
  title: string;
  description: string;
  completion: Date;
}

function createFitnessGoal(
  title: string,
  description: string,
  completion: Date
): FitnessGoal {
  let fitnessGoal: Partial<FitnessGoal> = {};

  fitnessGoal.title = title; // !!! ERROR - without Partial generic type
  fitnessGoal.description = description;
  fitnessGoal.completion = completion;

  return fitnessGoal as FitnessGoal;
}

const games: Readonly<string[]> = ["hide & seek", "test match"]; // Readonly generic type - objects & arrays

// games.push("cricket") !! ERROR
// games.pop()
