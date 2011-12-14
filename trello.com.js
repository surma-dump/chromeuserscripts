function highlight() {
	$('#content .list-notifications > div > div').each(function() {
		if($(this).hasClass('read')) {
			$(this).css('background-color', 'transparent');
		} else {
			$(this).css('background-color', 'rgba(255,0,0,0.5)');
		}
	});
	setTimeout(highlight, 4000);
}
highlight();

