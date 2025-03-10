// classes inheritance

class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//class inheritance - extend keyword
class ItDepartment extends Department {
  // itdepartment extending/inhherits from department class
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// Accounting class inherit from Department class
class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  printReport() {
    console.log(this.reports);
  }
}

const itTeam = new ItDepartment("it", ["Ruby", "Jan"]);

itTeam.describe();

itTeam.addEmployee("Alex");
itTeam.printEmployeeInformation();
itTeam.name = "IT sys";
console.log(itTeam);

const accounting = new AccountDepartment("acc", []);

accounting.addReport("this is the report on of............");
accounting.printReport();
console.log(accounting);
