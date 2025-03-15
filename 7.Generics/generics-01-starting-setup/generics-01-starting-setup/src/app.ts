// ts - built in generics

//Array type - value types store in array
const names: Array<string> = []; //same as string[]

names.push("Ravi");
// names.push(3) // !! ERROR

const promise: Promise<number> = new Promise((resolve, reject) => {
  // generic promise type - what promise type is return
  setTimeout(() => {
    resolve(99);
  });
  reject();
});

promise.then((data) => {
  //data.split(" ") !! ERROR - promise returns number type
  console.log(data);
});
