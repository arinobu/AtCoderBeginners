// inputに入力データ全体が入る
function Main(input) {
    input = input.split("\n");
    var A = input[1].split(" ");
    var N = input[0];
    var sortA = A.sort(function(a,b){
        return a-b;
    });
    var Alice = 0;
    var Bob = 0;
    for(var i = 0; i < A.length; i++){
        sortA[i] = Number(sortA[i]);
    }

    for(var i = N-1; i >= 0; i -= 2){
        Alice += sortA[i];
    }
    for(var i = N-2; i >= 0; i -= 2){
        Bob += sortA[i];
    }
    console.log(Alice-Bob);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));