'use strict'
// Please don't delete the 'use strict' line above

console.log((2 + 3) * 10 >= 50);

function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
  }
  
  console.log(isEqual(10, "10"));

  function isGreaterThan(valueOne, valueTwo) {
    return valueOne > valueTwo;
  }
  console.log(isGreaterThan(5,3))
  console.log(isGreaterThan(3,5))
function isOfAge(age){
    return age >=20;
}
console.log(isOfAge(20));
console.log(isOfAge(18));

function isEven(n){
    return n % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(3));

//Rectangular Solid V = lwh
function RectangularSolid(length,weight,height){
 return length*weight*height;
}
console.log(RectangularSolid(3,4,5));

function caluculatevolumeofyourpudding(radius,Radius,height){
   return 3.14*(radius**2 + radius*Radius + Radius**2)*height/3
}
console.log(caluculatevolumeofyourpudding(3,6,4));

function validCredentials(username,password){
    const length1 =7;
    if (username.length>= length1 && password.length>= length1 ){
        return true;
    }
    else{
        return false;
    }
}
const valid1 = validCredentials("hatsune","password");
console.log (valid1);
const valid2 = validCredentials("any","any");
console.log(valid2);
const valid3 = validCredentials("Applepie","any");
console.log(valid3);

function isEven(n){
    return (n & 1) === 0;
}
console.log(isEven(10));
console.log(isEven(3));


function isOfAge(age){
    if (age >=21) {
        return "飲酒可能です。";
    } else if (age===20){
        return "飲酒解禁おめでとうございます。";
    } else if (age>=18 && age<20){
        return "民法上成人ですが、未成年飲酒禁止法により飲酒不可です。";
    }else{
        return "未成年です。飲酒は法律で禁止されています。"
    }

}
console.log(isOfAge(23));
console.log(isOfAge(20));
console.log(isOfAge(18));
console.log(isOfAge(17));

