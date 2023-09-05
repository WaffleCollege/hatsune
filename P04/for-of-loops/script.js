'use strict'
// Please don't delete the 'use strict' line above

//test function


//問題１
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字の合計
 */

function sumArray(number) {
  let sum = 0;
  for (let i =0; i< number.length; i++){
    sum += number[i]
  }return sum;
  }
  
  let actual1 = sumArray([1, 2, 3, 4]);
  let expected1 = 10;
  
  if (actual1 === expected1) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual1);
    console.log("expected:", expected1);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。
  




//問題２

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */

function productArray(number) {
    let product = 1;
    for (let i =0; i< number.length; i++){
      product *= number[i];
    }return product;
  }
  
 let actual2 = productArray([1, 2, 3, 4]);
 let expected2 = 24;
  
  if (actual2 === expected2) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual2);
    console.log("expected:", expected2);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

//問題３
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */

function hasFun(text) {
    return text.includes("fun");
  }
  
  let actual3 = hasFun(["whatever", 2, false, "fun", "hello"]);
  let expected3 = true;
  
  if (actual3 === expected3) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual3);
    console.log("expected:", expected3);
    console.groupEnd();
  }
  
  actual4 = hasFun(["whatever", 2, false, "run", "hello"]);
  expected4 = false;
  
  if (actual4 === expected4) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual4);
    console.log("expected:", expected4);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。


//問題４
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */

function containsOnlyBooleans() {
    // ここにコードを書きましょう。
  }
  
  actual = containsOnlyBooleans([true, false, true, false, false]);
  expected = true;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
  expected = false;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。



//問題５
/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */

function concatenate() {
    // ここにコードを書きましょう。
  }
  
  actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
  expected = ["eeny", "meeny", "miny", "moe"];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

  
//問題６

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */

function getEvenNumbers() {
    // ここにコードを書きましょう。
  }
  
  actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  expected = [2, 4, 6, 8];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。
  


//問題７

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */

function getMultipliedArray() {
    // ここにコードを書きましょう。
  }
  
  actual = getMultipliedArray([1, 2, 3], 6);
  expected = [6, 12, 18];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

  
//問題８
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列
 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */

function isSorted() {
    // ここにコードを書きましょう。
  }
  
  actual = isSorted([1, 2, 3]);
  expected = true;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = isSorted([3, 2, 3]);
  expected = false;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

//問題９
/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */

function countOccurrences() {
    // ここにコードを書きましょう。
  }
  
  actual = countOccurrences([1, 2, 3], 2);
  expected = 1;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = countOccurrences([1, 2, 2], 2);
  expected = 2;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = countOccurrences([1, 2, "elephant"], "elephant");
  expected = 1;
  
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

  
//問題１０
/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */

function getOperatedArray() {
    // ここにコードを書きましょう。
  }
  
  actual = getOperatedArray([1, 2, 3], "+", 5);
  // [1, 2, 3] のそれぞれの要素に5をたす
  // [1+5, 2+5, 3+5]
  expected = [6, 7, 8];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  actual = getOperatedArray([9, 6, 3], "/", 3);
  expected = [3, 2, 1];
  
  // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  
  // さらにテストを書きましょう。

  
