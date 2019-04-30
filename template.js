// inputに入力データ全体が入る
function Main(input) {
/*
改行で区切る場合
input.split("\n");
1行目から配列に格納される
input[0], input[1], ...

半角スペースで区切る場合
tmp = input[1].split(" ");
先頭から配列に格納される
tmp[0], tmp[1], ...
*/
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));