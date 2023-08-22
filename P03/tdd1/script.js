'use strict'
// Please don't delete the 'use strict' line above


//1
// testという名前で関数を宣言しよう
function test(actual, expected) {
    if (actual === expected) {
      console.log("Yay! Test PASSED.");
    } else {
      console.log("Test FAILED. Keep trying");
      console.log("実際のテスト値:", actual);
      console.log("期待値:", expected);
    }
  }

// ちゃんと動くか確認
test(isPositive(10), true);
// => "Yay! Test PASSED." と表示される?

test(isPositive(10), false);
// => "Test FAILED. Keep trying" と表示されたのち、「実際のテスト値」と「期待値」が表示される?


