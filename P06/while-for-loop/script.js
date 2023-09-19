'use strict'
// Please don't delete the 'use strict' line above

//P06-1
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


//1


sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"



//2

countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


//3
function counter(num) {
    let i = 0;
    while (i < num) {
      console.log(i);
      i++;
    }
  }



//4

/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);


//5
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    let i = 0;
  
    while (i < cars.length) {
      console.log(cars[i]);
      i++;
    }
  }

//6 forloop
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}

decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

//6 while loop


//7-1

/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
// ここにコードを書きましょう

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);


//7-2

test(addTogether([1], [4, 5, 6]), [5, 5, 6]);


//8
/**
 * @param {Array<any>} 数字の配列
 * @returns {number} 引数の配列の要素の合計値
 */
// ここにコードを書きましょう

test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);

//9
//上の関数sum_arrを参考に、関数 sum を宣言してください。
//関数 sum は、不特定の数の引数を取り、すべての引数の合計を返してください。



