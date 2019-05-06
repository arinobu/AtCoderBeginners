// inputに入力データ全体が入る
function Main(input) {
    input = input.trim();
    while(input.length > 3){
        switch(input.slice(-3,-2)){
            case "e":
                if(input.slice(-5) == "dream"){
                    input = input.slice(0,-5);
                }
                else{
                    input = 0;
                }
                break;
            case "m":
                if(input.slice(-7) == "dreamer"){
                    input = input.slice(0,-7);
                }
                else{
                    input = 0;
                }
                break;
            case "a":
                if(input.slice(-5) == "erase"){
                    input = input.slice(0,-5);
                }
                else{
                    input = 0;
                }
                break;
            case "s":
                if(input.slice(-6) == "eraser"){
                    input = input.slice(0,-6);
                }
                else{
                    input = 0;
                }
                break;
            default:
                input = 0;
        }
    }
    if(input.length == 0){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));