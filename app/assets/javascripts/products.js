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

    // $(window).scroll(function(){
    // 	if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
    // 		return alert('bottom');
    // 		$.getScript($('.pagination span.next').children().attr('href'));
    // 	};
    // });
});