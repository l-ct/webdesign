$(document).ready(function(){
	console.log('$ ready');
	$('.city-name-form').submit(function(e){
		// for more info:
		// api.jquery.com/event.preventdefault
		e.preventDefault();
		var cityName = $('.city-name').val();
		$.getJSON('/api/' + cityName, function(data){
			console.log(data);
			$('p').append(data);
		});
	});
});


$.ajax({
	url: '/api/' + 'london',
	type: 'GET',
	dataType: 'json',
	error: function(){
		console.log('error');
	},
	success: function(data){
		console.log(data);
	}
});