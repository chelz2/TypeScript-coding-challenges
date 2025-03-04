function add(a1: number, b2: number, showResult: boolean, phrase: string) {
  const result = a1 + b2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return a1 + b2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const printPhrase = "Result is:";

add(5, 7, printResult, printPhrase);
