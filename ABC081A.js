// inputに入力データ全体が入る
function Main(input) {
  	var tmp = 0;
  	for(var i = 0; i < input.length; i++){
      if(input.charAt(i) == 1){
        tmp++;
      }
    }
  	console.log(tmp);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));