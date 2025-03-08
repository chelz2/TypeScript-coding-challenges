// classes - private & public field access

class Department {
  public name: string; // public - default, can be accces outside class also
  private employees: string[] = []; // private - can only be access inside class

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department - " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  showEmployeesInfo(this: Department) {
    console.log(this.employees.length, this.employees);
  }
}

const accounting = new Department("Accounting");

// accounting.describe();

// accounting.addEmployee("Ramesh");
// accounting.addEmployee("Raju");

// accounting.showEmployeesInfo();

accounting.name = "Documentary"; //public
// accounting.employees[2] = "Lahori"; //private !!! ERROR !!!

accounting.describe();
accounting.showEmployeesInfo();
