// inputに入力データ全体が入る
function Main(input) {
    input = input.trim().split("\n");
    input.shift();
    console.log((new Set(input)).size);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));