'use strict'
// Please don't delete the 'use strict' line above


// Please don't delete the 'use strict' line above

//p05-1
//test
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

//問題１
// ここにコードを書きましょう
const myInfo ={ 
    name:"hatsune", 
    age:19, 
    location:"Tokyo",
    isCoder:true
};


// この演習では TDD スタイルのテストは必要ありません。ここでは console.log を使用してください。
console.log(myInfo["isCoder"]); // => "true"
console.log(myInfo.name);

//問題２

 // ここにコードを書きましょう。
const morseCode ={
    t:"-"
    a:".-"
    r:".-."
}
 test(morseCode["t"], "-");
 test(morseCode["a"], ".-");
 test(morseCode["r"], ".-.");




//問題３
/**
 * @param {object} ??? - オブジェクト
 * @param {Array<string>} ??? - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */

// ここにコードを書きましょう.

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});



//問題４
const pokemons = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];

/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */

// ここにコードを書きましょう.

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。

test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);








