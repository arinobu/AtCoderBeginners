// inputに入力データ全体が入る
function Main(input) {
    input = input.split(" ");
    var N = parseInt(input[0]);
    var Y = parseInt(input[1]);

    var A = 0;
    var B = 0;
    var C = 0;

    if(10000*N < Y || 1000*N > Y){
        console.log("-1 -1 -1");
    }
    else{
        var tmpC = Y%5000/1000;
        C = tmpC;
        Y -= 1000*tmpC;
        N -= tmpC;
        var tmp = Y/5000;
        B = tmp;
        if(tmp == N){
            console.log(A+" "+B+" "+C);
        }
        else if(tmp > N){
            A = tmp - N;
            B = tmp - A*2;
            if(A > N + tmpC || B < 0){
                console.log("-1 -1 -1");
            }
            else{
                console.log(A+" "+B+" "+C);
            }
        }
        else{
            switch((N - tmp)%4){
                case 0:
                    B = tmp - (N - tmp)/4;
                    C += (N - tmp)/4*5;
                    if(B < 0 || C > N + tmpC){
                        console.log("-1 -1 -1");
                    }
                    else{
                        console.log(A+" "+B+" "+C);
                    }
                    break;
                case 1:
                    B = tmp - Math.floor((N - tmp)/4);
                    C += Math.floor((N - tmp)/4)*5;
                    A += 3;
                    B -= 7;
                    C += 5;
                    if(A > N + tmpC || B < 0 || C > N + tmpC){
                        console.log("-1 -1 -1");
                    }
                    else{
                        console.log(A+" "+B+" "+C);
                    }
                    break;
                case 2:
                    B = tmp - Math.floor((N - tmp)/4);
                    C += Math.floor((N - tmp)/4)*5;
                    A += 2;
                    B -= 5;
                    C += 5;
                    if(A > N + tmpC || B < 0 || C > N + tmpC){
                        console.log("-1 -1 -1");
                    }
                    else{
                        console.log(A+" "+B+" "+C);
                    }
                    break;
                case 3:
                    B = tmp - Math.floor((N - tmp)/4);
                    C += Math.floor((N - tmp)/4)*5;
                    A += 1;
                    B -= 3;
                    C += 5;
                    if(A > N + tmpC || B < 0 || C > N + tmpC){
                        console.log("-1 -1 -1");
                    }
                    else{
                        console.log(A+" "+B+" "+C);
                    }
                    break;
            }
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));