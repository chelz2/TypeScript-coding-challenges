// Rest parameters - any number of input args

const add = (...numbers: number[]) => {
  return numbers.map((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(2, 3, 89, 5, 6, 5, 7, 7, 7);

//rest params tuples -
const addTuple = (...numbers: [number, number, number]) => {
  return numbers.map((acc, curr) => {
    return acc + curr;
  }, 0);
};

addTuple(33, 3, 33);
