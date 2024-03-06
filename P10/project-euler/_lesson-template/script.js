'use strict'
// Please don't delete the 'use strict' line above

//Q1
const sumOfMultiples = (limit) => {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  
  const result = sumOfMultiples(1000);
  console.log(result); 
  

//Q2
const isPalindrome = (num) => {
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
};

const findLargestPalindrome = () => {
    let largestPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            const product = i * j;
            if (product <= largestPalindrome) {
                break;
            }
            if (isPalindrome(product)) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
};

console.log(findLargestPalindrome());



//Q3



