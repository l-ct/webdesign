var count = 0;
var word = 'hello';
while (word == 'hello'){
	count = count + 1;
	// above the same as count++;
	console.log(count);
	if (count > 100){
		word = 'whatever';
	}
}
