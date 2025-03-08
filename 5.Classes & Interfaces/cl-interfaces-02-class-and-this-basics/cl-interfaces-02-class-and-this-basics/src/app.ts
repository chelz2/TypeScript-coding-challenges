//class constructor function method & 'this' keyword

class Animal {
  name: string;
  kind: string;

  constructor(title: string, category: string) {
    this.name = title;
    this.kind = category;
  }

  // class object method
  // describe() {
  //   console.log(`${this.name} is a ${this.kind}`);
  // }

  //'this' & class type
  describe(this: Animal) {
    console.log(`${this.name} is a ${this.kind}`);
  }
}

const katty = new Animal("Katty", "cat");

katty.describe();

//const kattyCopy = { describe: katty.describe };

//kattyCopy.describe(); // undefined this keyword not defined !!! NO ERROR - no "this" type!!!

//kattyCopy.describe(); // !!! ERROR !!! - desribe method only takes in "this" of class type

const copyKatty = { name: "Doggy", kind: "lebrador", describe: katty.describe }; // manually passing in class objest property

copyKatty.describe(); // !! NO ERROE !!
