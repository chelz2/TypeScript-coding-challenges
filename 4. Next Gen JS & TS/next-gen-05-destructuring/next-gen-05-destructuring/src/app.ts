// Destructuring - arrays & objects

//arrays
const hobbies = ["guitar", "code", "study", "gardening"];

const [hobby1, hobby2, remainingHobby] = hobbies;

console.log(hobby1, hobby2, remainingHobby);

//object
const person = {
  fullName: "John Walker",
  age: 30,
  profession: "Developer",
};

const { fullName, age, profession: job } = person;

console.log(fullName, age, job);
