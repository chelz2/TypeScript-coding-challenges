// function & overloads - using function signature

// function getLength(val: string | any[]) {
//   // returns string or number
//   if (typeof val === "string") {
//     const numWords = val.split(" ").length;
//     return `${numWords} words`;
//   }
//   return val.length;
// }

// let noOfWords = getLength("Hello, there!!!");
// //noOfWords.length  !!! ERROR - ts not sure : number or string !!!

// noOfWords = getLength(" hello,  Mimii !!!") as string; // type casting - explicit o/p type

// noOfWords.length; // no error - ts knows o/p is string

// alternate - function signature
function getLength(val: any[]): number; // function signature - explecit return type based on i/p
function getLength(val: string): string;
function getLength(val: string | any[]) {
  // returns string or number
  if (typeof val === "string") {
    const numWords = val.split(" ").length;
    return `${numWords} words`;
  }
  return val.length;
}

let noOfWords = getLength("Hello, there!!!");
noOfWords.length; // no error - ts explecitly knows its string

const numItems = getLength(["cat", "dog"]);
console.log(numItems);
