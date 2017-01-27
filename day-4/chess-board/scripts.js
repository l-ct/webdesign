console.log('scripts.js is working.');
var size = 40;
var chessStr = '';
for(var j=1; j<=size; j++){
	for(var i=1; i<=size; i++){
		if((j+i)%2==0){
			chessStr = chessStr + ' ';
		}else{
			chessStr = chessStr + '#';
		}
	}
	chessStr = chessStr + '\n';
}
console.log(chessStr);

