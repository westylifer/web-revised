
$(document).ready(function(){

    $('#searchForm').submit(function(){
        webSearch();
        return false;
    });
	
    function webSearch(){
        var inp = $('#s').val();
        var apiURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
        $.ajax({
            type: "GET",
            data: {
                q: inp,
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            url: apiURL,
            dataType:"jsonp",
            success: showMovies
        });
    };

    function showMovies(response) { 
        console.log('response', response);
        var movies = response.movies;
        $('div.found').html(""); 
		 $('.length').html("");
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            var result = $('div.found');
            result.append('<h2>'+ movie.title + '</h2>');
            result.append('<h3>'+ movie.year + '</h3>');
            result.append('<img src="' + movie.posters.thumbnail + '" />');
            result.append('<p>' + movie.synopsis + '</p>');
        };
		 
         var n = result.find("h2").length;
         $('.length').after(n);
		  
    };
	
	
    

    
    
});

