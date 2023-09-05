'use strict'
// Please don't delete the 'use strict' line above
//p04-2 続・条件分岐

//問題１
console.log(!true); // false
console.log(!false);  // true
console.log(!!true);  // true
console.log(!!false);  //false

//問題２
console.log(!(3 === 3));//false
console.log(!(5 !== 5));//true
console.log(!3);//false
console.log(!!3);//true
console.log(!3 >= 3);//false

//問題３
console.log(3 === 3 && 1); //1
console.log(1 > 2 || 2 > 2 || 3 > 2); //true
console.log(5 < 5 || 75 < 74); //false

//問題４
console.log("単項演算子とは、一つの項を用いて一つの結果を得る演算子。算術における階乗 n! のように、与えられた項に事前に決められた演算を行って結果を返す。")
console.log("二項演算子とは、二つの項を用いて一つの結果を得る演算子。加算を表す「+」のように、算術でもプログラミングでも多くの演算子は二項演算子である。")
console.log("なお、！は論理否定であり、単項演算子である。")

//問題１
/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13歳から 19歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */

function isTeenager(age) {
    // ここにコードを書きましょう.
  }
  
  actual = isTeenager(3);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = isTeenager(14);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // さらにテストを書いて、コードが正しいことを確認してください。

  


//問題２
//上の関数を書き直しましょう。もう一つ条件文を追加して、関数に渡された引数が 数値型 であるかどうかを確認し、もし数値型でなければ "Invalid! Age is not a number!" を返すようにしましょう。
actual = isTeenager("Hello!");
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "Invalid! Age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}



//問題３
/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章
 */

// ここにコードを書きましょう.

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください。


//問題４
actual = anotherGreeting(true, false, true);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "無効なインプットです！";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//問題５
/**
 * @param {number} ??? - 0 以上 100 以下の点数
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績
 */

actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください

//問題６
actual = getLetterGrade(101);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください


//問題７
/**
 * @param {"A"|"B"|"C"|"D"|"F"} ??? - 成績
 * @returns {number} 各成績における最高点
 */

actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください


//問題８
actual = getBestNumericalGrade("恐竜ってすばらしい");
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "無効な点数です。";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// さらにテストを書いて、コードが正しいことを確認してください
