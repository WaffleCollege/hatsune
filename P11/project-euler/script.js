'use strict'
// Please don't delete the 'use strict' line above

//question1
let x = 1, y = 2;
let evenTermsSum = 0; 

while (x <= 4000000){
    if(x % 2 === 0){
        evenTermsSum += x;
    }
    [x, y] = [y, x + y];
}
console.log(evenTermsSum);
//4613732

//question2
function largestPrimeFactor(num){
    let factor = 2;

    while (factor <= num){
        if(num % factor === 0){
           num = num / factor;
        }else{
            factor++;
        }
    }
    return factor;
}
const Number = 600851475143;
const result0 = largestPrimeFactor(Number);
console.log(result0);
//6857

const number = 13195;
const result1 = largestPrimeFactor(number);
console.log(result1);
//29

//question3

function gcd(x, y){
    while(y !== 0){
        let a = y;
        y = x % y;
        x = a;
    }
    return x;
}

function lcm(x, y){
    return (x * y) /gcd(x, y);
}
function smallestNumber(num){
    let b = 1;
    for(let i =2; i <= num; i++){
        b = lcm(b, i);
    }
    return b;
}

const result = smallestNumber(20);
console.log(result);
//232792560








