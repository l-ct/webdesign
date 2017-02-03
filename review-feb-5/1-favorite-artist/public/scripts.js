function submitArtist(){
	$('#add-artist').submit(function(e){
		e.preventDefault();
		var artistName = $('#artist-name').val();
		var artistLink = $('#artist-link').val();
		$.post('/api/add', {
			name: artistName,
			link: artistLink
		});
	});
}

function getArtists(){
	$.getJSON('/api/artists', function(data){
		console.log(data);
		for (var i=0; i<data.length; i++){
			var str = '<li><a href="'
							+ data[i].link + '">' + data[i].name
							+ "</a></li>";
			$('.artists').append(str)
		}
	});
}

$(document).ready(function(){
	console.log('$ ready');
	submitArtist();
	getArtists();
});
