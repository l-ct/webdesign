$document.ready(function(){
	console.log('$ ready');
	$('p').hover(function(){
		$(this).css('background-color', 'red');
	});
});
