// Spread operator - arrays & objects

//arrays
const sports = ["football", "baseball"];
const activeSports = ["tennis", ...sports];

console.log(activeSports);

//objects

const person = {
  name: "Jolie Brad",
  age: 22,
};

const xeroxPerson = { ...person };

console.log(xeroxPerson);
