// inputに入力データ全体が入る
var input = "2\n5 1 1\n100 1 1";

function Main(input) {
    input = input.trim();
    console.log(input);
    input = input.split("\n");
    console.log(input);
    var N = input[0];
    input = input.slice(1);
    console.log(input);
    var tXY = [];
    for(var i = 0; i < N; i ++){
        tXY[i] = input[i].split(" ");
        for(var j = 0; j < tXY[i].length; j++){
            tXY[i][j] = parseInt(tXY[i][j]);
        }
    }
    console.log(tXY);

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

Main(input);