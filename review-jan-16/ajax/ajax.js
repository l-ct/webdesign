
// api.openweathermap.org/data/2.5/weather
// ?
// q=London
// &
// APPID=f350b881c646a722a61ced9928a12afa

function getWeather(cityWord){
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='
				+ cityWord
				+ '&APPID=f350b881c646a722a61ced9928a12afa';
	console.log(url);

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log('weather error:');
			console.log(data);
		},
		success: function(data){
			console.log(data);
			console.log(data.weather[0].description);
		}
	});
}


$(document).ready(function(){
	console.log('$ ready');
	$('.enter').click(function(){
		$('.result').empty();
		var cityName = $('.city').val();
		console.log(cityName);
		getWeather(cityName);
	});
});
