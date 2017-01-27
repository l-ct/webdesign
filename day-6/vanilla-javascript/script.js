var ver, hor, color;

window.onmousemove = function(e){
	console.log(e);
	ver = e.clientY / window.innerHeight;
	hor = e.clientX / window.innerWidth;
	hor = hor.toString(16).substring(2).slice(0, 2);
	ver = ver.toString(16).substring(2).slice(0, 2);
	color = '#' + hor + 'ff' + ver;
	document.body.style.backgroundColor=color;
};

console.log(document);