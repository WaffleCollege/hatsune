'use strict'
// Please don't delete the 'use strict' line above

function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  // テスト
  console.log(add(4, 3)); // 7 を表示
  console.log(add(100, 42)); // => 142
  
  console.log(add(100)); // 何が起こる？
  console.log(add(1, 4, 5)); // 何が起こる？


function simpleFunctionA() {
    return "Hello simple function A";
  }
  
function simpleFunctionB() {
    console.log("Hello simple function B");
  }
  
  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

  function average(num1, num2) {
    return (num1+num2)/2
  }
  console.log(average(4, 6)); // => 5
  console.log(average(100, 42)); // => 71
  console.log(average(3,2));

function square(number) {
  return number * number;
}
 console.log(square(5));

 function square(x) {
  return x * x;
}
console.log(square(5));

function Square(monkey) {
  return monkey **2 ;
}

function cube(x) {
  return x**3
}

function waffleMaker(topping) {
  return topping + " " + "Waffle"
}
console.log(waffleMaker("Apple")); // => Apple Waffle
console.log(waffleMaker("Honey")); // => Honey Waffle

function simpleHelloA() {
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);


function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}

const morningGreeting = createGreeting("Good morning" , "Mike");
const dayGreeting = createGreeting("Hello","Beau");
const eveningGreeting = createGreeting("Good evening","Alex");

console.log(morningGreeting); //"Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Beau!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示
