(function () {
	var getNotifications = function() {
		return $('#content .list-notifications .phenom');
	}
	var highlight = function() {
		getNotifications().each(function() {
			if(!$(this).hasClass('unread')) {
				$(this).css('background-color', 'transparent');
			} else {
				$(this).css('background-color', 'rgba(255,0,0,0.5)');
			}
		});
		setTimeout(highlight, 4000);
	};

	var createOpenAllButton = function() {
		var $button = $('<div>')
				.text('Load all')
				.css({
				'background-color': '#1D6087',
				'position': 'fixed',
				'bottom': '0px',
				'right': '0px',
				'padding': '10px'
		});
		$button.click(function() {
			var list = new Array();
			getNotifications().each(function() {
				if($(this).hasClass('unread')) {
					var link = $(this).find('.phenom-desc > a.action-card').attr('href');
					if($.inArray(link, list) == -1) {
						list.push(link);
					}
				}
			})
			$.each(list, function(idx, item) {
				window.open(item);
			})
			setTimeout(function() {location.reload();}, 1000);
		})
		$('body').append($button);
	}

	highlight();
	createOpenAllButton();
})();



