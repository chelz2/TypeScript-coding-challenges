// Inteface & Function types

// interface & function structure
interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc; // interface - custom function type

add = (n1: number, n2: number) => n1 + n2;

console.log(add(85, 95));
