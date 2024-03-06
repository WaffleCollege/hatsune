'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

//Q1
let a = "B";
let b = "A";

let temp = a;
a = b;
b = temp;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//Q2
const validCredentials = (username, password) => {
    const minLength = 5;
    return username.length >= minLength && password.length >= minLength;
};


console.log(validCredentials("user", "password")); // false
console.log(validCredentials("username", "pass")); // false
console.log(validCredentials("user123", "password123")); // true

//Q3
const pokemons = [
    {
      Number: "001",
      Name: "Bulbasaur",
      Generation: "Generation I",
      About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      Types: ["Grass", "Poison"],
    },
    {
      Number: "025",
      Name: "Pikachu",
      Generation: "Generation I",
      About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      Types: ["Electric"],
    },
    {
      Number: "019",
      Name: "Rattata",
      Generation: "Generation I",
      About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
      Types: ["Normal"],
    },
  ];
  
  const getNames = (pokemons) => {
    return pokemons.map(pokemon => pokemon.Name);
  };
  
  console.log(getNames(pokemons));
  test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);


//Q4
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
  
    for (let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
    }
  }
  

//Q6
const getQuestions = (array) => {
    return array.filter(str => str.charAt(0) === str.charAt(0).toUpperCase() && str.endsWith("?"));
  };
  
  const arrayOfStrings3 = [
    "Hi, there.",
    "What in the world?",
    "My name is JavaScript",
    "Do you want to know a secret?",
  ];
  
  console.log(getQuestions(arrayOfStrings3)); // ["What in the world?", "Do you want to know a secret?"]
  console.log(getQuestions(arrayOfStrings3.slice(2))); // ["Do you want to know a secret?"]

