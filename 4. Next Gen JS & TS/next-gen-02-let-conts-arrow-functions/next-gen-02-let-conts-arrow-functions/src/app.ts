// lets & const keyword - global, local function, & block scopes
const a = "johny walker";
let b;

var c = "cena"; // global & local function scope only

if (true) {
  let n = "minnee"; // block scope
  b = n;
}

console.log(b); // !!! ERROR n not defined!!!
