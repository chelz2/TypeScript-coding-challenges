//Classes - singleton pattern & private constructor

abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void; //abstract methods to be define on inherited class

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// singleton class - can be initiated only once
class AccountingDepartment extends Department {
  private lastReport: string;

  private static instance: AccountingDepartment; // private static instance property

  //abstract department class describe method
  describe() {
    console.log("Acc dept ID - " + this.id);
  }
  get recentReport() {
    // getter get keyword
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports found");
  }

  set recentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a new report message");
    }
    this.addReport(value);
  }

  // private constructor - singleton pattern
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    // static method to initiate sinigleton class
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("Acc", []);
    return this.instance;
  }

  // overriding the base Department Class addEmployee method
  addEmployee(name: string) {
    if (name === "Mannu") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment("hh", []);// !!EEROR
const accounting = AccountingDepartment.getInstance(); // singleton class instiatiation
const accounting2 = AccountingDepartment.getInstance();

accounting.addEmployee("Mannu");
accounting.addEmployee("majnu");
accounting.printEmployeeInformation();

accounting.addReport("hello from ts");
accounting.recentReport = "latest report reports";
const recentReport = accounting.recentReport;
console.log(recentReport);

console.log(accounting);

const employee1 = Department.createEmployee("Narendra"); //static
console.log(employee1, Department.fiscalYear);
accounting.describe();

console.log(accounting, accounting2);
