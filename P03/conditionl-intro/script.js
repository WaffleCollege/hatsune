'use strict'
// Please don't delete the 'use strict' line above


//問題1
function simplePasswordLock(password) {
    if (password = "password") {
      return "Correct! Welcome.";
    }else{
    return "Incorrect password, please try again.";}
  }

  console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
  console.log(simplePasswordLock("password")); // => "Correct! Welcome."


//問題２
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

//3
function isItTooLong(words){
    if(words.length >10){
        return true;
    }else{
        return false;
    }
}

console.log(isItTooLong("ohayou"));
console.log(isItTooLong("ohayougozaimasu"))

//4
function biggerNumber(numOne, numTwo) {
    if(numOne>numTwo){
        return "The first argument is bigger."
    }else{
        return "The second argument is bigger."
    }
}

console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'

//5
function greeting(name,language){
    let greetingMessage ="";

    switch (language) {
       
        case "Japanese":
            greetingMessage = `Konnichiwa, ${name}!`;
            break;
        case "English":
            greetingMessage = `Hello, ${name}!`;
            break;
        default:
            greetingMessage = `Unsupported language: ${language}`;
    }
    
    return greetingMessage;
    
}

console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"

