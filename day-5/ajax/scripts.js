
// KEY: 153b231c11778c2ca9d7ab58c0d71142
// SECRET: c1248d7c311565ed
// https://api.flickr.com/services

// https://www.flickr.com/services/rest/
// ?method=flickr.photos.search
// &text=rainy
// &sort=relevance
// &format=json
// &api_key=153b231c11778c2ca9d7ab58c0d71142
// &nojsoncallback=1

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg


function getFlickrData(searchTerm){
	var flickrApiUrl =
		'https://www.flickr.com/services/rest/?'
		+ 'method=flickr.photos.search'
		+ '&text=' + searchTerm
		+ '&sort=relevance&format=json'
		+ '&api_key=153b231c11778c2ca9d7ab58c0d71142'
		+ '&nojsoncallback=1';
	$.ajax({
		url: flickrApiUrl,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log('Uh oh!');
		},
		success: function(data){
			console.log(data);
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
			var flickrImgUrl =
				'https://farm' + data.photos.photo[0].farm
				+ '.staticflickr.com/'
				+ data.photos.photo[0].server +'/'
				+ data.photos.photo[0].id + '_'
				+ data.photos.photo[0].secret + '.jpg';
			$('.result').append('<img src="' + flickrImgUrl + '" >');
		}
	});
}


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
			var weatherDescription = data.weather[0].description;
			getFlickrData(weatherDescription);
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
