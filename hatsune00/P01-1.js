//number(数値型)
//1. Google Chrome のコンソールに 1 行ずつ、以下の式を入力してみましょう。
//それぞれ何が起こるか確認してみましょう。
4 + 10;
14


1 * 3;
3

12 * 4;
48

4 % 2;
0

5 % 2;
1

5 / 1 - 99;
-94

5000 * -100 * (1 + 2) * (5 * 6);
-45000000

1241 / 9 + 99;
236.88888888888889

//2. コンソールを使ってあなたの年齢を分単位で計算してみましょう。
19 * 525600 + 7 * 86400 * 30 
28130400


//string(文字列型)
//1. コンソール上にて、自分の名前を string(文字列型) で入力してみましょう。
"hatsune";
'hatsune'

//2. + 演算子を使って、複数の文字列を concatenate (結合)してみましょう。
"Marie" + "Ulven";
'MarieUlven'

"Kinoshita"+"Hatsune";
'KinoshitaHatsune'

"Waffle"+"College";
'WaffleCollege'


//やってみよう！
//1.以下の質問の答えを、実際にコーディングしながら試すことで、
//導き出してみてください。
//a. 文字列型(string) の値 と 数値型(number) の値 を足したらどうなりますか?
"20"+5;
'205'

//b. その順番を逆にしたらどうなりますか (例 数値型(number) + 文字列型(string) )?
5 + "20";
'520'

//c. 数値型(number) の 5 に 文字列型(string) の "5" を掛け算するとどうなりますか?
5 *"5";
25


//2.コンソールに 1 行ずつ、以下の式を入力してみましょう。
// .length を追加するとどうなると思いますか? ほかの文字列の⻑さも確認してみましょう。
"hello".length;
5
"hello world".length;
11
"123".length;
3
"hatsunekinoshita".length;
16


//3.以下はどうなりますか?
"hello".toUpperCase();
'HELLO'
"HELLO".toLowerCase();
'hello'
"hello".endsWith("o");
true
"hello".endsWith("e");
false
"hello".endsWith("llo");
true
"hello".endsWith();
false