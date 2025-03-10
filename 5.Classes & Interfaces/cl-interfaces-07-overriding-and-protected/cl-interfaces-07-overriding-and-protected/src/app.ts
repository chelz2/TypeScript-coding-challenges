// class inheritance - override properties access & protected modifier of base class

class Department {
  protected employees: string[] = []; // propptected modifier keyword

  constructor(private readonly id: string, public name: string) {
    //
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // override the addEmployee method from base Department Class
  addEmployee(name: string) {
    if (name === "Mannu") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accoounting = new AccountingDepartment("it", []);

accoounting.addEmployee("Mannu");
accoounting.addEmployee("Majnu");
accoounting.printEmployeeInformation();
console.log(accoounting);
