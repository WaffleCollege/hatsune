'use strict'
// Please don't delete the 'use strict' line above
//test

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.trace();
      console.groupEnd();
    }
  }




//問題１
/**
 * @param {Array<any>} array - 配列
 * @returns {boolean} 与えられた配列の要素が重複を含んでいないかを表すブーリアン
 */
function haveMultipleElements(array) {
    const uniqueElements = new Set(array);
    return uniqueElements.size === array.length;
  }
  
  
  
  // テストを実行
  test(haveMultipleElements([1, 2, 3, 4]), true);
  test(haveMultipleElements([1, 3, 3, 4]), false);




//問題２
function calculateGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// テスト
const num1 = 36;
const num2 = 48;
const result = calculateGCD(num1, num2);
console.log(`${num1}と${num2}の最大公約数は${result}。`);





//問題３
const hands = new Array("パー", "グー", "チョキ");
const player = "パー";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const computerHandIndex = getRandomInt(0, hands.length);
const computerHand = hands[computerHandIndex];

console.log(`コンピュータの手: ${computerHand}`);
console.log(`あなたの手: ${player}`);

if (player === computerHand) {
  console.log("引き分けです！");
} else if (
  (player === "パー" && computerHand === "グー") ||
  (player === "グー" && computerHand === "チョキ") ||
  (player === "チョキ" && computerHand === "パー")
) {
  console.log("あなたの勝ちです！");
} else {
  console.log("コンピュータの勝ちです！");
}

//test
function testJanken(playerHand, computerHand) {
    console.log(`あなたの手: ${playerHand}`);
    console.log(`コンピュータの手: ${computerHand}`);
  
    if (playerHand === computerHand) {
      console.log("引き分けです！");
    } else if (
      (playerHand === "パー" && computerHand === "グー") ||
      (playerHand === "グー" && computerHand === "チョキ") ||
      (playerHand === "チョキ" && computerHand === "パー")
    ) {
      console.log("あなたの勝ちです！");
    } else {
      console.log("コンピュータの勝ちです！");
    }
  }
  

  testJanken("パー", "チョキ"); // あなたの勝ちです！
  testJanken("グー", "グー"); // 引き分けです！
  testJanken("チョキ", "パー"); // あなたの勝ちです！
  





//問題４ 
function flatten(arr) {
    const result = [];
  
    function recursiveFlatten(subArr) {
      for (const item of subArr) {
        if (Array.isArray(item)) {
          recursiveFlatten(item);
        } else {
          result.push(item);
        }
      }
    }
  
    recursiveFlatten(arr);
    return result;
  }
  
  console.log(
    flatten([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ); // [1, 2, 3, 4, 5, 6]
  
  console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
  
  console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]

//test
function testFlatten() {
    const testCases = [
      {
        input: [
          [1, 2, 3],
          [4, 5, 6],
        ],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        input: [1, 2, 3, [4, 5, 6]],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        input: [[1], [2], [3], [4, 5, 6]],
        expected: [1, 2, 3, 4, 5, 6],
      },
      
    ];
  
    for (const testCase of testCases) {
      const { input, expected } = testCase;
      const result = flatten(input);
      
      if (arraysAreEqual(result, expected)) {
        console.log("テスト成功");
      } else {
        console.log("テスト失敗");
      }
    }
  }
  
  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  testFlatten();


