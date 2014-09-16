$(document).ready(function(){
    $('#search-form').submit(function(event) {
    	event.preventDefault();
    	var searchValue = $('#search').val();

    $.ajax({
    	url: '/products?search=' + searchValue,
    	type: 'GET',
    	dataType: 'script'
    })
    .done(function(data) {
    	
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
    });
});