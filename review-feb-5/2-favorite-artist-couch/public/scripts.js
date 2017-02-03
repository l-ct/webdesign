function submitArtist(){
	$('#add-artist').submit(function(e){
		e.preventDefault();
		var artistName = $('#artist-name').val();
		var artistLink = $('#artist-link').val();
		$.post('/api/add', {
			name: artistName,
			link: artistLink
		});
		window.location.href = '/';
	});
}

function getArtists(){
	$.getJSON('/api/artists', function(data){
		console.log(data);
		for (var i=0; i<data.length; i++){
			var str = '<li><a '
							+ 'href="http://google.com/#q='
							+ encodeURI(data[i].doc.name)
							+ '" '
							+ 'target="_blank" ">'
							+ data[i].doc.name
							+ "</a></li>";
			console.log(data[i].doc.name);
			$('.artists').append(str);
		}
	});
}
