// inputに入力データ全体が入る
function Main(input) {
    input = input.trim();
    input = input.split("\n");
    var N = input[0];
    input = input.slice(1);
    var tXY = [];
    for(var i = 0; i < N; i ++){
        tXY[i] = input[i].split(" ");
        for(var j = 0; j < tXY[i].length; j++){
            tXY[i][j] = parseInt(tXY[i][j]);
        }
    }
    var isPossible = true;
    if((tXY[0][1] + tXY[0][2]) > tXY[0][0] || (tXY[0][0] - (tXY[0][1] + tXY[0][2]))%2 == 1){
        isPossible = false;
    }
    for(var i = 1; i < N; i++){
        if(Math.abs(tXY[i][1]-tXY[i-1][1]) + Math.abs(tXY[i][2]-tXY[i-1][2]) > (tXY[i][0] - tXY[i-1][0]) 
        || ((tXY[i][0] - tXY[i-1][0]) - (Math.abs(tXY[i][1]-tXY[i-1][1]) + Math.abs(tXY[i][2]-tXY[i-1][2])))%2 == 1){
            isPossible = false;
        }
    }
    if(isPossible){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));