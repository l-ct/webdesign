// Recursive functions kind of look like while loops
function myFunction(count){
	$('.add-stuff').append('Oh my ');
	count++;
	if (count > 100) {
		return;
	}else{
		// Notice here I'm invoking the function
		// in the middle of itself!
		myFunction(count);
	}
}

myFunction(0);