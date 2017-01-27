var increasing = true;
var num = 0;

function pulsate(){
	var color = 'rgb(' + num + ',' + num + ',' + num + ')';
	$('html, body').css('background', color);
	if (increasing){
		num+= 1;
	}else{
		num-= 1;
	}
	if (num>255){
		increasing = false;
	}
	if (num<0){
		increasing = true;
	}
	setTimeout(pulsate, 1);
}

pulsate();