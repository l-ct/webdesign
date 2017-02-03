var socket = io.connect('/');

socket.on('initialize', function (data) {
	console.log(data);
	for (var i=0; i<data.length; i++){
		$('.results').append(data[i]);
	}
});

socket.on('other opinions', function (data) {
	console.log(data);
	$('.results').prepend(data);
});

$('#share-what-it-is').submit(function(e){
	e.preventDefault();
	var whatItIs = $('#what-it-is').val();
	whatItIs = '<li>' + whatItIs + '</li>';
	$('.results').prepend(whatItIs);
	socket.emit('add opinion', whatItIs);
	$('#what-it-is').val('');
});
