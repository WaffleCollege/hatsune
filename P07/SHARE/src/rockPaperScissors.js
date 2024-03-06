/* exported rockPaperScissors */
//Q1

const rockPaperScissors = () => {
  // Your code here
  const choices = ["rock", "paper", "scissors"];

  const generateCombinations = (elements, length) => {
    if (length === 0) {
      return [[]];
    }

    if (elements.length === 0) {
      return [];
    }

    const firstElement = elements[0];
    const restOfElements = elements.slice(1);

    const combinationsWithoutFirst = generateCombinations(restOfElements, length);
    const combinationsWithFirst = generateCombinations(restOfElements, length - 1).map(comb => [firstElement].concat(comb));

    return combinationsWithFirst.concat(combinationsWithoutFirst);
  };

  return generateCombinations(choices, 3);
};
console.log(rockPaperScissors());


//Q2
const rockPaperScissors2 = (rounds) => {
  const choices = ["rock", "paper", "scissors"];
  const result = [];

  const generateCombinations = (roundsLeft, currentCombination) => {
    if (roundsLeft === 0) {
      result.push(currentCombination);
      return;
    }

    for (let choice of choices) {
      generateCombinations(roundsLeft - 1, currentCombination.concat(choice));
    }
  };

  generateCombinations(rounds, []);

  return result;
};

console.log(rockPaperScissors(4));


