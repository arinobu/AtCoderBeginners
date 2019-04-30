// inputに入力データ全体が入る
function Main(input) {
    input = input.split(" ");
    var N = input[0];
    var A = input[1];
    var B = input[2];
    var output = 0;

    for(var i = 1; i <= N; i++){
        var tmp = i;
        var sum = i%10;
        for(var j = 4; j >= 1; j--){
            sum += Math.floor(tmp/Math.pow(10,j));
            tmp -= Math.floor(tmp/Math.pow(10,j))*Math.pow(10,j);
        }
        if(A <= sum && sum <= B){
            output += i;
        }
    }
    console.log(output);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));