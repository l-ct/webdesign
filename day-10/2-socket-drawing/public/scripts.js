var socket = io.connect('/');

// If the drawing has been going on for a while
// this takes all of the accumulated divs from other 
// users and appends them all as soon as page is loaded.
socket.on('init', function (data) {
	console.log(data);
	for (var i=0; i<data.length; i++){
		$('#art-board').append(data[i]);
	}
});

// every time another user sends information to the server
// the server will broadcast that info on the 'other clicks'
// channel
socket.on('other clicks', function (data) {
	console.log(data);
	$('#art-board').append(data);
});

$(document).click(function(e){

	// grab the location of cursor when clicked and divide
	// x and y coordinated by width and height of window
	var heightRatio = e.clientY / window.innerHeight;
	var widthRatio = e.clientX / window.innerWidth;

	// turn the decimal into a whole percent
	heightRatio = Math.floor(heightRatio*100);
	widthRatio = Math.floor(widthRatio*100);

	console.log(heightRatio);
	console.log(widthRatio);

	var element = '<div class="dot" style="'
		+ 'top:' + heightRatio + '%;'
		+ 'left:' + widthRatio + '%;'
		+ '"></div>';

	// append html to page
	$('#art-board').append(element);
	// send html to server
	socket.emit('another click', element);
});