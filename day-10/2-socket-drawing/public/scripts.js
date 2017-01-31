var socket = io.connect('/');

socket.on('init', function (data) {
	console.log(data);
	for (var i=0; i<data.length; i++){
		$('#art-board').append(data[i]);
	}
});

socket.on('other clicks', function (data) {
	console.log(data);
	$('#art-board').append(data);
});

$(document).click(function(e){
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	console.log(e);
	console.log(e.clientX);
	console.log(e.clientY);
	console.log(windowHeight);
	console.log(windowWidth);

	heightRatio = e.clientY / windowHeight;
	widthRatio = e.clientX / windowWidth;

	console.log(heightRatio);
	console.log(widthRatio);

	// http://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
	heightRatio = Math.floor(heightRatio*100);
	widthRatio = Math.floor(widthRatio*100);

	console.log(heightRatio);
	console.log(widthRatio);

	var element = '<div class="dot" style="'
		+ 'top:' + heightRatio + '%;'
		+ 'left:' + widthRatio + '%;'
		+ '"></div>';

	$('#art-board').append(element);

	socket.emit('another click', { anotherDot: element });

});