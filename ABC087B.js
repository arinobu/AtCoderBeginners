// inputに入力データ全体が入る
function Main(input) {
    input = input.split("\n");
    var A = input[0];
    var B = input[1];
    var C = input[2];
    var X = input[3];
    var count = 0;

    for(var i = 0; i <= A; i++){
        var XA = X - 500*i;
        if(XA < 0){
            break;
        }
        for(var j = 0; j <= B; j++){
            var XB = XA - 100*j;
            if(XB < 0){
                break;
            }
            for(var k = 0; k <= C; k++){
                var XC = XB - 50*k;
                if(XC < 0){
                    break;
                }
                if(XC == 0){
                    count++;
                }
            }
        }
    }
    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));