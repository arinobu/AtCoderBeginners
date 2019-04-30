// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');
	var n = input[0];
	var tmp = input[1].split(' ');
  	var isEven = true;
  	var count = 0;
	while(isEven){
        for(var i = 0; i < n; i++){
          if(tmp[i]%2 == 1){
            isEven = false;
          }
          else{
            tmp[i] /= 2;
          }
    	}
      	if(isEven){
          count++;
        }
    }
  	console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));