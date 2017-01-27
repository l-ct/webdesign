console.log('two ready');

// this function will return a random integer between the
// min and max possible values (inclusive)
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// return a random number (not just integers) between the
// min and max possible values
function getRandom(min, max){
	return Math.random() * (max - min) + min;
}

function runTwo(){
	var elem = document.getElementById('draw-animation');
	var two = new Two({
		width: window.innerWidth,
		height: window.innerHeight
	});
	two.appendTo(elem);

	area = two.width*two.height;
	numberOfCircles = Math.floor(area/100000);
	console.log(numberOfCircles);
	var circles = [];
	for (var i=0; i<numberOfCircles; i++){
		circles[i] = two.makeCircle(
			getRandomInt(-two.width/3,two.width/3), // x coord
			getRandomInt(-two.height/3,two.height/3), // y coord
			getRandomInt(20,200) // radius
		);
	}

	var group = two.makeGroup(circles);
	group.translation.set(two.width / 2, two.height / 2);
	group.stroke = '#000';
	group.noFill();

	two.update();
}

function showText(){
	var message = 'Hi Students, How are you today?';
	message = message.split('');
	for (var i=0; i<message.length; i++){
		$('.overlay-text').append(
			'<span style="padding-left:'
			+ getRandom(0.5,2) + 'rem;'
			+ 'padding-right:'
			+ getRandom(0.5,2) + 'rem;">'
			+ message[i]
			+ '<span>'
		);
	}
}

$(document).ready(function(){
	runTwo();
	showText();
	// on window resize erase and re-run
	$(window).resize(function(){
		$('#draw-animation').empty();
		runTwo();
	});
	setInterval(function(){
		$('#draw-animation').empty();
		runTwo();
		$('.overlay-text').empty();
		showText();
	}, 100);
});