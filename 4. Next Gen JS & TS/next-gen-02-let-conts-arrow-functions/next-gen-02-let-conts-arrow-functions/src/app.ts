// lets & const keyword - global, local function, & block scopes
const a = "johny walker";
let b;

var c = "cena"; // global & local function scope only

if (true) {
  let n = "minnee"; // block scope
  b = n;
}

console.log(b); // !!! ERROR n not defined!!!

// Arrow function
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const concat = (s1: string, s2: string) => s1 + s2; // single expression in 1 line

console.log(add(6, 7));
console.log(concat("hello", " world !"));

// single parameter & expression
const printOut: (a: number | string) => void = (output) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// default function parameters
const sum = (a: number, b: number = 10) => a + b;

console.log(sum(3));
