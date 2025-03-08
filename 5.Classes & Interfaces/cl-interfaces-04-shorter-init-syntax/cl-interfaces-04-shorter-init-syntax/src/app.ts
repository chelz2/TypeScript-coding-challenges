// class constructor args - private & public access

class Department {
  constructor(private id: string, public name: string) {
    //
  }
  describe() {
    console.log(`Department - ${this.id} : ${this.name}`);
  }
}

const accounting = new Department("Musical", "Rabi");

accounting.describe();
