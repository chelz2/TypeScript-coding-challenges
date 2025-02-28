function add(n1: number, n2: number): number {
  //explicitly defined return  value type
  return n1 + n2;
}

//void return type - function returns nothing - diff between void & undefined type
function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}

//function type - variable store
let combineValues: Function;

combineValues = add;

//combineValues = 6 !!! throws ERROR !!!
combineValues(4, 5); // returns 9

combineValues = printResult;
combineValues(4, 5); // !!!runtime ERROR !!!

// function type - explicitly define parameter & return type
let combineValue: (a: number, b: number) => number;

combineValue = add;
combineValue(8, 9);

//combineValue = printResult // !!! ERROR !!!!

//function type & explicitly define callback parameters & return
function addAndHandle(n1: number, n2: number, cb: (number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 7, (sum) => console.log(sum));

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
