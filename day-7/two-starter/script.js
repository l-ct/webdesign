console.log('two ready');


// Setting up Two.js
var elem = document.getElementById('draw-animation');
var two = new Two({
	width: window.innerWidth,
	height: window.innerHeight
});
two.appendTo(elem);

// create the circle variable
var circle = two.makeCircle(two.width/2, two.height/2, 50);
circle.fill = '#000';

// call update to render
two.update();
