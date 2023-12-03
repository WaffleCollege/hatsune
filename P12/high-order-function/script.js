'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("actual: ", actual);
      console.log("expected: ", expected);
      console.trace();
    }
  }

//演習
//Q1
const numbers =[1,2,3,4,5,6,7];
function isOdd(num){
   if(num % 2 !== 0){
       return true;
   }else{
       return false
   }
}
const result = numbers.filter(isOdd);
console.log(result);
//Output:1,3,5,7;

//Q2
["water", "tea", "coffee"].map((drink) =>{
    return drink.toUpperCase();
});
//output:WATER, TEA, COFFEE;

//P12-1
//Q1
/**
 * @param {number} ???
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう
function abs(num){
    //－がついていたら、消す
    if(num <0){
       return num * (-1);
    }else{
        return num;
    }
}

test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);

//Q2
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
 */
// ここにコードを書きましょう

function getIncrementedNumbers(array){
    return array.map((num) => num + 1);
};


test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);

//Q3
/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
// ここにコードを書きましょう
function getSwitched(array){
    //numberならstring 逆も
    return array.map(function(element){
        if(typeof element === "number"){
            return String(element);
        }else{
            return Number(element);
        }
    });
}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);



