var currentData = [];
var counter=0;

function postWhatThisClassIs(){
	$('#share-what-it-is').submit(function(e){
		e.preventDefault();
		var sending = $('#what-it-is').val();
		$.post('/add', {words: sending});
		$('#what-it-is').val('');
	});
}

function getWhatThisClasIs(){
	$.getJSON('/api', function(data){
		console.log('api');
		data.reverse();
		var diff = _.difference(data, true, currentData);
		console.log(diff);
		if (diff[0]){
			console.log('true');
			$('.results').empty();
			var str = '';
			for(var i=0; i<data.length; i++){
				str += '<li>';
				str += data[i];
				str += '</li>';
			}
			$('.results').append(str);
			currentData = data;
		}
	});
	console.log(counter);
	counter++;
	setTimeout(getWhatThisClasIs, 1000);
}

$(document).ready(function(){
	getWhatThisClasIs();
	postWhatThisClassIs();
});


