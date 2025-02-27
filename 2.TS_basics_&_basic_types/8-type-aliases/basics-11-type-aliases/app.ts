type Combinable = string | number;
type ConversionDescription = "as number" | "as string";

function combineUnionLiteral(
  input1: Combinable,
  input2: Combinable,
  convertResult: ConversionDescription
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    convertResult === "as number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineAges1 = combineUnionLiteral(33, 33, "as string");
console.log(combineAges1); // -> 66

const combineAges2 = combineUnionLiteral("33", "33", "as number");
console.log(combineAges2); // -> 66

const combineAges3 = combineUnionLiteral(33, "33", "as string");
console.log(combineAges3); // -> 3333
