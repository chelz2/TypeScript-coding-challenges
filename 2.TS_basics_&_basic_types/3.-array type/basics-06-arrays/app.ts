const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// explicitly defining what varaiable can store -> array of string dtype
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //ts inference -> knows its string !!NO ERROR!!
  // console.log(hobby.map()); // !!! ERROR !!!
}
