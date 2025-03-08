// readonly modifier keyword

class Department {
  constructor(private readonly id: string, public name: string) {
    //
  }

  inform(this: Department) {
    //this.id = "x";  !!! ERROR - readonly field!!!
    this.name = "Johnny";
    console.log(`Department - ${this.id}:${this.name}`);
  }
}

const archeology = new Department("Can't change", "Archiology");

archeology.inform();

archeology.name = "Archiology";

console.log(archeology);
